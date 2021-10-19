import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Password Generator'
  lengthPrompt = 'Enter Length'

  includeLetters = false
  includeNumbers = false
  includeSymbols = false
  length = 0
  password: string = ''

  onChangeIncludeLetters() {
    this.includeLetters = !this.includeLetters
  }

  onChangeIncludeNumbers() {
    this.includeNumbers = !this.includeNumbers
  }

  onChangeIncludeSymbols() {
    this.includeSymbols = !this.includeSymbols
  }

  onLengthChanged(input: string) {
    const parsedValue = parseInt(input)
    if (!isNaN(parsedValue)) {
      this.length = parsedValue
    }
  }

  isEnabled() {
    return (this.length > 0 && (this.includeLetters || this.includeLetters || this.includeLetters))
  }

  onGenerate() {
    console.log(`${this.length} ${this.includeSymbols} ${this.includeNumbers} ${this.includeLetters}`)
    this.password = this.generatePassword()
  }

  generatePassword() {
    const numbers = '0123456789'
    const letters = 'abcdefghijklmnopqrstuvwxyz'
    const symbols = '!@#$%^&*()-_+=/'

    let validChar = ''
    if (this.includeLetters) validChar += letters
    if (this.includeNumbers) validChar += numbers
    if (this.includeSymbols) validChar += symbols

    let generatedPassword = ''
    for (let i = 0; i < this.length; i++) {
      const randomIndex = Math.floor(Math.random() * validChar.length)
      generatedPassword += validChar[randomIndex]
    }
    return generatedPassword
  }
}
