import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermCardFormComponent } from './term-card-form.component';

describe('TermCardFormComponent', () => {
  let component: TermCardFormComponent;
  let fixture: ComponentFixture<TermCardFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TermCardFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TermCardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
