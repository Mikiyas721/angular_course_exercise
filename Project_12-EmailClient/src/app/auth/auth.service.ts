import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";
import {tap} from "rxjs/operators";

interface SignedInResponse {
  authenticated: boolean;
  username: String;
}

interface SignInCredentials {
  username: String;
  password: String;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiAuthUrl = "https://api.angular-email.com/auth"
  signedIn = new BehaviorSubject<boolean>(false)


  constructor(private http: HttpClient) {
  }

  usernameAvailable(username: string) {
    return this.http.post<any>(`${this.apiAuthUrl}/username`, {username: username})
  }

  signUp(credentials: any) {
    return this.http.post<any>(`${this.apiAuthUrl}/signup`, credentials)
      .pipe(
        tap(() => {
          this.signedIn.next(true)
        })
      )
  }

  checkAuth() {
    return this.http.get<SignedInResponse>(`${this.apiAuthUrl}/signedin`)
      .pipe(tap(({authenticated}) => {
        this.signedIn.next(authenticated)
      }))
  }

  signOut() {
    return this.http.post<any>(`${this.apiAuthUrl}/signout`, {})
      .pipe(tap(() => {
        this.signedIn.next(false)
      }))
  }

  signIn(credentials: SignInCredentials) {
    return this.http.post<any>(`${this.apiAuthUrl}/signin`, credentials)
      .pipe(
        tap(() => {
          this.signedIn.next(true)
        }))
  }
}
