import { HttpClient, HttpHeaders } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { TokenService } from './token.service'
import { environment } from '@envs/environment'
import { ResponseDTO, SectionDTO, SessionDTO } from '../models/info.interface'

@Injectable({
  providedIn: 'root',
})
export class InfoService {
  private http = inject(HttpClient)

  constructor(private tokenService: TokenService) {}

  getSections() {
    const token = this.tokenService.getToken()

    const headers = new HttpHeaders({
      token: token as string,
    })

    return this.http.get<ResponseDTO<SectionDTO>>(`${environment.API_URL}/info/get-sections`, { headers })
  }

  getSessions(sectionId: string) {
    const token = this.tokenService.getToken()

    const headers = new HttpHeaders({
      token: token as string,
    })

    return this.http.get<ResponseDTO<SessionDTO>>(`${environment.API_URL}/info/sections/${sectionId}/sessions`, {
      headers,
    })
  }
}
