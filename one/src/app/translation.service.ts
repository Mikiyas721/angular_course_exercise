import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  url = "https://translation.googleapis.com/language/translate/v2?"

  constructor(private http: HttpClient) {
  }

  translate(phrase: string) {
    return this.http.post(this.url, {
      "q": phrase,
      "target": "es"
    }).pipe(map((res: any) => {
        return res.data.translations[0].translatedText
      })
    );
  }
}
