import { Component, OnInit } from '@angular/core';
import { PairService } from 'src/app/services/pair.service';
import { Router, NavigationEnd } from '@angular/router';
import { FavoriteService } from 'src/app/services/favorite.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  searchText: any;
  currentRoute!: string;

  constructor(private pairService: PairService, private router:Router, private favoriteService: FavoriteService) { 
    router.events.subscribe( event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });
  }

  ngOnInit(): void {
  }

  findPairedBeers() {
    this.pairService.sendFoodToPair(this.searchText);
    this.searchText = '';
  }

  clearAllFavorites() {
    this.favoriteService.clearFavoriteList();
  }

  get favoriteList() {
    return this.favoriteService.favoriteBeerList.length > 0
  }

}
