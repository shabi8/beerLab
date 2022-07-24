import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseBeersPageComponent } from './browse-beers-page.component';

describe('BrowseBeersPageComponent', () => {
  let component: BrowseBeersPageComponent;
  let fixture: ComponentFixture<BrowseBeersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowseBeersPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseBeersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
