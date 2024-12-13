import { Routes } from '@angular/router'
import { NotFoundComponent } from './shared/pages/not-found/not-found.component'
import { authGuard } from './core/guards/auth.guard'
import { redirectGuard } from './core/guards/redirect.guard'

export const routes: Routes = [
  {
    path: '',
    canActivate: [redirectGuard],
    loadChildren: () => import('./features/auth/auth.routes').then((m) => m.AUTH_ROUTES),
  },
  {
    path: '',
    canActivate: [authGuard],
    loadChildren: () => import('./features/qrAttendance/qrAttendance.routes').then((m) => m.QR_ATTENDANCE_ROUTES),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
]
