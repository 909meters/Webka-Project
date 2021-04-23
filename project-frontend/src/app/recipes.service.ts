import {Injectable} from '@angular/core';
import {RECIPES} from './recipes';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Recipe, AuthToken} from './models';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  BASE_URl = 'http://localhost:8000';

  constructor(private messageService: MessageService, private http: HttpClient) { }
  
  login(username: string, password: string): Observable<AuthToken> {
    return this.http.post<AuthToken>(`${this.BASE_URl}/api/login/`, {
      username,
      password
    });
  }

  getRecipes(): Observable<Recipe[]>{
    const recipes = of(RECIPES);
    this.messageService.add('RecipesService: fetched recipes');
    return recipes;

    // return this.RECIPES;
  }


  // getRecipe(id: number): Observable<Recipe>{
  //   return this.client.get<Recipe>(`${this.BASE_URL}/recipes/${id}`);
  // }
}
