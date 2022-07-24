import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IBeer } from 'src/app/models/beer';
import { BeerService } from 'src/app/services/beer.service';
import { PairService } from 'src/app/services/pair.service';

@Component({
  selector: 'app-browse-beers-page',
  templateUrl: './browse-beers-page.component.html',
  styleUrls: ['./browse-beers-page.component.css']
})
export class BrowseBeersPageComponent implements OnInit {

  beers$!: Observable<IBeer[]>;
  beerModal!: IBeer;
  modalVisibilty: boolean = false;

  constructor(private beerService: BeerService, private pairService: PairService) { }

  ngOnInit(): void {
    this.pairService.foodToPair$.subscribe(food => {
      if (food.length > 2) {
        this.beers$ = this.beerService.getBeersThatPairWith(food);
      }
    });
    this.beers$ = this.beerService.getAllPageBeer(1);
  }

  getPageBeeers(pageNum: any) {
    this.beers$ = this.beerService.getAllPageBeer(pageNum);
  }

}
