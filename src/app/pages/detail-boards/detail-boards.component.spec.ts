import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBoardsComponent } from './detail-boards.component';

describe('DetailBoardsComponent', () => {
  let component: DetailBoardsComponent;
  let fixture: ComponentFixture<DetailBoardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailBoardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailBoardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
