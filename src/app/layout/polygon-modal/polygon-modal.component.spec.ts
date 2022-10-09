import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolygonModalComponent } from './polygon-modal.component';

describe('PolygonModalComponent', () => {
  let component: PolygonModalComponent;
  let fixture: ComponentFixture<PolygonModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolygonModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolygonModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
