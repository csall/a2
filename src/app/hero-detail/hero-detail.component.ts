import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero,Devise }         from '../hero';
import { HeroService }  from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  @Input() devise: Devise; 
  getDevise(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getDevise(id)
      .subscribe(devise => this.devise = devise);
  }


  heroes: Hero[];
  devises=['EURO','FCFA','DOLLAR'];
 
  vto: number;
  taux:number;
 
  @Input() hero: Hero; 
  conv(event) {
    this.taux=this.devise.taux[this.to];
    this.vto=parseInt(event.target.value)*this.taux;
}

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHeroes();
    this.getHero();
    this.getDevise();
  }
  from=+this.route.snapshot.paramMap.get('id');
  to=+this.route.snapshot.paramMap.get('to');
  
  
  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  goBack(): void {
    this.location.back();
  }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/