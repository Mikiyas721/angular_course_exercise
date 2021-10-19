import {Component} from '@angular/core';
import {lorem} from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hasFinished = false
  wordCount = 7
  randomSentence = lorem.sentence(this.wordCount)
  enteredText = ''

  updateSentenceLength(input: string) {
    const parsedLength = parseInt(input)
    if (!isNaN(parsedLength)) {
      this.wordCount = parsedLength
    }
  }

  onRegenerate() {
    this.randomSentence = lorem.sentence(this.wordCount)
  }

  onEntersSentence(input: string) {
    this.enteredText = input
    this.hasFinished = this.randomSentence == input;
  }

  compare(letter: string, enteredLetter: string) {
    if (!enteredLetter) {
      return 'pending bigText'
    }
    return letter == enteredLetter ? 'correct bigText' : 'incorrect bigText'
  }
}
