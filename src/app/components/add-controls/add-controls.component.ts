import {Component, OnInit, Input} from '@angular/core';
import {
  INDUSTRY_LIST,
  LOCATION_LIST,
  DEPARTMENT_LIST,
  IS_CONTROL_SELECTED,
  DASHBOARD_CONSTANT,
  SESSION_STORAGE_Keys
} from 'src/app/utility/app.constant';
import {Options, LabelType} from 'ng5-slider';
import {ControlSelectionModel} from 'src/app/models/control-selection.model';
import {Router} from '@angular/router';
import {GlobalService} from 'src/app/services/global.service';
import {StorageService} from 'src/app/services/storage.service';

@Component({
  selector: 'app-add-controls',
  templateUrl: './add-controls.component.html',
  styleUrls: ['./add-controls.component.scss']
})
export class AddControlsComponent implements OnInit {
  industryList = [];
  selectedIndustries = [];
  setting = {};
  locationList = [];
  selectedlocation = [];
  departmentList = [];
  selectedDepartment = [];
  revenueMinValue = 0;
  revenueMaxValue = 0;
  employeeMinValue = 0;
  employeeMaxValue = 0;
  options = {
    showTicksValues: true,
    floor: 0,
    ceil: 500,
    stepsArray: [
      {value: 0},
      {value: 25},
      {value: 50},
      {value: 100},
      {value: 150},
      {value: 500}
    ],
  }

  controlList: Array<ControlSelectionModel> = []


  constructor(private router: Router,
              private globalService: GlobalService,
              private storageService: StorageService) {
  }

  ngOnInit() {
    this.industryList = INDUSTRY_LIST;
    this.locationList = LOCATION_LIST;
    this.departmentList = DEPARTMENT_LIST;
    this.controlList = DASHBOARD_CONSTANT.controlList;
  }

  /**
   * This method is called on save button click.
   * It allows the navigation to the DashboardComponent.
   */
  save() {
    this.globalService.controlsSelected = this.controlList;
    this.storageService.write(SESSION_STORAGE_Keys.controlSelected, this.controlList);
    this.router.navigate(['/dashboard']);
  }

  /**
   * This method captures the @Output event and modifies the controlList array.
   * @param {ControlSelectionModel} selectedControlData
   */
  selectedControls(selectedControlData: ControlSelectionModel) {
    const controlObj = this.controlList.find(data => data.controlName === selectedControlData.controlName);
    controlObj.isSelected = selectedControlData.isSelected;
    console.log(this.controlList);
  }
}

