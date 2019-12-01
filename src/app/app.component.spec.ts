import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ToDoComponent } from './to-do/to-do.component';
import {MatCard, MatCardTitle, MatCheckbox, MatDivider, MatIconModule, MatList, MatListItem, MatRipple} from '@angular/material';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatIconModule
      ],
      declarations: [
        AppComponent,
        DashboardComponent,
        ToDoListComponent,
        ToDoComponent,
        MatCheckbox,
        MatListItem,
        MatList,
        MatRipple,
        MatDivider,
        MatCard,
        MatCardTitle
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'To Do Memo’`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('To Do Memo');
  });

});
