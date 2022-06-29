import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlfrednobelComponent } from './alfrednobel.component';

describe('AlfrednobelComponent', () => {
  let component: AlfrednobelComponent;
  let fixture: ComponentFixture<AlfrednobelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlfrednobelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlfrednobelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
