import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Test1FundamentalsComponent } from './test1-fundamentals.component';

describe('Test1FundamentalsComponent', () => {
  let component: Test1FundamentalsComponent;
  let fixture: ComponentFixture<Test1FundamentalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Test1FundamentalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Test1FundamentalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return 0 if the input is negative', () => {
    const result = component.compute(-1);
    expect(result).toBe(0);
  });

  it('should include the the name input', () => {
    const nameinput = 'kevin';
    const resultSti = component.greet(nameinput);
    expect(resultSti).toContain(nameinput);
  });

  it('should return the required currencies', () => {
    const resultArr = component.getCurrencies();
    const requiredCurrencies = ['USD', 'AUD', 'EUR'];
    expect(resultArr.length).toEqual(3);
    expect(resultArr).toContain(requiredCurrencies[0]);
    expect(resultArr).toContain(requiredCurrencies[1]);
    expect(resultArr).toContain(requiredCurrencies[2]);
  });

});
