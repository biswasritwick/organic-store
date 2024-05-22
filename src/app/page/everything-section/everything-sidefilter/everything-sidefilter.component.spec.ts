import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EverythingSidefilterComponent } from './everything-sidefilter.component';

describe('EverythingSidefilterComponent', () => {
  let component: EverythingSidefilterComponent;
  let fixture: ComponentFixture<EverythingSidefilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EverythingSidefilterComponent]
    });
    fixture = TestBed.createComponent(EverythingSidefilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
