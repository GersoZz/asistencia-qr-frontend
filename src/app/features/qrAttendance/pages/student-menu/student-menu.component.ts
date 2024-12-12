import { Component } from '@angular/core'
import { RouterLinkWithHref } from '@angular/router'

@Component({
  selector: 'app-student-menu',
  standalone: true,
  imports: [RouterLinkWithHref],
  templateUrl: './student-menu.component.html',
  styleUrl: './student-menu.component.css',
})
export class StudentMenuComponent {}
