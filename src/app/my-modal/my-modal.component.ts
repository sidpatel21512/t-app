import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-modal',
  templateUrl: './my-modal.component.html',
  styleUrls: ['./my-modal.component.css']
})
export class MyModalComponent {

  @Output() response = new EventEmitter<boolean>();
  @Output() close = new EventEmitter<boolean>();

  isConfirmed = false;

  ngOnInit() {}

  ok() {
    this.response.emit(true);
  }

  cancel() {
    this.close.emit(false);
  }
}
