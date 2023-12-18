import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDialog } from './dialog-box.component';

describe('DialogBoxComponent', () => {
  let component: ConfirmDialog;
  let fixture: ComponentFixture<ConfirmDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmDialog]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfirmDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
