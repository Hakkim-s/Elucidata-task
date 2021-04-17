import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandJobComponent } from './expand-job.component';

describe('ExpandJobComponent', () => {
  let component: ExpandJobComponent;
  let fixture: ComponentFixture<ExpandJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpandJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
