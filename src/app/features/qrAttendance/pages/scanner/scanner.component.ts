import { Component } from '@angular/core'
import { RouterLinkWithHref } from '@angular/router'

@Component({
  selector: 'app-scanner',
  standalone: true,
  imports: [RouterLinkWithHref],
  templateUrl: './scanner.component.html',
  styleUrl: './scanner.component.css',
})
export class ScannerComponent {}
