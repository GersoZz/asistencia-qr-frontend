import { CommonModule } from '@angular/common'
import { Component, inject } from '@angular/core'
import { ActivatedRoute, Router, RouterLinkWithHref } from '@angular/router'

@Component({
  selector: 'app-sessions-classroom',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref],
  templateUrl: './sessions-classroom.component.html',
  styleUrl: './sessions-classroom.component.css',
})
export class SessionsClassroomComponent {
  private router = inject(Router)
  private route = inject(ActivatedRoute)

  idSessionToRecover: string = ''

  sesiones = [
    { nombre: 'Sesion 1', fecha: '02/03/2024', tipo: 'A', id: '1' },
    { nombre: 'Sesion 2', fecha: '05/03/2024', tipo: 'A', id: '2' },
    { nombre: 'Sesion 3', fecha: '09/03/2024', tipo: 'A', id: '3' },
    { nombre: 'Sesion 4', fecha: '12/03/2024', tipo: 'C', id: '4' },
    { nombre: 'Sesion 5', fecha: '16/03/2024', tipo: 'B', id: '5' },
    { nombre: 'Sesion 6', fecha: '19/03/2024', tipo: 'D', id: '6' },
    { nombre: 'Sesion 7', fecha: '23/03/2024', tipo: 'D', id: '7' },
  ]

  mostrarModal = false

  abrirModal(): void {
    this.mostrarModal = true
  }

  cerrarModal(): void {
    this.mostrarModal = false
  }

  recoverSession(): void {
    this.router.navigate([this.idSessionToRecover, 'qr'], { relativeTo: this.route })
  }

  handleRedirect(idSession: string, typeSession: string): void {
    // A: sesion pasada
    // B: sesion actual
    // C: sesion perdida
    // D: sesion futura

    if (typeSession === 'A') {
      this.router.navigate([idSession], { relativeTo: this.route })
      return
    }

    if (typeSession === 'B') {
      this.router.navigate([idSession, 'qr'], { relativeTo: this.route })
      return
    }

    if (typeSession === 'C') {
      this.idSessionToRecover = idSession
      this.abrirModal()
      return
    }
  }
}
