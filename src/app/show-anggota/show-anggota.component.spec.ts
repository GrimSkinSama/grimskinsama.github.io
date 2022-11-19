import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAnggotaComponent } from './show-anggota.component';

describe('ShowAnggotaComponent', () => {
  let component: ShowAnggotaComponent;
  let fixture: ComponentFixture<ShowAnggotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAnggotaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowAnggotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
