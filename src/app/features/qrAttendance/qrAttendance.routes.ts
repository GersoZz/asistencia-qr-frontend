import { Routes } from '@angular/router'
import { ClassroomsComponent } from './pages/classrooms/classrooms.component'
import { StudentMenuComponent } from './pages/student-menu/student-menu.component'
import { ScannerComponent } from './pages/scanner/scanner.component'
import { ClassroomHistoryComponent } from './pages/classroom-history/classroom-history.component'
import { SessionsClassroomComponent } from './pages/sessions-classroom/sessions-classroom.component'
import { QrDisplayComponent } from './pages/qr-display/qr-display.component'
import { LiveAttendanceComponent } from './pages/live-attendance/live-attendance.component'
import { SessionHistoryComponent } from './pages/session-history/session-history.component'

export const QR_ATTENDANCE_ROUTES: Routes = [
  { path: 'menu', component: StudentMenuComponent },
  { path: 'scanner', component: ScannerComponent },
  { path: 'cursos', component: ClassroomsComponent },
  { path: 'cursos/:idCurso', component: ClassroomHistoryComponent },
  { path: 'cursos/:idCurso/sesiones', component: SessionsClassroomComponent },
  { path: 'cursos/:idCurso/sesiones/:idSesion/qr', component: QrDisplayComponent },
  { path: 'cursos/:idCurso/sesiones/:idSesion/registro', component: LiveAttendanceComponent },
  { path: 'cursos/:idCurso/sesiones/:idSesion', component: SessionHistoryComponent },
]
