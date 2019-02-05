import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  heroes = [
    new Hero(1, 'Eagles'),
    new Hero(2, 'Titans')
  ];
  
  // hero: Hero
  selectedHero : Hero ;

  constructor() { }


  ngOnInit() {
  }

  onSelect(hero:Hero) : void{
    this.selectedHero = hero;
  }

}
