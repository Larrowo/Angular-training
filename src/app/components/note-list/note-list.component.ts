import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { NotesService } from 'src/app/services/notes.service'
import { NoteComponent } from '../note/note.component'

@Component({
  selector: 'app-note-list',
  standalone: true,
  imports: [CommonModule, NoteComponent, HttpClientModule],
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {
  data: any
  fetchData (): void {
    this.catFactsService.fetchData().subscribe((response) => {
      this.data = response.data
    })
  }

  ngOnInit (): void {
    this.fetchData()
  }

  // eslint-disable-next-line no-multi-spaces, @typescript-eslint/prefer-readonly
  constructor (private  catFactsService: NotesService) {}
}
