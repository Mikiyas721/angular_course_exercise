import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() label = ''
  @Input() control: any
  @Input() isPassword = false

  constructor() {
  }

  ngOnInit(): void {
  }

  hasErrors() {
    return this.control.dirty && this.control.touched && this.control.errors
  }
}
