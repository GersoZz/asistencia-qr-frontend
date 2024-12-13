export interface sectionResponseDTO {
  success: boolean
  data: sectionDTO[]
}

export interface sectionDTO {
  classroom: string
  codSection: string
  courseName: string
  sectionId: string
}
