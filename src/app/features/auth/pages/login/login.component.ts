import { Component, inject } from '@angular/core'
import { GoogleOauthService } from '../../services/google-oauth.service'
import { TokenService } from 'src/app/core/services/token.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private googleOAuthService = inject(GoogleOauthService)
  private router = inject(Router)

  private studenTokenDemo: string =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NTkxMzE1NGNhNTYyNmNkYzY2MmJhYSIsInJvbGUiOiJTVFVERU5UIiwidXNlckluZm8iOnsiX2lkIjoiNjc1OTEzMTU0Y2E1NjI2Y2RjNjYyYmFhIiwiZW1haWwiOiJnZXJzb256dW5pZ2FAdW5pLnBlIiwiZnVsbE5hbWUiOiJHZXJzb24gSmFpcm8gWnXDsWlnYSBOYXF1aWNoZSIsInJvbGUiOiJTVFVERU5UIiwiY3JlYXRlZEF0IjoiMjAyNC0xMi0xMVQwNDoyMDozNy44OTBaIiwidXBkYXRlZEF0IjoiMjAyNC0xMi0xMVQwNDoyMDozNy44OTBaIiwiX192IjowfSwiaWF0IjoxNzM0MzIxNTk2fQ.CsR43LrD7kr01WrGihJPSHHKkXkAbfCN757XnFn5-W8'

  private professorTokenDemo: string =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NTllMDRmY2QxNDUxZGYwYzhmY2Q4NSIsInJvbGUiOiJQUk9GRVNTT1IiLCJ1c2VySW5mbyI6eyJfaWQiOiI2NzU5ZTA0ZmNkMTQ1MWRmMGM4ZmNkODUiLCJlbWFpbCI6ImdlcnNvbmNhbmFseXRAZ21haWwuY29tIiwiZnVsbE5hbWUiOiJQcm9mZSBHZXJzb24gWnXDsWlnYSIsInJvbGUiOiJQUk9GRVNTT1IiLCJjcmVhdGVkQXQiOiIyMDI0LTEyLTExVDA0OjIwOjM3Ljg5MFoiLCJ1cGRhdGVkQXQiOiIyMDI0LTEyLTExVDA0OjIwOjM3Ljg5MFoiLCJfX3YiOjB9LCJpYXQiOjE3MzQzMjE3NTF9.JheBNmW2Xfj5lfwhLylNlNVn-AruEatiDHtNr9CBViE'

  constructor(private tokenSevice: TokenService) {}

  loginWithGoogle() {
    this.googleOAuthService.login()
  }

  loginWithStudentDemo() {
    this.tokenSevice.saveToken(this.studenTokenDemo)
    this.router.navigate(['/menu'])
  }

  loginWithProfessorDemo() {
    this.tokenSevice.saveToken(this.professorTokenDemo)
    this.router.navigate(['/cursos'])
  }
}
