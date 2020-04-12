import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OverallUsageComponent } from './overall-usage.component';

describe('OverallUsageComponent', () => {
  let component: OverallUsageComponent;
  let fixture: ComponentFixture<OverallUsageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverallUsageComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OverallUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
