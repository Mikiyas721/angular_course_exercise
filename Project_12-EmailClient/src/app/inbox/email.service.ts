import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EmailIndexResponse} from "../shared/interfaces/email-interfaces";

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  apiEmailUrl = "https://api.angular-email.com/emails"

  constructor(private http: HttpClient) {
  }

  getEmails() {
    return this.http.get<EmailIndexResponse[]>(this.apiEmailUrl)
  }

  getEmail(id: String) {
    return this.http.get(`${this.apiEmailUrl}/${id}`)
  }

  sendEmail(email: object) {
    return this.http.post(this.apiEmailUrl, email)
  }


}
