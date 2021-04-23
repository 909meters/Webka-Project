import { Component, OnInit } from '@angular/core';
import {Recipe} from '../models';
// import {RECIPES} from '../recipes';
import {RecipesService} from '../recipes.service';
import {RECIPES} from '../recipes';
import {MessageService} from '../message.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  recipes: Recipe[] = [];
  constructor(private recipesService: RecipesService,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.recipes = RECIPES;
  }

  getRecipes(): void {
    this.recipesService.getRecipes().subscribe(recipes => this.recipes = recipes);
  }

  likeItem(id: number) {
    this.recipes[id].like += 1;
  }

  DislikeItem(id : number){
    this.recipes[id].dislike += 1;
  }

  share(link: String, text: String) {
    window.open('https://telegram.me/share/url?url='+link, '_blank')
  }

  removeItem(id: number): void {
    this.recipes = this.recipes.filter(x => x.id !== id);
  }
  // getRecipes(): void {
  //   this.recipesService.getRecipes().subscribe((recipes) => {
  //     this.recipes = recipes;
  //   });
  // }
}
