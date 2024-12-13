import { HttpClient, HttpHeaders } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc'
import { environment } from '@envs/environment'
import { AuthResponseDTO } from 'src/app/core/models/authDTO.interface'
import { tap } from 'rxjs'
import { TokenService } from 'src/app/core/services/token.service'

@Injectable({
  providedIn: 'root',
})
export class GoogleOauthService {
  private http = inject(HttpClient)

  constructor(private oauthService: OAuthService, private tokenSevice: TokenService) {
    this.initLogin()
  }
  initLogin() {
    const config: AuthConfig = {
      issuer: 'https://accounts.google.com',
      strictDiscoveryDocumentValidation: false,
      clientId: environment.CLIENT_ID,
      redirectUri: window.location.origin + '/validate-login',
      scope: 'openid profile email',
    }

    this.oauthService.configure(config)
    this.oauthService.loadDiscoveryDocumentAndTryLogin().then((isLoggedIn) => {
      if (isLoggedIn) {
        console.log('logged in')
      } else {
        console.log('not logged in')
      }
    })
  }

  login() {
    this.oauthService.initImplicitFlow()
  }

  logout() {
    this.oauthService.revokeTokenAndLogout()
    this.oauthService.logOut()
  }

  getProfile() {
    return this.oauthService.getIdentityClaims()
  }

  getToken() {
    return this.oauthService.getAccessToken()
  }

  loginWithBackend() {
    const accessToken = this.oauthService.getAccessToken()
    console.log('🚀 ~ GoogleOauthService ~ loginWithBackend ~ accessToken:', accessToken)
    const data = this.oauthService.getIdentityClaims()
    console.log('🚀🚀🚀🚀🚀 ~ file: google-oauth.service.ts:58 ~ GoogleOauthService ~ loginWithBackend ~ data:', data)

    const headers = new HttpHeaders({
      token: accessToken,
    })

    console.log('🚀 ~ environment.API_URL:', environment.API_URL)
    return this.http.get<AuthResponseDTO>(`${environment.API_URL}/auth/g-oauth`, { headers }).pipe(
      tap((response) => {
        this.tokenSevice.saveToken(response.data.token)
      }),
    )
  }
}
