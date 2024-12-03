import { Routes } from '@angular/router'
import { NotFoundComponent } from './shared/pages/not-found/not-found.component'

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/auth/auth.routes').then((m) => m.AUTH_ROUTES),
  },
  {
    path: '',
    loadChildren: () => import('./features/qrAttendance/qrAttendance.routes').then((m) => m.QR_ATTENDANCE_ROUTES),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
]
