import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EltiempoComponent } from './eltiempo.component';

describe('EltiempoComponent', () => {
  let component: EltiempoComponent;
  let fixture: ComponentFixture<EltiempoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EltiempoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EltiempoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
