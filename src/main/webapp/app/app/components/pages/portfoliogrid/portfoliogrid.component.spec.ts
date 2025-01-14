import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfoliogridComponent } from './portfoliogrid.component';

describe('PortfoliogridComponent', () => {
  let component: PortfoliogridComponent;
  let fixture: ComponentFixture<PortfoliogridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PortfoliogridComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfoliogridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
