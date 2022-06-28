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
  /*selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: selected Hero id=${hero.id}`)
  } */
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

  add(name: string): void{
    name = name.trim();
    if(!name){return; }
    this.heroService.addHero({ name } as Hero)
    /* 当 addHero() 保存成功时，subscribe() 的回调函数会收到这个新英雄，并把它追加到 heroes 列表中以供显示。 */
    .subscribe(hero => {
      this.heroes.push(hero);
    });
  }

  delete(hero: Hero): void{
    /* 虽然这个组件把删除英雄的逻辑委托给了 HeroService，但仍保留了更新它自己的英雄列表的职责。
    组件的 delete() 方法会在 HeroService 对服务器的操作成功之前，先从列表中移除要删除的英雄。 */
    this.heroes = this.heroes.filter(h => h!== hero);

    /* 如果你忘了调用 subscribe()，本服务将不会把这个删除请求发送给服务器。
    作为一条通用的规则，Observable 在有人订阅之前什么都不会做。 */
    this.heroService.deleteHero(hero.id).subscribe();
  }

}
