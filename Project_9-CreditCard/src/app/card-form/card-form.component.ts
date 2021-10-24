import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent implements OnInit {
  cardForm = new FormGroup({
    name: new FormControl('', [Validators.minLength(5),Validators.required]),
    number: new FormControl('', [Validators.minLength(14),Validators.maxLength(14),Validators.required]),
    expiration: new FormControl('', [Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/),Validators.required]),
    securityCode: new FormControl('', [Validators.minLength(3),Validators.maxLength(3),Validators.required]),
  })

  constructor() {
  }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.cardForm.controls.isValid)
  }
  onReset(){
    this.cardForm.reset()
  }
}
