import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
// import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'] /* the style is only useful in this component */
})
export class HeroesComponent implements OnInit {

  heroes : Hero[] = [];
  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: selected Hero id=${hero.id}`)
  }
  /* 1. 声明了一个私有 heroService 属性，2. 把它标记为一个 HeroService 的注入点。 */
  constructor(private heroService: HeroService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  /* 函数签名是同步的 */
  /* getHeroes() : void {
     *//* This is synchronized functional signature,but it's impossible in the real service call
       it's usually un-synchronized in the real service call.
     *//*
    this.heroes = this.heroService.getHeroes();
  } */

  /* 异步函数签名 */
  getHeroes() : void{
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);/* Observable.subscribe() 是关键的差异点 */
  }

}
