import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListarTodosUsuariosPage } from './listar-todos-usuarios.page';

describe('ListarTodosUsuariosPage', () => {
  let component: ListarTodosUsuariosPage;
  let fixture: ComponentFixture<ListarTodosUsuariosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarTodosUsuariosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListarTodosUsuariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
