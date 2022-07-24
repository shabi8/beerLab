import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowseBeersPageComponent } from './components/browse-beers-page/browse-beers-page.component';
import { FavoriteBeersPageComponent } from './components/favorite-beers-page/favorite-beers-page.component';

const routes: Routes = [
  {
    path: '',
    component: BrowseBeersPageComponent
  },
  {
    path: 'favorites',
    component: FavoriteBeersPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
