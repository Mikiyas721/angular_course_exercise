import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {
  showModal: boolean = false
  accordionList: any[] = [
    {question: 'What is Angular?', answer: 'The best web development framework for big projects'},
    {question: 'What is This?', answer: 'This is an accordion'},
    {question: 'What is That?', answer: 'Uhhh!!! I dont know. Ask google.'},
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

  onShowModal() {
    this.showModal = true
  }

  onCloseModal() {
    this.showModal = false
  }

}
