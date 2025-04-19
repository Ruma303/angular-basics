import { Component, Input } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { COURSES } from './data/courses';

@Component({
    selector: 'app-root',
    imports: [WelcomeComponent, AboutComponent, CourseCardComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
    title = 'Componenti Angular';
    data = {
        input: "Valore di default"
    };

    courses = COURSES;

    onCardClicked(course: any) {
        console.log("Card clicked", course);
    }
}
