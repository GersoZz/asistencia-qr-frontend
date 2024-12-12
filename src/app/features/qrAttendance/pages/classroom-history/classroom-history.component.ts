import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterLinkWithHref } from '@angular/router'

@Component({
  selector: 'app-classroom-history',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref],
  templateUrl: './classroom-history.component.html',
  styleUrl: './classroom-history.component.css',
})
export class ClassroomHistoryComponent {
  role = 'STUDENT' // STUDENT, PROFESSOR

  registros = [
    { semana: 'Semana 1', fecha: '20/05/2024', asistencia: 'Sí' },
    { semana: 'Semana 2', fecha: '20/05/2024', asistencia: 'No' },
    { semana: 'Semana 3', fecha: '20/05/2024', asistencia: 'Sí' },
    { semana: 'Semana 4', fecha: '20/05/2024', asistencia: 'Sí' },
    { semana: 'Semana 5', fecha: '20/05/2024', asistencia: 'Sí' },
    { semana: 'Semana 6', fecha: '20/05/2024', asistencia: 'Sí' },
    { semana: 'Semana 7', fecha: '20/05/2024', asistencia: 'Sí' },
    { semana: 'Semana 8', fecha: '20/05/2024', asistencia: 'Sí' },
  ]

  getAsistencias(): number {
    return this.registros.filter((registro) => registro.asistencia === 'Sí').length
  }

  getPorcentajeAsistencias(): number {
    return (this.getAsistencias() / this.registros.length) * 100
  }
}
