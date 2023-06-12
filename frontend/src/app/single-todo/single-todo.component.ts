import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-single-todo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './single-todo.component.html',
  styleUrls: ['./single-todo.component.css']
})
export class SingleTodoComponent {
  date= new Date()
  next='https://cdn-icons-png.flaticon.com/512/2989/2989988.png'
}
