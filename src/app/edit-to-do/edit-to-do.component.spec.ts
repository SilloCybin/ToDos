import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditToDoComponent } from './edit-to-do.component';
import {MatCardModule, MatCheckboxModule, MatFormFieldModule, MatIconModule, MatListModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {Routes} from '@angular/router';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {ToDoListComponent} from '../to-do-list/to-do-list.component';
import {ToDoComponent} from '../to-do/to-do.component';
import {ToDoService} from '../services/to-do.service';

const routes: Routes = [
  { path: 'Dashboard', component: DashboardComponent },
];

describe('EditToDoComponent', () => {
  let component: EditToDoComponent;
  let fixture: ComponentFixture<EditToDoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EditToDoComponent,
        DashboardComponent,
        ToDoListComponent,
        ToDoComponent
      ],
      imports: [
        RouterTestingModule.withRoutes(routes),
        MatCardModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatIconModule,
        MatListModule,
        MatCheckboxModule
      ],
      providers: [
        //{ provide: ToDoService, useValue: jasmine.createSpyObj('toDoService', ['update']) }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditToDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
