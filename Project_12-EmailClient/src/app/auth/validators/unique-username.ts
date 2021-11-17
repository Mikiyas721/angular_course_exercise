import {Injectable} from "@angular/core";
import {AbstractControl, AsyncValidator, ValidationErrors} from "@angular/forms";
import {Observable, of} from "rxjs";
import {catchError, map} from "rxjs/operators";
import {AuthService} from "../auth.service";

@Injectable({providedIn: 'root'})
export class UniqueUsername implements AsyncValidator {
  constructor(private authService: AuthService) {
  }

  validate = (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    const {value} = control
    return this.authService.usernameAvailable(value).pipe(
      map((value) => {
        if (value.available)
          return null
        return value
      }),
      catchError((error) => {
        if (error.status === 422)
          return of({nonUniqueUsername: true})
        else if (error.status === 404)
          return of({notFound: true})
        else
          return of({noConnection: true})
      })
    )
  }
}
