import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDetailAnggotaComponent } from './show-detail-anggota.component';

describe('ShowDetailAnggotaComponent', () => {
  let component: ShowDetailAnggotaComponent;
  let fixture: ComponentFixture<ShowDetailAnggotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDetailAnggotaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowDetailAnggotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
