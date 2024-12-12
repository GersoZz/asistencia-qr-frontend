import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterLinkWithHref } from '@angular/router'

@Component({
  selector: 'app-classrooms',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref],
  templateUrl: './classrooms.component.html',
  styleUrl: './classrooms.component.css',
})
export class ClassroomsComponent {
  role = 'STUDENT' // STUDENT, PROFESSOR

  cursos = [
    { name: 'Ingeniería de Software', id: '1' },
    { name: 'Computación centrada en Redes', id: '2' },
    { name: 'Análisis y Modelamiento Numérico', id: '3' },
    { name: 'Diseño de Algoritmos', id: '4' },
  ]
}
