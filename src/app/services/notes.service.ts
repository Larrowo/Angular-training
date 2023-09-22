import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private readonly url = 'https://catfact.ninja/facts?limit=5'

  constructor (private readonly http: HttpClient) { }

  fetchData (): Observable<any> {
    return this.http.get(this.url)
  }
}
