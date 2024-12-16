import { inject } from '@angular/core'
import { CanActivateFn, Router } from '@angular/router'
import { TokenService } from '../services/token.service'

export const redirectGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const tokenService = inject(TokenService)

  const isValidToken = tokenService.isValidToken()
  console.log('🚀 ~ file: redirect.guard.ts:17 ~ isValidToken:', isValidToken)
  if (!isValidToken) return true

  const userInfo = tokenService.getUserInfo()
  console.log('🚀 ~ file: redirect.guard.ts:17 ~ userInfo:', userInfo)

  if (userInfo?.role === 'STUDENT') {
    router.navigate(['/menu'])
  }

  if (userInfo?.role === 'PROFESSOR') {
    router.navigate(['/cursos'])
  }

  return true
}
