import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Hero,Devise } from './hero';
import { HEROES, DEVISES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable()
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    // Todo: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  getDevises(): Observable<Devise[]> {
    // Todo: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(DEVISES);
  }


  getHero(id: number): Observable<Hero> {
    // Todo: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

  getDevise(id: number): Observable<Devise> {
    return of(DEVISES.find(devise => devise.id === id));
  }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/