import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {
    title: string = "WelcomeComponent";
    cssTitle: string = "welcome";

    constructor() {
        console.log(`Costruttore di ${this.title} attivato.`);
    }
}
