import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingscreenComponent } from './shoppingscreen.component';

describe('ShoppingscreenComponent', () => {
  let component: ShoppingscreenComponent;
  let fixture: ComponentFixture<ShoppingscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
