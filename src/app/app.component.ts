import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterOutlet } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'

import { QuestionFormComponent } from './components/question-form/question-form.component'
import { NoteListComponent } from './components/note-list/note-list.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    QuestionFormComponent,
    NoteListComponent,
    HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-project-test'
}
