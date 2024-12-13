import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { NgStyle } from '@angular/common'

import { ImageCaptureComponent } from './image-capture/image-capture.component'
import { VideoCaptureComponent } from './video-capture/video-capture.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgStyle, ImageCaptureComponent, VideoCaptureComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // title = 'asistencia-qr-frontend'

  title = 'dbrjs-angular-sample'

  mode: string = 'video'

  switchMode(value: string) {
    this.mode = value
  }
}
