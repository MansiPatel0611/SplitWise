import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendBoardComponent } from './friend-board.component';

describe('FriendBoardComponent', () => {
  let component: FriendBoardComponent;
  let fixture: ComponentFixture<FriendBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
