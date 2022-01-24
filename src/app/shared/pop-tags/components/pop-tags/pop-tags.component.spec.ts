import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopTagsComponent } from './pop-tags.component';

describe('PopTagsComponent', () => {
  let component: PopTagsComponent;
  let fixture: ComponentFixture<PopTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopTagsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
