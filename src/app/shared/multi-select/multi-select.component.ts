import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ControlSelectionModel} from 'src/app/models/control-selection.model';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss']
})
export class MultiSelectComponent implements OnInit {
  @Input() list = [];
  @Input() selectedValues = [];
  @Input() setting = {};
  @Input() controlName = '';
  @Output() values = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }


  /**
   * This method is called when on mgModel change
   * This method calls the isControlSelected method.
   */
  dataChanged(event) {
    this.isControlSelected();

  }

  /**
   * It emits the @Output event for the selectd control
   */
  isControlSelected() {
    const controlSelected = new ControlSelectionModel();
    controlSelected.controlName = this.controlName;
    if (this.selectedValues.length > 0) {
      controlSelected.isSelected = true;
    } else {
      controlSelected.isSelected = false;
    }
    this.values.emit(controlSelected);
  }
}
