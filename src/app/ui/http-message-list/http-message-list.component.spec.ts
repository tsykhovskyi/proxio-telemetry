import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpMessageListComponent } from './http-message-list.component';

describe('HttpMessageListComponent', () => {
  let component: HttpMessageListComponent;
  let fixture: ComponentFixture<HttpMessageListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpMessageListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpMessageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
