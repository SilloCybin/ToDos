import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule, InMemoryDbService } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToDoComponent } from './to-do/to-do.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { EntityDataModule } from '@ngrx/data';
import { defaultDataServiceConfig, entityConfig} from './store/entity-metada';
import { DefaultDataServiceConfig, NgrxDataModule} from 'ngrx-data';

import { InMemoryDataService } from './services/in-memory-data.service';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { SingleToDoViewComponent } from './single-to-do-view/single-to-do-view.component';
import { RouterModule, Routes } from '@angular/router';
import { AddToDoComponent } from './add-to-do/add-to-do.component';

const routes: Routes = [
  { path: 'Dashboard', component : DashboardComponent },
  { path: 'ToDo/:id', component: SingleToDoViewComponent },
  { path: 'AddToDo', component: AddToDoComponent},
  { path: '', redirectTo: 'Dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'Dashboard' }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ToDoComponent,
    ToDoListComponent,
    SingleToDoViewComponent,
    AddToDoComponent,
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
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    NgrxDataModule.forRoot(entityConfig),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig),
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
    providers: [
      { provide: InMemoryDataService, useExisting: InMemoryDbService },
      { provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig }
    ],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
