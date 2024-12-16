import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { Router, RouterLinkWithHref } from '@angular/router'
import { userInfo } from 'src/app/core/models/userPayload.interface'
import { TokenService } from 'src/app/core/services/token.service'
import { GoogleOauthService } from 'src/app/features/auth/services/google-oauth.service'

@Component({
  selector: 'app-student-menu',
  standalone: true,
  imports: [RouterLinkWithHref, CommonModule],
  templateUrl: './student-menu.component.html',
  styleUrl: './student-menu.component.css',
})
export class StudentMenuComponent {
  userInfo: userInfo | null = null

  constructor(
    private router: Router,
    private tokenService: TokenService,
    private googleOAuthService: GoogleOauthService,
  ) {
    this.userInfo = this.tokenService.getUserInfo()
  }

  logout() {
    // this.googleOAuthService.logout()
    this.tokenService.removeToken()
    this.router.navigate(['/login'])
  }
}
