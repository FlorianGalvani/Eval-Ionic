import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PiecesOfWorkListComponent } from './pieces-of-work-list.component';

describe('PiecesOfWorkListComponent', () => {
  let component: PiecesOfWorkListComponent;
  let fixture: ComponentFixture<PiecesOfWorkListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PiecesOfWorkListComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PiecesOfWorkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
