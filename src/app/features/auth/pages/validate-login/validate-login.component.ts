import { Component, inject, OnInit } from '@angular/core'
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
export class ValidateLoginComponent implements OnInit {
  private googleOAuthService = inject(GoogleOauthService)
  private router = inject(Router)
  isLoading: boolean = true

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.validateLogin()
    }, 1000)
  }

  validateLogin() {
    this.googleOAuthService.loginWithBackend().subscribe({
      next: (response) => {
        console.log('Response from backend:', response)
        console.log('Role: ', response.data.userInfo.role)

        const role = response.data.userInfo.role

        // Redirige según el rol que tenga el usuario
        if (role === 'STUDENT') {
          this.router.navigate(['/menu'])
          return
        }

        if (role === 'PROFESSOR') {
          this.router.navigate(['/cursos'])
          return
        }
        // Manejo de casos inesperados, por ejemplo, un error o estado no válido
        console.error('Invalid response from backend:', response)
        // muestra un pop up de error con boton a login
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
