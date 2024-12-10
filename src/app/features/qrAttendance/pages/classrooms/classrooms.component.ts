import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-classrooms',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './classrooms.component.html',
  styleUrl: './classrooms.component.css'
})
export class ClassroomsComponent {
  cursos = [
    "Ingeniería de Software",
    "Computación centrada en Redes",
    "Análisis y Modelamiento Numérico",
    "Diseño de Algoritmos"
  ]
}
