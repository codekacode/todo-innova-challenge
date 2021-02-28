import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpBoardComponent } from './pop-up-board.component';

describe('PopUpBoardComponent', () => {
  let component: PopUpBoardComponent;
  let fixture: ComponentFixture<PopUpBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
