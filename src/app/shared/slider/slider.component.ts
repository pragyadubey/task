import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {ControlSelectionModel} from '../../models/control-selection.model';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @Input() minValue: number;
  @Input() maxValue: number;
  @Input() options = {};
  @Input() controlName: string;
  @Output() values = new EventEmitter();
  constructor() { }

  ngOnInit() {

  }

  /**
   * This method is called when the max-value is changes.
   * It emits the @Output event for the selectd control
   * @param event
   */
    highValueChanges(event) {
      const controlSelected = new ControlSelectionModel();
      controlSelected.controlName = this.controlName;
      if(this.maxValue > 0) {
        controlSelected.isSelected = true;
      } else {
        controlSelected.isSelected = false;
      }
      this.values.emit(controlSelected);
    }
}
