import { Component, inject } from '@angular/core'
import { GoogleOauthService } from '../../services/google-oauth.service'
import { GoogleIconComponent } from '../../ui/google-icon/google-icon.component'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [GoogleIconComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private googleOAuthService = inject(GoogleOauthService)

  loginWithGoogle() {
    this.googleOAuthService.login()
  }
}
