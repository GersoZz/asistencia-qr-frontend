import { inject } from '@angular/core'
import { CanActivateFn, Router } from '@angular/router'
import { TokenService } from '../services/token.service'

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const tokenService = inject(TokenService)

  const isValidToken = tokenService.isValidToken()

  if (!isValidToken) {
    router.navigate(['/login'])
    return false
  }
  return true
}
