import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamLogsComponent } from './sam-logs.component';

describe('SamLogsComponent', () => {
  let component: SamLogsComponent;
  let fixture: ComponentFixture<SamLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamLogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SamLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
