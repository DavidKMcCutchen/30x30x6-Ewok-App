import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { EwoksComponent } from './ewoks/ewoks.component';
import { MaterialModule } from "@ewok/material";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreDataModule } from "@ewok/core-data";
import { CoreStateModule } from "@ewok/core-state";
import { CommonModule } from '@angular/common';
import { environment } from '../environments/environment';
import { EnvironmentModule } from '@ewok/environment';
import { UiLoginModule } from '@ewok/ui-login';
import { EwokComponent } from './ewok/ewok.component';
import { EwokInfoComponent } from './ewok/ewok-info/ewok-info.component';
import { EwoksListComponent } from './ewoks/ewoks-list/ewoks-list.component';
import { EwokDetailsComponent } from './ewoks/ewoks-details/ewoks-details.component';

@NgModule({
  declarations: [AppComponent, EwoksComponent, EwokDetailsComponent, EwoksListComponent, EwokInfoComponent, EwokComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    BrowserAnimationsModule,
    CoreDataModule,
    CoreStateModule,
    MaterialModule,
    UiLoginModule,
    EnvironmentModule.withEnvironment(environment),
    FormsModule,
    ReactiveFormsModule,
    CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
