import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroLocalPage } from './registro-local.page';

describe('RegistroLocalPage', () => {
  let component: RegistroLocalPage;
  let fixture: ComponentFixture<RegistroLocalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroLocalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
