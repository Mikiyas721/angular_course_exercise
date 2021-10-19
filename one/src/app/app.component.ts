import {Component} from '@angular/core';
import {TranslationService} from "./translation.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  text: string = '';
  translatedText: string = '';

  constructor(private translationService: TranslationService) {

  }

  submit() {
    this.translationService.translate(this.text).subscribe(result => {
      this.translatedText = result;
    });
  }
}
