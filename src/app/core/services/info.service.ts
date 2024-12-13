import { HttpClient, HttpHeaders } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { TokenService } from './token.service'
import { environment } from '@envs/environment'
import { sectionResponseDTO } from '../models/info.interface'

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

    return this.http.get<sectionResponseDTO>(`${environment.API_URL}/info/get-sections`, { headers })
  }
}
