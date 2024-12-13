import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterLinkWithHref } from '@angular/router'
import { TokenService } from 'src/app/core/services/token.service'

@Component({
  selector: 'app-session-history',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref],
  templateUrl: './session-history.component.html',
  styleUrl: './session-history.component.css',
})
export class SessionHistoryComponent {
  role: string | undefined = ''

  constructor(private tokenService: TokenService) {
    this.role = this.tokenService.getUserInfo()?.role
  }

  estudiantes = [
    { nombre: 'Nombre 1', asistencia: 'Sí' },
    { nombre: 'Nombre 2', asistencia: 'No' },
    { nombre: 'Nombre 3', asistencia: 'Sí' },
    { nombre: 'Nombre 4', asistencia: 'Sí' },
    { nombre: 'Nombre 5', asistencia: 'Sí' },
    { nombre: 'Nombre 6', asistencia: 'Sí' },
    { nombre: 'Nombre 7', asistencia: 'Sí' },
    { nombre: 'Nombre 8', asistencia: 'Sí' },
  ]

  getAsistencias(): number {
    return this.estudiantes.filter((registro) => registro.asistencia === 'Sí').length
  }

  getPorcentajeAsistencias(): number {
    return (this.getAsistencias() / this.estudiantes.length) * 100
  }
}
