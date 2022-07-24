import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteBeersPageComponent } from './favorite-beers-page.component';

describe('FavoriteBeersPageComponent', () => {
  let component: FavoriteBeersPageComponent;
  let fixture: ComponentFixture<FavoriteBeersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteBeersPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteBeersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
