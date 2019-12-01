import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SingleToDoViewComponent } from './single-to-do-view.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { RouterTestingModule } from '@angular/router/testing';
import {MatCardModule, MatCheckboxModule, MatIconModule, MatListModule} from '@angular/material';
import { ToDoListComponent } from '../to-do-list/to-do-list.component';
import { ToDoComponent } from '../to-do/to-do.component';
import { Routes } from '@angular/router';
import { ToDoService } from '../services/to-do.service';

describe('SingleToDoViewComponent', () => {
  let component: SingleToDoViewComponent;
  let fixture: ComponentFixture<SingleToDoViewComponent>;
  let goBackToDashboardSpy: any;
  let button: any;
  let toDoService: jasmine.SpyObj<ToDoService>;

  const routes: Routes = [
    { path: 'Dashboard', component: DashboardComponent},
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SingleToDoViewComponent,
        DashboardComponent,
        ToDoListComponent,
        ToDoComponent
      ],
      imports: [
        RouterTestingModule.withRoutes(routes),
        MatCardModule,
        MatListModule,
        MatCheckboxModule,
        MatIconModule
      ],
      providers: [
        { provide: ToDoService, useValue: jasmine.createSpyObj('toDoService', ['getByKey']) }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleToDoViewComponent);
    component = fixture.componentInstance;
    button = fixture.debugElement.nativeElement.querySelector('#goBackToDashboard');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should make ToDoService behave correctly', () => {
    toDoService = TestBed.get(ToDoService);
    toDoService.getByKey(1);
    expect(toDoService.getByKey).toHaveBeenCalledWith(1);
  });

  it('should fire goBackToDashboard and navigate correctly when button is pressed', () => {
    goBackToDashboardSpy = spyOn(component, 'goBackToDashboard').and.callThrough();
    button.click();
    expect(goBackToDashboardSpy).toHaveBeenCalled();
  });

});
