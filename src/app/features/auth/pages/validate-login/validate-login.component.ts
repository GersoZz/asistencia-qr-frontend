import { Component, inject } from '@angular/core'
import { GoogleOauthService } from '../../services/google-oauth.service'
import { CommonModule } from '@angular/common'
import { Router } from '@angular/router'

@Component({
  selector: 'app-validate-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './validate-login.component.html',
  styleUrl: './validate-login.component.css',
})
export class ValidateLoginComponent {
  private googleOAuthService = inject(GoogleOauthService)
  private router = inject(Router)
  isLoading: boolean = true

  // En el constructor se puede hacer fetch ?
  constructor() {
    this.validateLogin()
  }

  validateLogin() {
    this.googleOAuthService.loginWithBackend().subscribe({
      next: (response) => {
        console.log('Response from backend:', response)
        // Redirige según la respuesta del backend
        // if (response?.redirectTo === 'menu') {
        //   this.router.navigate(['/menu'])
        // } else if (response?.redirectTo === 'cursos') {
        //   this.router.navigate(['/cursos'])
        // } else {
        //   // Manejo de casos inesperados, por ejemplo, un error o estado no válido
        //   console.error('Invalid response from backend:', response)
        //   // muestra un pop up de error con boton a login
        // }
        this.router.navigate(['/cursos']) //P: Temporal
      },
      error: (error) => {
        console.error('Error during login:', error)
        // muestra un pop up de error con boton a login
      },
      complete: () => {
        this.isLoading = false
      },
    })
  }
}
