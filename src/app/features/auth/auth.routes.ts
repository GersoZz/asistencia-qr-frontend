import { Routes } from '@angular/router'
import { LoginComponent } from './pages/login/login.component'

export const AUTH_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  { path: 'login', component: LoginComponent, title: 'Login' },
]