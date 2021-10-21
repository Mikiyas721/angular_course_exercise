import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {
  openedIndex = 0
  @Input() items: any[] = []

  constructor() {
  }

  ngOnInit(): void {
  }

  getClass(index: number) {
    return this.openedIndex == index ? 'content active' : 'content'
  }
  onAccordionClick(index:number){
    this.openedIndex = index
  }
}
