import { Component } from '@angular/core'
import { Router, RouterLinkWithHref } from '@angular/router'
import { TokenService } from 'src/app/core/services/token.service'
import { GoogleOauthService } from 'src/app/features/auth/services/google-oauth.service'

@Component({
  selector: 'app-student-menu',
  standalone: true,
  imports: [RouterLinkWithHref],
  templateUrl: './student-menu.component.html',
  styleUrl: './student-menu.component.css',
})
export class StudentMenuComponent {
  constructor(
    private router: Router,
    private tokenService: TokenService,
    private googleOAuthService: GoogleOauthService,
  ) {}

  logout() {
    // this.googleOAuthService.logout()
    this.tokenService.removeToken()
    this.router.navigate(['/login'])
  }
}
