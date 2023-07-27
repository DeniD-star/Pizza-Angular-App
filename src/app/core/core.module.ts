import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactsComponent } from './contacts/contacts.component';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    ContactsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent, FooterComponent, HomeComponent, AboutUsComponent, ContactsComponent]
})
export class CoreModule { }
