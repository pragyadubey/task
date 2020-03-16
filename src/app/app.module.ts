import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AddControlsComponent } from './components/add-controls/add-controls.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { Ng5SliderModule } from 'ng5-slider';
import { MultiSelectComponent } from './shared/multi-select/multi-select.component';
import { SliderComponent } from './shared/slider/slider.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddControlsComponent,
    DashboardComponent,
    MultiSelectComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularMultiSelectModule,
    Ng5SliderModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
