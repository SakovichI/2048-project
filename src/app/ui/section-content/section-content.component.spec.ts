import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionContentComponent } from './section-content.component';

describe('SectionContentComponent', () => {
  let component: SectionContentComponent;
  let fixture: ComponentFixture<SectionContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SectionContentComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
