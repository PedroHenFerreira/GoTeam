import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CriarEventoPage } from './criar-evento.page';

describe('CriarEventoPage', () => {
  let component: CriarEventoPage;
  let fixture: ComponentFixture<CriarEventoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarEventoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CriarEventoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
