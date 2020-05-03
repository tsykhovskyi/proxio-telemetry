import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrettierComponent } from './prettier.component';

describe('PrettierComponent', () => {
  let component: PrettierComponent;
  let fixture: ComponentFixture<PrettierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrettierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrettierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
