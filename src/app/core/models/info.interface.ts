export interface ResponseDTO<T> {
  success: boolean
  data: T[]
}

export interface SectionDTO {
  classroom: string
  codSection: string
  courseName: string
  sectionId: string
}

export interface SessionDTO {
  sessionId: string
  sessionState: string
  startTime: Date
  endTime: Date
  recoveryDate?: Date
}

// Uso con SectionDTO
export type SectionResponseDTO = ResponseDTO<SectionDTO>

// Uso con SessionDTO
export type SessionResponseDTO = ResponseDTO<SessionDTO>
