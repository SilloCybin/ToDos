import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToDoComponent } from './add-to-do.component';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle, MatFormField} from '@angular/material';
<<<<<<< HEAD
import {ReactiveFormsModule} from '@angular/forms';
import {CdkObserveContent} from '@angular/cdk/observers';
import {RouterTestingModule} from '@angular/router/testing';
import {EntityActionFactory, EntityCollectionServiceElementsFactory, EntityDispatcherFactory} from 'ngrx-data';
import {StateObservable, Store} from '@ngrx/store';
=======
>>>>>>> parent of 29f0dfb... Intermediary commit

describe('AddToDoComponent', () => {
  let component: AddToDoComponent;
  let fixture: ComponentFixture<AddToDoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AddToDoComponent,
        MatCard,
        MatCardTitle,
        MatCardHeader,
        MatCardContent,
<<<<<<< HEAD
        MatFormField,
        CdkObserveContent
      ],
      imports: [
        ReactiveFormsModule,
        RouterTestingModule],
      providers: [
        EntityCollectionServiceElementsFactory,
        EntityDispatcherFactory,
        EntityActionFactory,
        Store,
        StateObservable
      ]
=======
        MatFormField ]
>>>>>>> parent of 29f0dfb... Intermediary commit
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
