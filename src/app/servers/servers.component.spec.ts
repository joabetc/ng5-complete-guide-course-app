import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServersComponent } from './servers.component';
import { FormsModule } from '@angular/forms';
import { ServerComponent } from '../server/server.component';

describe('ServersComponent', () => {
  let component: ServersComponent;
  let fixture: ComponentFixture<ServersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [
        ServersComponent,
        ServerComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
