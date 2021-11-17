import {AbstractControl} from "@angular/forms";

export class MathValidator {
  static addition = (control: AbstractControl) => {
    const {firstValue, secondValue, inputAnswer} = control.value
    if (firstValue + secondValue !== parseInt(inputAnswer))
      return {addition: true}
    return null
  }

  //with parameters
  static additionWithParams = (target: string, first: string, second: string) => {
    return (control: AbstractControl) => {
      const answerInput =  control.value[target]
      const firstValue =  control.value[first]
      const secondValue =  control.value[second]
      if (firstValue + secondValue !== parseInt(answerInput))
        return {addition: true}
      return null
    }
  }

}
