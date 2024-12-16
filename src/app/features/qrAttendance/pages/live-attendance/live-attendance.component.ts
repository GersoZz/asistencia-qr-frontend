import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, RouterLinkWithHref } from '@angular/router'
import { AttendanceService } from 'src/app/core/services/attendance.service'
import { InfoService, StudentDTO } from 'src/app/core/services/info.service'

@Component({
  selector: 'app-live-attendance',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref],
  templateUrl: './live-attendance.component.html',
  styleUrl: './live-attendance.component.css',
})
export class LiveAttendanceComponent implements OnInit {
  sessionId: string = ''
  cursoId: string = ''

  registros: StudentDTO[] = []

  attendances: any[] = []
  attendancesTrue: any[] = []
  totalAttendances: number = 0

  constructor(
    private route: ActivatedRoute,
    private infoService: InfoService,
    private attendanceService: AttendanceService,
  ) {}

  ngOnInit(): void {
    this.sessionId = this.route.snapshot.paramMap.get('idSesion') || ''
    console.log('🚀 ~ QrDisplayComponent ~ sessionId:', this.sessionId)

    this.cursoId = this.route.snapshot.paramMap.get('idCurso') || ''
    console.log('🚀 ~ QrDisplayComponent ~ cursoId:', this.cursoId)

    this.infoService.getStudentsOfSection(this.cursoId).subscribe((response) => {
      console.log('🚀 ~ ngOnInit ~ getStudentsOfSection ~ response:', response)
      this.registros = response.data.students
    })

    this.infoService.getAttendancesOfSession(this.sessionId).subscribe((response) => {
      console.log('🚀 ~ ngOnInit ~ getAttendancesOfSession ~ response:', response)
      // this.registros = response.data.students
      const attendancesStudents = response.data.map((e: any) => {
        return {
          state: e.state,
          fullName: e.student.fullName,
        }
      })
      console.log(
        '🚀 ~ file: live-attendance.component.ts:46 ~ LiveAttendanceComponent ~ attendancesStudents ~ attendancesStudents:',
        attendancesStudents,
      )

      this.attendances = attendancesStudents
      this.attendancesTrue = attendancesStudents.filter((e: any) => e.state === true).map((e: any) => e.fullName)
      this.totalAttendances = this.attendancesTrue.length
    })
  }

  updateAsistencia(userId: any, event: Event) {
    const element = event.target as HTMLInputElement
    element.disabled = true

    const isChecked = element.checked

    console.log('🚀 ~ file: ~ isChecked:', isChecked)
    console.log('🚀 ~ file: ~ registro:', userId)

    this.attendanceService.updateAttendance(this.sessionId, userId, isChecked).subscribe(
      (response) => {
        console.log('🚀 ~ file: ~ updateAsistencia ~ response:', response)

        if (response.success) {
          element.checked = isChecked

          if (isChecked) this.totalAttendances++
          else this.totalAttendances--
        } else {
          element.checked = !isChecked
        }
        element.disabled = false
      },
      (error) => {
        console.log('🚀 ~ file: ~ updateAsistencia ~ error:', error)
        element.checked = !isChecked
        element.disabled = false
      },
    )
  }
}
