import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, RouterLinkWithHref } from '@angular/router'
import { AttendanceService } from 'src/app/core/services/attendance.service'
import { QRCodeModule } from 'angularx-qrcode'

@Component({
  selector: 'app-qr-display',
  standalone: true,
  imports: [RouterLinkWithHref, QRCodeModule],
  templateUrl: './qr-display.component.html',
  styleUrl: './qr-display.component.css',
})
export class QrDisplayComponent implements OnInit {
  sessionId: string = ''
  sessionQR: string = '' // only string

  constructor(private route: ActivatedRoute, private attendanceService: AttendanceService) {}

  ngOnInit(): void {
    this.sessionId = this.route.snapshot.paramMap.get('idSesion') || ''
    console.log('🚀 ~ QrDisplayComponent ~ sessionId:', this.sessionId)

    this.attendanceService.getQr(this.sessionId).subscribe((response) => {
      console.log('🚀 ~ QrDisplayComponent ~ ngOnInit ~ response:', response)
      this.sessionQR = response.data
    })
  }
}
