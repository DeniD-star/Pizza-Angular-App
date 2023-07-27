import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OurProductsComponent } from './our-products/our-products.component';



@NgModule({
  declarations: [PageNotFoundComponent, OurProductsComponent],
  imports: [
    CommonModule
  ],
  exports: [PageNotFoundComponent, OurProductsComponent]
})
export class ComuneModule { }
