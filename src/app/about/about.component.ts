import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  template: `
    <p>
      {{ title }}
    </p>
  `,
  styleUrl: './about.component.css'
})
export class AboutComponent {
    title = "About page"
}
