import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Observable, Subject } from 'rxjs';
import { debounceTime, switchMap, distinctUntilChanged } from 'rxjs/operators';

import { Hero } from '../hero';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {

  heroes$!: Observable<Hero[]>;//heroes$ 声明为一个 Observable

  /* Subject 既是可观察对象的数据源，本身也是 Observable。 你可以像订阅任何 Observable 一样订阅 Subject。 */
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) { }

  //push a search term into the observable stream
  search(term: string): void{
    this.searchTerms.next(term);
  }

  /* 如果每当用户按键后就直接调用 searchHeroes() 将导致创建海量的 HTTP 请求，浪费服务器资源并干扰数据调度计划.
     ngOnInit() 往 searchTerms 这个可观察对象的处理管道中加入了一系列 RxJS 操作符，
     用以缩减对 searchHeroes() 的调用次数，并最终返回一个可及时给出英雄搜索结果的可观察对象（每次都是 Hero[] ）
  */
  ngOnInit(): void {
      this.heroes$ = this.searchTerms.pipe(
            //在传出最终字符串之前，debounceTime(300) 将会等待，直到新增字符串的事件暂停了 300 毫秒
            // wait 300ms after each keystroke before considering the term
            debounceTime(300),

            //只在过滤条件变化时才发送请求
            // ignore new term if same as previous term
            distinctUntilChanged(),

            //为每个从 debounce() 和 distinctUntilChanged() 中通过的搜索词调用搜索服务。
            //它会取消并丢弃以前的搜索可观察对象，只保留最近的。
            // switch to new search observable each time the term changes
            //借助 switchMap 操作符， 每个有效的按键事件都会触发一次 HttpClient.get() 方法调用。
            switchMap((term: string) => this.heroService.searchHeroes(term)),
      );
    }
}
