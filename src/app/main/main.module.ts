import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog/catalog.component';
import { TraditionalPizzasComponent } from './traditional-pizzas/traditional-pizzas.component';
import { WhitePizzasComponent } from './white-pizzas/white-pizzas.component';
import { DessertsComponent } from './desserts/desserts.component';
import { DrinksComponent } from './drinks/drinks.component';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    CatalogComponent,
    TraditionalPizzasComponent,
    WhitePizzasComponent,
    DessertsComponent,
    DrinksComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CatalogComponent, ProfileComponent, TraditionalPizzasComponent, WhitePizzasComponent, DessertsComponent, DrinksComponent]
})
export class MainModule { }
