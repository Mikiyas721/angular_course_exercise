import {Component, OnInit} from '@angular/core';
import {RandomPhotoService} from "../random-photo.service";

@Component({
  selector: 'app-photo-viewer',
  templateUrl: './photo-viewer.component.html',
  styleUrls: ['./photo-viewer.component.css']
})
export class PhotoViewerComponent implements OnInit {
  regular: any = ''

  constructor(private service: RandomPhotoService) {
  }

  ngOnInit(): void {
    this.getRandomPhoto()
  }

  getRandomPhoto() {
    this.service.getPhoto().subscribe((response) => {
      this.regular = response.urls.regular
    })
  }
}
