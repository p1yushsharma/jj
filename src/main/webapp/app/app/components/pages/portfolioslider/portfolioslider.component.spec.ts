import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfoliosliderComponent } from './portfolioslider.component';

describe('PortfoliosliderComponent', () => {
  let component: PortfoliosliderComponent;
  let fixture: ComponentFixture<PortfoliosliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PortfoliosliderComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfoliosliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
