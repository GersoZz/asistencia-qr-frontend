import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sessions-classroom',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sessions-classroom.component.html',
  styleUrl: './sessions-classroom.component.css'
})
export class SessionsClassroomComponent {
  sesiones = [
    { nombre: "Sesion 1", fecha: "02/03/2024", tipo: "A" },
    { nombre: "Sesion 2", fecha: "05/03/2024", tipo: "A" },
    { nombre: "Sesion 3", fecha: "09/03/2024", tipo: "A" },
    { nombre: "Sesion 4", fecha: "12/03/2024", tipo: "C" },
    { nombre: "Sesion 5", fecha: "16/03/2024", tipo: "B" },
    { nombre: "Sesion 6", fecha: "19/03/2024", tipo: "D" },
    { nombre: "Sesion 7", fecha: "23/03/2024", tipo: "D" }
  ];

  mostrarModal = false;
  abrirModal(): void {
    this.mostrarModal = true;
  }

  cerrarModal(): void {
    this.mostrarModal = false;
  }

  
}
