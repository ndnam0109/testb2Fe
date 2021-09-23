import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LythuyetComponent } from './lythuyet.component';

describe('LythuyetComponent', () => {
  let component: LythuyetComponent;
  let fixture: ComponentFixture<LythuyetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LythuyetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LythuyetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
