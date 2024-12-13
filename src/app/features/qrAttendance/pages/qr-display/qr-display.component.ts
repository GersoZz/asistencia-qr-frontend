import { Component } from '@angular/core'
import { RouterLinkWithHref } from '@angular/router'

@Component({
  selector: 'app-qr-display',
  standalone: true,
  imports: [RouterLinkWithHref],
  templateUrl: './qr-display.component.html',
  styleUrl: './qr-display.component.css',
})
export class QrDisplayComponent {}
