import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
      username: 'nature',
      imageUrl: 'assets/images/tree.jpeg',
      content: 'I saw this beautiful neat tree today, on my hike trip',
    },
    {
      title: 'Snowy mountain',
      username: 'mountain_lovers',
      imageUrl: 'assets/images/mountain.jpeg',
      content: 'A picture of the beautiful mountain of bla bla',
    },
    {
      title: 'Biking',
      username: 'john',
      imageUrl: 'assets/images/biking.jpeg',
      content: 'Last weeks biking trip to XYZ',
    }, {
      title: 'Neat Tree',
      username: 'nature',
      imageUrl: 'assets/images/tree.jpeg',
      content: 'I saw this beautiful neat tree today, on my hike trip',
    },
    {
      title: 'Snowy mountain',
      username: 'mountain_lovers',
      imageUrl: 'assets/images/mountain.jpeg',
      content: 'A picture of the beautiful mountain of bla bla',
    },
    {
      title: 'Biking',
      username: 'john',
      imageUrl: 'assets/images/biking.jpeg',
      content: 'Last weeks biking trip to XYZ',
    },
    {
      title: 'Snowy mountain',
      username: 'mountain_lovers',
      imageUrl: 'assets/images/mountain.jpeg',
      content: 'A picture of the beautiful mountain of bla bla',
    },
    {
      title: 'Biking',
      username: 'john',
      imageUrl: 'assets/images/biking.jpeg',
      content: 'Last weeks biking trip to XYZ',
    }
  ]
}
