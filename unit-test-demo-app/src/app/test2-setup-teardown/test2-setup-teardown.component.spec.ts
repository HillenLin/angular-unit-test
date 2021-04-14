import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';

import { Test2SetupTeardownComponent } from './test2-setup-teardown.component';

describe('Test2SetupTeardownComponent', () => {
  let component: Test2SetupTeardownComponent;
  let fixture: ComponentFixture<Test2SetupTeardownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [Test2SetupTeardownComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Test2SetupTeardownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should decrease when upVote', () => {
    component.upVote();
    expect(component.totalVotes).toBe(1);
  });

  it('should increase when downVote', () => {
    component.downVote();
    expect(component.totalVotes).toBe(-1);
  });

  it('should create a form with 2 controls', () => {
    expect(component.form.contains('name')).toBeTruthy();
    expect(component.form.contains('email')).toBeTruthy();
  });

  it('should make the name control required', () => {
    let control = component.form.get('name');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

});
