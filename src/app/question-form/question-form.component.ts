import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-question-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent {
  text: string = ''

  setValue (): void {
    this.text = 'Hello World!'
  }
}
