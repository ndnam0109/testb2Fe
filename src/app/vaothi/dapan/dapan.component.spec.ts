import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DapanComponent } from './dapan.component';

describe('DapanComponent', () => {
  let component: DapanComponent;
  let fixture: ComponentFixture<DapanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DapanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DapanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
