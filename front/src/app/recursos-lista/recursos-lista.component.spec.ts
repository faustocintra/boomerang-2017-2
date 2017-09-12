import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecursosListaComponent } from './recursos-lista.component';

describe('RecursosListaComponent', () => {
  let component: RecursosListaComponent;
  let fixture: ComponentFixture<RecursosListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecursosListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecursosListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
