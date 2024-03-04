import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog/catalog.component';
import { TraditionalPizzasComponent } from './traditional-pizzas/traditional-pizzas.component';
import { WhitePizzasComponent } from './white-pizzas/white-pizzas.component';
import { DessertsComponent } from './desserts/desserts.component';
import { DrinksComponent } from './drinks/drinks.component';
import { ProfileComponent } from './profile/profile.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ClientsCatalogComponent } from './clients-catalog/clients-catalog.component';

@NgModule({
  declarations: [
    CatalogComponent,
    TraditionalPizzasComponent,
    WhitePizzasComponent,
    DessertsComponent,
    DrinksComponent,
    ProfileComponent,
    CreateComponent,
    EditComponent,
    ClientsCatalogComponent,
  ],
  imports: [CommonModule],
  exports: [
    CatalogComponent,
    ProfileComponent,
    TraditionalPizzasComponent,
    WhitePizzasComponent,
    DessertsComponent,
    DrinksComponent,
    CreateComponent,
    EditComponent,
    ClientsCatalogComponent,
  ],
})
export class MainModule {}
