import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {
  stats = [
    {value: 22, label: "# of Users"},
    {value: 900, label: "Revenue"},
    {value: 70, label: "Score"},
  ]
  items = [
    {
      title: 'Couch',
      image: 'assets/images/couch.jpeg',
      description: 'The best couch in Addis Ababa'
    },
    {
      title: 'Dresser',
      image: 'assets/images/dresser.jpeg',
      description: 'A dresser made by the Ethiopians'
    }
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
