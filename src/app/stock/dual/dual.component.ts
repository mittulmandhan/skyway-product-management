import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dual',
  templateUrl: './dual.component.html',
  styleUrls: ['./dual.component.css']
})
export class DualComponent implements OnInit {

  @Input() labelForm: FormGroup;
  @Input() idx: number;
  @Input() disableRemove: boolean;
  @Output() idxToRemove: EventEmitter<number> = new EventEmitter<number>();


  // @Output() event = new EventEmitter();

// const task = (items: Array<DualComponent>, currentLabel = this) => {
//     items.splice();
//   }

constructor() {

  }

ngOnInit(): void {
  }

removeLabel() {

  }

}
