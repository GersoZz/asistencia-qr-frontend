import { Component } from '@angular/core'
import { RouterLinkWithHref } from '@angular/router'
import { NgStyle } from '@angular/common'
import { VideoCaptureComponent } from 'src/app/video-capture/video-capture.component'
import { ImageCaptureComponent } from 'src/app/image-capture/image-capture.component'

@Component({
  selector: 'app-scanner',
  standalone: true,
  imports: [RouterLinkWithHref, NgStyle, ImageCaptureComponent, VideoCaptureComponent],
  templateUrl: './scanner.component.html',
  styleUrl: './scanner.component.css',
})
export class ScannerComponent {
  title = 'dbrjs-angular-sample'
}
