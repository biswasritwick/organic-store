import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrosseryComponent } from './grossery.component';

describe('GrosseryComponent', () => {
  let component: GrosseryComponent;
  let fixture: ComponentFixture<GrosseryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrosseryComponent]
    });
    fixture = TestBed.createComponent(GrosseryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
