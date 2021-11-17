import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {MatchPassword} from "../validators/match-password";
import {UniqueUsername} from "../validators/unique-username";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  authForm = new FormGroup({
      username: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
          Validators.pattern(/^[a-zA-Z0-9]+$/),
        ],
        [this.uniqueUsername.validate
        ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20)
      ]),
      passwordConfirmation: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20)
      ])
    }, [this.matchPassword.validate]
  )

  constructor(
    private matchPassword: MatchPassword,
    private uniqueUsername: UniqueUsername,
    private authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  onSignUpSubmit() {
    if (this.authForm.invalid) return;
    this.authService.signUp(this.authForm.value).subscribe({
      next: (response) => {
        this.router.navigateByUrl('/inbox')

      },
      error: (error) => {
        if (!error.status)
          this.authForm.setErrors({noConnection: true})
        else if (error.status !== 422)
          this.authForm.setErrors({failedToSignUp: true})
      }
    })
  }

  hasError() {
    return this.authForm.get('password')?.touched && this.authForm.get('passwordConfirmation')?.touched && this.authForm.errors
  }

}
