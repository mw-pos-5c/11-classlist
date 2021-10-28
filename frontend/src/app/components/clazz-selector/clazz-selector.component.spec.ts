import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClazzSelectorComponent } from './clazz-selector.component';

describe('ClazzSelectorComponent', () => {
  let component: ClazzSelectorComponent;
  let fixture: ComponentFixture<ClazzSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClazzSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClazzSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
