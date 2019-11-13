import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule, InMemoryDbService } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToDoComponent } from './to-do/to-do.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { EntityDataModule } from '@ngrx/data';
import { entityConfig } from './store/entity-metada';

import { InMemoryDataService } from './services/in-memory-data.service';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { SingleToDoViewComponent } from './single-to-do-view/single-to-do-view.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'Dashboard', pathMatch: 'full' },
  { path : 'Dashboard', component : DashboardComponent },
  { path: 'ToDo/:id', component: SingleToDoViewComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ToDoComponent,
    ToDoListComponent,
    SingleToDoViewComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
      delay: 300,
      passThruUnknownUrl: true
    }),
    BrowserAnimationsModule,
    MatListModule,
    MatCheckboxModule,
    FormsModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig),
    RouterModule.forRoot(routes)
  ],
  providers: [{ provide: InMemoryDataService, useExisting: InMemoryDbService }],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
