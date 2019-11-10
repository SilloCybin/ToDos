import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToDoComponent } from './to-do/to-do.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { DefaultDataServiceConfig, EntityDataModule } from '@ngrx/data';
import { entityConfig } from './data/entity-metada';

import {InMemoryDataService} from './services/in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ToDoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
    BrowserAnimationsModule,
    MatListModule,
    MatCheckboxModule,
    FormsModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
