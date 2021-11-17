import {Component, OnInit} from '@angular/core';
import {EmailService} from "../email.service";
import {EmailIndexResponse} from "../../shared/interfaces/email-interfaces";

@Component({
  selector: 'app-email-index',
  templateUrl: './email-index.component.html',
  styleUrls: ['./email-index.component.css']
})
export class EmailIndexComponent implements OnInit {
  emails:EmailIndexResponse[] = []

  constructor(private emailService: EmailService) {
  }

  ngOnInit(): void {
    this.emailService.getEmails().subscribe((emails) => {
      console.log(emails)
      this.emails = emails
    })
  }

}
