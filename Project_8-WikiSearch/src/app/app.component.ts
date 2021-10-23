import {Component} from '@angular/core';
import {WikipediaService} from "./wikipedia.service";
import {WikipediaResponse} from './wikipedia.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pages:WikipediaResponse[] = []

  constructor(private wikipediaService: WikipediaService) {
  }

  onFormSubmit(input: string) {
    this.wikipediaService.search(input).subscribe((search) => {/*Observer*/
      this.pages = search
    })
  }
}
