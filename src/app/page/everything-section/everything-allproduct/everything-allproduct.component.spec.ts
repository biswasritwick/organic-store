import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EverythingAllproductComponent } from './everything-allproduct.component';

describe('EverythingAllproductComponent', () => {
  let component: EverythingAllproductComponent;
  let fixture: ComponentFixture<EverythingAllproductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EverythingAllproductComponent]
    });
    fixture = TestBed.createComponent(EverythingAllproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
