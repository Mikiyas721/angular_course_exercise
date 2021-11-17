import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

interface RandomResponse {
  urls: {
    regular: string
  }
}

@Injectable({
  providedIn: 'root'
})
export class RandomPhotoService {
  apiBaseUrl = "https://api.unsplash.com"
  accessKey = "M3YItbm9d1XUQqKRGkC7ASZcuMdshknJ4If96Mh6nV0"
  secretKey = "VJ2vlby1rvZ_ji2uwbtbOWMt7wOIyZgBjk9LiDoK0Rg"

  constructor(private http: HttpClient) {
  }

  getPhoto() {
    return this.http.get<RandomResponse>(`${this.apiBaseUrl}/photos/random`, {
      headers: {
        AUTHORIZATION: `Client-ID ${this.accessKey}`
      }
    })
  }
}
