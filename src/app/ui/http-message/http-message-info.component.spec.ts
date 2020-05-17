import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpMessageInfoComponent } from './http-message-info.component';

describe('HttpMessageInfoComponent', () => {
  let component: HttpMessageInfoComponent;
  let fixture: ComponentFixture<HttpMessageInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HttpMessageInfoComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpMessageInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
