import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() name:any
  @Input() cardNumber:any
  @Input() expiration:any
  constructor() { }

  ngOnInit(): void {
  }

}
