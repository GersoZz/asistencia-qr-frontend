import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, RouterLinkWithHref } from '@angular/router'
import { InfoService, StudentDTO } from 'src/app/core/services/info.service'
import { TokenService } from 'src/app/core/services/token.service'

@Component({
  selector: 'app-session-history',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref],
  templateUrl: './session-history.component.html',
  styleUrl: './session-history.component.css',
})
export class SessionHistoryComponent implements OnInit {
  role: string | undefined = ''

  sessionId: string = ''
  cursoId: string = ''

  registros: StudentDTO[] = []

  attendances: any[] = []
  attendancesTrue: any[] = []
  totalAttendances: number = 0

  constructor(private route: ActivatedRoute, private tokenService: TokenService, private infoService: InfoService) {
    this.role = this.tokenService.getUserInfo()?.role
  }
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
      console.log('🚀 ~ attendancesStudents:', attendancesStudents)

      this.attendances = attendancesStudents
      this.attendancesTrue = attendancesStudents.filter((e: any) => e.state === true).map((e: any) => e.fullName)
      this.totalAttendances = this.attendancesTrue.length
    })
  }
}
