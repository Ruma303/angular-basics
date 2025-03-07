import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../interfaces/course';

@Component({
    selector: 'course-card',
    imports: [],
    templateUrl: './course-card.component.html',
    styleUrl: './course-card.component.css'
})
export class CourseCardComponent {

    // Evitiamo di usare @Input() per ogni proprietà
    /* @Input()
    course!: Course; */

    // Altra alternativa più verbosa per ogni proprietà
    /* @Input()
    id: number = 0;
    @Input()
    name: string =  "Default name";
    @Input()
    description: string = "Description";
    @Input()
    price: number = 0.00;
    @Input()
    imageUrl: string = "https://via.placeholder.com/150";
    @Input()
    duration: string = "00:00:00";
    @Input()
    level: string = "Beginner";
    @Input()
    instructor: string = "John Doe";
    @Input()
    rating: number = 0;
    @Input()
    enrolledStudents: number = 0; */


    // In alternativa possiamo usare @Input() con valori predefiniti
    @Input()
    course: Course = {
        id: 0,
        name: "Default name",
        description: "Description",
        price: 0.00,
        imageUrl: "https://fakeimg.pl/400x240",
        duration: "00:00:00",
        level: "Beginner",
        instructor: "John Doe",
        rating: 0,
        enrolledStudents: 0
    };

    // Indicare che questo componente emette questo evento
    @Output()
    courseBought = new EventEmitter<Course>();

    onButtonClicked(course: Course) {
        console.log("Course bought!");
        this.courseBought.emit(course);
    }
}
