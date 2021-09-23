import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaothiComponent } from './vaothi.component';

describe('VaothiComponent', () => {
  let component: VaothiComponent;
  let fixture: ComponentFixture<VaothiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaothiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaothiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
