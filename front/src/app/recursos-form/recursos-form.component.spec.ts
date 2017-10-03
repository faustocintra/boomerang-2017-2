import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecursosFormComponent } from './recursos-form.component';

describe('RecursosFormComponent', () => {
  let component: RecursosFormComponent;
  let fixture: ComponentFixture<RecursosFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecursosFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecursosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
