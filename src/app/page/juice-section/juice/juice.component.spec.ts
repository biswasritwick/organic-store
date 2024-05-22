import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuiceComponent } from './juice.component';

describe('JuiceComponent', () => {
  let component: JuiceComponent;
  let fixture: ComponentFixture<JuiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JuiceComponent]
    });
    fixture = TestBed.createComponent(JuiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
