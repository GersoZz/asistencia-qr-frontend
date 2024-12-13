import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, RouterLinkWithHref } from '@angular/router'
import { InfoService, StudentDTO } from 'src/app/core/services/info.service'

@Component({
  selector: 'app-live-attendance',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref],
  templateUrl: './live-attendance.component.html',
  styleUrl: './live-attendance.component.css',
})
export class LiveAttendanceComponent implements OnInit {
  sessionId: string = ''
  cursoId: string = ''

  registros: StudentDTO[] = [
    // { nombre: 'Ariana Camila Lopez Julcarima', asistencia: 'no' },
    // { nombre: 'Mateo Torres', asistencia: 'si' },
    // { nombre: 'Benjamin Seminario', asistencia: 'no' },
    // { nombre: 'Gerson Zuñiga', asistencia: 'no' },
    // { nombre: 'Jhiens Guerrero', asistencia: 'no' },
    // { nombre: 'Leonardo Chacon', asistencia: 'no' },
  ]

  constructor(private route: ActivatedRoute, private infoService: InfoService) {}

  ngOnInit(): void {
    this.sessionId = this.route.snapshot.paramMap.get('idSesion') || ''
    console.log('🚀 ~ QrDisplayComponent ~ sessionId:', this.sessionId)

    this.cursoId = this.route.snapshot.paramMap.get('idCurso') || ''
    console.log('🚀 ~ QrDisplayComponent ~ cursoId:', this.cursoId)

    this.infoService.getStudentsOfSection(this.cursoId).subscribe((response) => {
      console.log('🚀 ~ ngOnInit ~ getStudentsOfSection ~ response:', response)
      this.registros = response.data.students
    })
  }

  // traigo las asistencias de la sesion

  // getAsistencias(): number {
  //   return this.registros.filter((registro) => registro.asistencia === 'si').length
  // }

  updateAsistencia(registro: any, event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked
    registro.asistencia = isChecked ? 'si' : 'no'
  }
}
