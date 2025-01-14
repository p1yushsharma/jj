import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfoliodetailComponent } from './portfoliodetail.component';

describe('PortfoliodetailComponent', () => {
  let component: PortfoliodetailComponent;
  let fixture: ComponentFixture<PortfoliodetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PortfoliodetailComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfoliodetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
