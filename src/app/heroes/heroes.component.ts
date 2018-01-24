import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Hero, Devise } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  to: any;

  idFrom: number;

  devisess = ['EURO', 'FCFA', 'DOLLAR'];
  vto: number;
  vfrom:number;
  taux: number;
  @Input() hero: Hero;
  @Input() devise: Devise;

  devises: Devise[];

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  conv(event) {
    if( event){

    this.taux = this.devise.taux[this.to.id];

    this.vto =event.target? parseInt(event.target.value) * this.taux:parseInt(event) * this.taux;}
  }
  onClickFrom(idFrom) {
    this.getDevise(idFrom);
    this.idFrom = idFrom;
    this.conv(this.vfrom);

  }

  onClickTo(to) {
    this.to = to;
    this.conv(this.vfrom);
  }

  ngOnInit() {
    this.getHero();
    this.getDevises();
  }

  getDevises(): void {
    this.heroService.getDevises()
      .subscribe(devises => this.devises = devises);
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }


  getDevise(id): void {
    this.heroService.getDevise(id)
      .subscribe(devise => this.devise = devise);
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