import {Component, OnInit} from '@angular/core';
import {AuthService} from "./auth/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  signedIn: boolean|null = false

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.checkAuth().subscribe(()=>{})
    this.authService.signedIn.subscribe((signedIn) => {
      this.signedIn = signedIn
    })
  }
}
