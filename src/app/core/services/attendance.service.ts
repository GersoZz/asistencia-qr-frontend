import { inject, Injectable } from '@angular/core'
import { TokenService } from './token.service'
import { environment } from '@envs/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http'

export interface ResponseQrJWT {
  success: boolean
  data: string
}
export interface ResponseRegisterQr {
  success: boolean
  data: {
    _id: string
    message?: string
  }
}

@Injectable({
  providedIn: 'root',
})
export class AttendanceService {
  private http = inject(HttpClient)

  constructor(private tokenService: TokenService) {}

  getQr(sessionId: string) {
    const token = this.tokenService.getToken()
    const headers = new HttpHeaders({
      token: token as string,
    })

    return this.http.get<ResponseQrJWT>(`${environment.API_URL}/attendance/generate-qr/${sessionId}`, { headers })
  }

  registerQr(sessionJWT: string) {
    const token = this.tokenService.getToken()
    const headers = new HttpHeaders({
      token: token as string,
    })

    return this.http.get<ResponseRegisterQr>(`${environment.API_URL}/attendance/register-qr/${sessionJWT}`, { headers })
  }

  updateAttendance(sessionId: string, studentId: string, attendance: boolean) {
    const token = this.tokenService.getToken()

    const headers = new HttpHeaders({
      token: token as string,
    })

    const body = {
      studentId,
      state: attendance,
    }

    return this.http.post<ResponseQrJWT>(`${environment.API_URL}/attendance/sessions/${sessionId}/student`, body, {
      headers,
    })
  }
}
