import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signin',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  authForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.pattern(/^[a-zA-Z0-9]+$/),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20)
      ])
    }
  )

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onSignInSubmit() {
    if (this.authForm.invalid) return;
    this.authService.signIn(this.authForm.value).subscribe({
      next: (response) => {
        this.router.navigateByUrl('/inbox')
      },
      error: (error) => {
        if (error.error.username || error.error.password) this.authForm.setErrors({credentials: true})
      }
    })
  }

  hasError() {
    return this.authForm.get('username')?.touched && this.authForm.get('password')?.touched && this.authForm.errors
  }
}
