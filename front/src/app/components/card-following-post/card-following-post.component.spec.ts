import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CardFollowingPostComponent } from './card-following-post.component';

describe('CardFollowingPostComponent', () => {
  let component: CardFollowingPostComponent;
  let fixture: ComponentFixture<CardFollowingPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardFollowingPostComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CardFollowingPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
