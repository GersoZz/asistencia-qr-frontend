import { CommonModule } from '@angular/common'
import { Component, inject, OnInit } from '@angular/core'
import { ActivatedRoute, Router, RouterLinkWithHref } from '@angular/router'
import { SessionDTO } from 'src/app/core/models/info.interface'
import { InfoService } from 'src/app/core/services/info.service'

@Component({
  selector: 'app-sessions-classroom',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref],
  templateUrl: './sessions-classroom.component.html',
  styleUrl: './sessions-classroom.component.css',
})
export class SessionsClassroomComponent implements OnInit {
  private router = inject(Router)
  private route = inject(ActivatedRoute)

  constructor(private infoService: InfoService) {}

  sectionId: string = ''
  sessions: SessionDTO[] = []

  idSessionToRecover: string = ''

  loading = true

  sesiones: SessionDTO[] = []

  //P: separarlo por semanas 1 hasta 16

  mostrarModal = false

  ngOnInit(): void {
    this.sectionId = this.route.snapshot.paramMap.get('idCurso') || ''
    console.log('🚀 ~ ngOnInit ~ sectionId:', this.sectionId)

    this.infoService.getSessions(this.sectionId).subscribe((response) => {
      console.log('🚀 ~ ngOnInit ~ getSessions ~ response:', response)
      this.sessions = response.data
      this.sesiones = response.data
      this.loading = false
    })
  }

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

    if (typeSession === 'registrada') {
      this.router.navigate([idSession], { relativeTo: this.route })
      return
    }

    if (typeSession === 'en_curso') {
      this.router.navigate([idSession, 'qr'], { relativeTo: this.route })
      return
    }

    if (typeSession === 'perdida') {
      this.idSessionToRecover = idSession
      this.abrirModal()
      return
    }
  }
}
