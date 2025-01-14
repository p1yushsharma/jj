import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfoliomasonaryComponent } from './portfoliomasonary.component';

describe('PortfoliomasonaryComponent', () => {
  let component: PortfoliomasonaryComponent;
  let fixture: ComponentFixture<PortfoliomasonaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PortfoliomasonaryComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfoliomasonaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
