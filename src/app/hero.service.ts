import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

/* 在根注入器中把 HeroService 注册为该服务的提供者,for provide HeroService consume in other place */
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService : MessageService) { }

  /* un-synchronized get data */
  getHeroes() : Observable<Hero[]> {
    const heroes = of(HEROES);
    //get data from remote service successful, add a message
    this.messageService.add('HeroService: fetched heroes.');
    return heroes;
  }
}
