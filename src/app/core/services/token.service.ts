import { Injectable } from '@angular/core'
import { getCookie, setCookie, removeCookie } from 'typescript-cookie'
import { jwtDecode } from 'jwt-decode'
import { userInfo, userPayload } from '../models/userPayload.interface'

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private userInfo: userInfo | null = null

  constructor() {}

  saveToken(token: string) {
    setCookie('token-qr', token, { expires: 365, path: '/' })
  }

  getToken() {
    const token = getCookie('token-qr')
    return token
  }

  removeToken() {
    removeCookie('token-qr')
  }

  getPayloadToken(): userPayload | null {
    const token = this.getToken()
    if (!token) {
      return null
    }
    const decodeToken = jwtDecode<userPayload>(token)
    console.log('🚀 ~ file: token.service.ts:30 ~ TokenService ~ isValidToken ~ decodeToken:', decodeToken)

    return decodeToken
  }

  isValidToken() {
    const payload = this.getPayloadToken()
    console.log('🚀 ~ file: token.service.ts:43 ~ TokenService ~ isValidToken ~ payload:', payload)

    if (payload) {
      this.userInfo = payload.userInfo
      return true
    }

    return false
  }

  getUserInfo() {
    return this.userInfo
  }
}
