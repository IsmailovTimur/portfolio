import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrLoginComponent } from './registr-login.component';

describe('RegistrLoginComponent', () => {
  let component: RegistrLoginComponent;
  let fixture: ComponentFixture<RegistrLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
