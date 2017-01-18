import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Recipe Box</h1>
    <h3>{{type}}</h3>
    <div class="well" *ngFor="let currentRecipe of recipies">
      <h4>{{currentRecipe.title}}</h4>
      <h5>{{currentRecipe.ingredients}}</h5>
      <p>{{currentRecipe.directions}}</p>
    </div>
  </div>
  `
})

export class AppComponent {
  type: string = 'Entrees';
  recipies: Recipe[] = [
    new Recipe('Baked Chicken', 'Chicken and lots of butter', 'Throw ingredients in the over at 350'),
    new Recipe('Alfredo', 'Noodle and Alfredo Sauce', 'Boil noodles until al dente and miss with sauce'),
    new Recipe('Steak', 'Lean angus', 'Throw it on the grill')
  ];
}

export class Recipe {
  constructor(public title: string, public ingredients: string, public directions: string) {}
}
