import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDividerComponent } from './my-divider.component';

describe('MyDividerComponent', () => {
  let component: MyDividerComponent;
  let fixture: ComponentFixture<MyDividerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyDividerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
