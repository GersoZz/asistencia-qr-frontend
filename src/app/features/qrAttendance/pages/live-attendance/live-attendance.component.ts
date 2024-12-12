import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterLinkWithHref } from '@angular/router'

@Component({
  selector: 'app-live-attendance',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref],
  templateUrl: './live-attendance.component.html',
  styleUrl: './live-attendance.component.css',
})
export class LiveAttendanceComponent {
  registros = [
    { nombre: 'Ariana Camila Lopez Julcarima', asistencia: 'no' },
    { nombre: 'Mateo Torres', asistencia: 'si' },
    { nombre: 'Benjamin Seminario', asistencia: 'no' },
    { nombre: 'Gerson Zuñiga', asistencia: 'no' },
    { nombre: 'Jhiens Guerrero', asistencia: 'no' },
    { nombre: 'Leonardo Chacon', asistencia: 'no' },
  ]

  getAsistencias(): number {
    return this.registros.filter((registro) => registro.asistencia === 'si').length
  }

  updateAsistencia(registro: any, event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked
    registro.asistencia = isChecked ? 'si' : 'no'
  }
}
