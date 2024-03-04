import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CatalogComponent } from './main/catalog/catalog.component';
import { TraditionalPizzasComponent } from './main/traditional-pizzas/traditional-pizzas.component';
import { WhitePizzasComponent } from './main/white-pizzas/white-pizzas.component';
import { DessertsComponent } from './main/desserts/desserts.component';
import { DrinksComponent } from './main/drinks/drinks.component';
import { CreateComponent } from './main/create/create.component';
import { EditComponent } from './main/edit/edit.component';

const routes: Routes = [
 {path :'login', component:LoginComponent},
 {path :'register', component:RegisterComponent},
 {path :'catalog', component:CatalogComponent},
 {path :'traditional', component:TraditionalPizzasComponent},
 {path :'catalog/white', component:WhitePizzasComponent},
 {path :'catalog/desserts', component:DessertsComponent},
 {path :'catalog/drinks', component:DrinksComponent},
 {path :'catalog/create', component:CreateComponent},
 {path :'clients-catalog/create', component:CreateComponent},
 {path :'clients-catalog/edit', component:EditComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
