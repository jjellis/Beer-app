import { Component, OnInit } from '@angular/core';
import { Ibeer } from '../ibeer';
import { BeerService } from '../beer.service';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {
beerList: Ibeer[]= [];
displayedColumns: string[]= ['name', 'tagline', 'first_brewed'];
  constructor(private BeerService: BeerService) { }

  ngOnInit() {
    this.BeerService.getAll().subscribe(data => (this.beerList= data));
  }

}
