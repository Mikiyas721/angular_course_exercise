import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = ''
  entered_date: string = ''
  amount: number = 0

  onNameChanged(input: string) {
    this.name = input
  }

  onDateChanged(input: string) {
    this.entered_date = input
  }

  onAmountChanged(input: number) {
    this.amount = input
  }
}
