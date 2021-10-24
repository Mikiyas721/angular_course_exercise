import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormControl} from "@angular/forms";

@Component({
  selector: 'app-my-input',
  templateUrl: './my-input.component.html',
  styleUrls: ['./my-input.component.css']
})
export class MyInputComponent implements OnInit {
  @Input() label: any
  @Input() control: any
  constructor() { }

  ngOnInit(): void {
  }
  hasError(){
    return this.control.errors&&this.control.touched
  }
}
