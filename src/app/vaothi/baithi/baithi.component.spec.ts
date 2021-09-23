import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaithiComponent } from './baithi.component';

describe('BaithiComponent', () => {
  let component: BaithiComponent;
  let fixture: ComponentFixture<BaithiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaithiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaithiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
