import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IBeer } from 'src/app/models/beer';
import { BeerService } from 'src/app/services/beer.service';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {

  @Input()beers$!: Observable<IBeer[]>;

  constructor(private beerService: BeerService) { }

  ngOnInit(): void {

  }

}
