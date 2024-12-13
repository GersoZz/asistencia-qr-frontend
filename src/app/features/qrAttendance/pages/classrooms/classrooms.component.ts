import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { Router, RouterLinkWithHref } from '@angular/router'
import { TokenService } from 'src/app/core/services/token.service'

@Component({
  selector: 'app-classrooms',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref],
  templateUrl: './classrooms.component.html',
  styleUrl: './classrooms.component.css',
})
export class ClassroomsComponent {
  role: string | undefined = ''

  cursos = [
    { name: 'Ingeniería de Software', id: '1' },
    { name: 'Computación centrada en Redes', id: '2' },
    { name: 'Análisis y Modelamiento Numérico', id: '3' },
    { name: 'Diseño de Algoritmos', id: '4' },
  ]
  constructor(private tokenService: TokenService, private router: Router) {
    this.role = this.tokenService.getUserInfo()?.role
  }

  logout() {
    // this.googleOAuthService.logout()
    this.tokenService.removeToken()
    this.router.navigate(['/login'])
  }
}
