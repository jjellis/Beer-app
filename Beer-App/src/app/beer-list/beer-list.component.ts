import { Component, OnInit } from '@angular/core';
import { Ibeer } from '../ibeer';
import { BeerService } from '../services/beer.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {
beerList: Ibeer[]= [];
displayedColumns: string[]= ['name', 'tagline', 'first_brewed'];
  constructor(private BeerService: BeerService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.BeerService.getAll().subscribe(data => (this.beerList= data));
  }
  logout(){
    this.authService.logout();
    this.router.navigateByUrl("login");
  }

}
