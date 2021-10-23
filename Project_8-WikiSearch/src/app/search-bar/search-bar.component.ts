import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Output() formSubmitEvent = new EventEmitter<string>()
  searchText: string = ''

  constructor() {
  }

  ngOnInit(): void {
  }

  onInput(value: string) {
    this.searchText = value
  }
  onFormSubmit(event:Event){
    event.preventDefault() /*Prevents the browser from attempting to make a server request*/
    this.formSubmitEvent.emit(this.searchText)
  }

}
