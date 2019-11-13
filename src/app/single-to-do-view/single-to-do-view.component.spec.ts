import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleToDoViewComponent } from './single-to-do-view.component';

describe('SingleToDoViewComponent', () => {
  let component: SingleToDoViewComponent;
  let fixture: ComponentFixture<SingleToDoViewComponent>;
  let ngOnInitSpy: any;
  let goBackToDashboardSpy: any;
  let button: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleToDoViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleToDoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fire ngOnInit on component instantiation', () => {
    ngOnInitSpy = spyOn(component, 'ngOnInit').and.callThrough();
    component.ngOnInit();
    expect(ngOnInitSpy).toHaveBeenCalled();
  });

  it('should fire goBackToDashboard when button is pressed', () => {
    button = fixture.debugElement.nativeElement.querySelector('.div button');
    goBackToDashboardSpy = spyOn(component, 'goBackToDashboard');
    button.click();
    expect(spyOn).toHaveBeenCalled();
  });


});
