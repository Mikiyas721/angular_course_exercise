import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.css']
})
export class PlaceholderComponent implements OnInit {
  @Input() showHeader:boolean = false
  @Input() numberOfLines:number = 5
  constructor() {}

  ngOnInit(): void {
  }

}
