export interface AuthResponseDTO {
  success: boolean
  data: {
    token: string
    userInfo: {
      createdAt: string
      email: string
      role: string
      updatedAt: string
      __v?: string
      _id: string
    }
  }
}
