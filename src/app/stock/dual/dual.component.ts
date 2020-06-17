import { startWith, map } from 'rxjs/operators';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

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

  labelList: Array<string> = ['volt', 'watt', 'amp', 'weight', 'dimensions'];
  filteredLabelList: Observable<string[]>;

constructor() {

  }

  ngOnInit(): void {
    this.filteredLabelList = (this.labelForm.get('label') as FormControl).valueChanges
                             .pipe(
                               startWith(''),
                               map(value => this._filterLabel(value))
                             );
  }

  private _filterLabel(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.labelList.filter(option => option.toLowerCase().includes(filterValue));
  }

}
