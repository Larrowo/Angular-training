import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  constructor (private readonly http: HttpClient) { }

  private readonly url = 'https://catfact.ninja/facts?limit=3'

  fetchData (): Observable<any> {
    return this.http.get(this.url)
  }
}
