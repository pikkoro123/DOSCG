import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineBotComponent } from './line-bot.component';

describe('LineBotComponent', () => {
  let component: LineBotComponent;
  let fixture: ComponentFixture<LineBotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineBotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
