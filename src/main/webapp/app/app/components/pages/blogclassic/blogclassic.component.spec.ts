import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogclassicComponent } from './blogclassic.component';

describe('BlogclassicComponent', () => {
  let component: BlogclassicComponent;
  let fixture: ComponentFixture<BlogclassicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BlogclassicComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogclassicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
