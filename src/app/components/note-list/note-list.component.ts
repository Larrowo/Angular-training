import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NotesService } from 'src/app/services/notes.service'
import { NoteComponent } from '../note/note.component'

@Component({
  selector: 'app-note-list',
  standalone: true,
  imports: [CommonModule, NoteComponent],
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {
  data: any
  fetchData (): void {
    this.catFactsService.fetchData().subscribe((response) => {
      this.data = response
    })
  }

  ngOnInit (): void {
    this.fetchData()
  }

  constructor (private readonly catFactsService: NotesService) {}
}
