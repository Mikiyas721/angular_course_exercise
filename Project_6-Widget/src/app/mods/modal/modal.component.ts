import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {
  @Output() close = new EventEmitter()

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit(): void {
    document.body.append(this.elementRef.nativeElement)
  }

  ngOnDestroy(): void {
    this.elementRef.nativeElement.remove()
  }

  closeModal() {/*Child to parent component communication*/
    this.close.emit()
  }
}
