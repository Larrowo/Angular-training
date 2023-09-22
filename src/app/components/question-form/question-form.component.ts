import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { NotesService } from 'src/app/services/notes.service'

@Component({
  selector: 'app-question-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent {
  text: string = ''

  setValue (): void {
    this.text = 'Hello World!'
  }

  addNote (): void {
    this.noteService.addNote({
      description: this.text
    })
  }

  constructor (private readonly noteService: NotesService) {}
}
