import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DASHBOARD_CONSTANT, SESSION_STORAGE_Keys} from '../../utility/app.constant';
import {GlobalService} from 'src/app/services/global.service';
import {StorageService} from 'src/app/services/storage.service';
import {ControlSelectionModel} from '../../models/control-selection.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  controlSelected: Array<ControlSelectionModel> = [];


  constructor(private router: Router,
              private globalService: GlobalService,
              private storageService: StorageService) {
  }

  ngOnInit() {

    // Initializing the controlSelected with either
    // the selected controls or with the default value.
    this.controlSelected = this.globalService.controlsSelected.length > 0 ?
      this.globalService.controlsSelected : this.storageService.read(SESSION_STORAGE_Keys.controlSelected) ?
        this.storageService.read(SESSION_STORAGE_Keys.controlSelected) : DASHBOARD_CONSTANT.controlList;
  }

  /**
   * This method is called on edit button click.
   * This method allow the navigation to the AddControlsConponent.
   */
  edit() {
    this.router.navigate(['/add-controls']);
  }
}
