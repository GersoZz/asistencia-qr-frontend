import { JwtPayload } from 'jwt-decode'

export interface userInfo {
  _id: string
  email: string
  fullName: string
  role: string
}

export interface userPayload extends JwtPayload {
  id: string
  role: string
  iat: number
  userInfo: userInfo
}
