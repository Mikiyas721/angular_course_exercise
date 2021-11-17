import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MathValidator} from "./validators/math-validator";
import {delay, filter} from "rxjs/operators";

@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.css']
})
export class EquationComponent implements OnInit {
  secondsPerSolution = 0
  equationForm = new FormGroup({
    firstValue: new FormControl(this.getRandomNumber()),
    secondValue: new FormControl(this.getRandomNumber()),
    inputAnswer: new FormControl(''),
  }, [
    MathValidator.addition
  ])

  constructor() {
  }

  get firstValue() {
    return this.equationForm.value.firstValue
  }

  get secondValue() {
    return this.equationForm.value.secondValue
  }

  ngOnInit(): void {
    const startTime = new Date()
    let numbersSolved = 0
    this.equationForm.statusChanges.pipe(
      filter((value) => value === "VALID"),
      delay(150))
      .subscribe(() => {
        numbersSolved++
        this.secondsPerSolution = (
          new Date().getTime() - startTime.getTime()
        ) / numbersSolved / 1000
        this.equationForm.setValue({
          firstValue: this.getRandomNumber(),
          secondValue: this.getRandomNumber(),
          inputAnswer: ''
        })
      })
  }

  getRandomNumber() {
    return Math.floor(Math.random() * Math.floor(Math.random() * 30))
  }

}
