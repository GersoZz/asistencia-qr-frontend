import { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/auth/auth.routes').then((m) => m.AUTH_ROUTES),
  },
  {
    path: '',
    loadChildren: () => import('./features/qrAttendance/qrAttendance.routes').then((m) => m.QR_ATTENDANCE_ROUTES),
  },
]
