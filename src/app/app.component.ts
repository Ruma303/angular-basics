import { Component } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';

@Component({
  selector: 'app-root',
  imports: [ WelcomeComponent, AboutComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  /* template: `
    <h1>{{ title }}</h1>
    <section>
        <app-welcome></app-welcome>
        <app-about />
    </section>
  ` */
})
export class AppComponent {
  title = 'Componenti Angular';
}
