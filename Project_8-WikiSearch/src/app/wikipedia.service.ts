import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {pluck} from 'rxjs/operators'
import {Observable} from "rxjs";

export interface WikipediaResponse {
  query: {
    search:{
      title:string
      snippet:string
      pageid:string
    }[]
  }
}

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {
  wikiApiBaseUrl: string = 'https://en.wikipedia.org/w/api.php'
  wikiApiUrl: string = 'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=space'

  constructor(private httpClient: HttpClient) {
  }

  search(searchTerm: string): Observable<WikipediaResponse[]> {
    return this.httpClient.get(this.wikiApiBaseUrl, {
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        utf8: '1',
        srsearch: searchTerm,
        origin: '*'
      }
    }).pipe(pluck('query', 'search'))
  }
}
