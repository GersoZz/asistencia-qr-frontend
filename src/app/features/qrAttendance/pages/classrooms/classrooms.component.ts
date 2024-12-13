import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { Router, RouterLinkWithHref } from '@angular/router'
import { sectionDTO } from 'src/app/core/models/info.interface'
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
  role: string | undefined = ''
  userInfo: userInfo | null = null
  sections: sectionDTO[] = []

  constructor(private tokenService: TokenService, private router: Router, private infoService: InfoService) {
    this.userInfo = this.tokenService.getUserInfo()
    this.role = this.userInfo?.role
  }

  ngOnInit(): void {
    this.infoService.getSections().subscribe((sections) => {
      console.log('🚀 ~ ngOnInit ~ sections:', sections)
      this.sections = sections.data
    })
  }

  logout() {
    // this.googleOAuthService.logout()
    this.tokenService.removeToken()
    this.router.navigate(['/login'])
  }
}
