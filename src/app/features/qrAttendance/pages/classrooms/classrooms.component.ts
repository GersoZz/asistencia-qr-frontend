import { CommonModule } from '@angular/common'
import { Component, inject, OnInit } from '@angular/core'
import { ActivatedRoute, Router, RouterLinkWithHref } from '@angular/router'
import { SectionDTO } from 'src/app/core/models/info.interface'
import { userInfo } from 'src/app/core/models/userPayload.interface'
import { InfoService } from 'src/app/core/services/info.service'
import { TokenService } from 'src/app/core/services/token.service'

@Component({
  selector: 'app-classrooms',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref],
  templateUrl: './classrooms.component.html',
  styleUrl: './classrooms.component.css',
})
export class ClassroomsComponent implements OnInit {
  private route = inject(ActivatedRoute)

  role: string | undefined = ''
  userInfo: userInfo | null = null
  sections: SectionDTO[] = []

  constructor(private tokenService: TokenService, private router: Router, private infoService: InfoService) {
    this.userInfo = this.tokenService.getUserInfo()
    this.role = this.userInfo?.role
  }

  ngOnInit(): void {
    this.infoService.getSections().subscribe((response) => {
      console.log('🚀 ~ ngOnInit ~ getSections ~ response:', response)
      this.sections = response.data
    })
  }

  logout() {
    // this.googleOAuthService.logout()
    this.tokenService.removeToken()
    this.router.navigate(['/login'])
  }

  handlerRedirect(sectionId: string) {
    if (this.role === 'PROFESSOR') {
      this.router.navigate([sectionId, 'sesiones'], { relativeTo: this.route })
    }

    if (this.role === 'STUDENT') {
      this.router.navigate(['/cursos', sectionId])
    }
  }
}
