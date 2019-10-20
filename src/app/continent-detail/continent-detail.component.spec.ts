import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinentDetailComponent } from './continent-detail.component';

describe('ContinentDetailComponent', () => {
  let component: ContinentDetailComponent;
  let fixture: ComponentFixture<ContinentDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContinentDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
