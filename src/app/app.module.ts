import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { PageNotFoundComponent } from './comune/page-not-found/page-not-found.component';
import{AngularFireModule} from '@angular/fire/compat'
import { environment } from 'src/environments/environment';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';

import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';


import { LoginComponent } from './auth/login/login.component';

import { HeaderComponent } from './core/header/header.component';
import { HomeComponent } from './core/home/home.component';
import { FooterComponent } from './core/footer/footer.component';
import { RegisterComponent } from './auth/register/register.component';
import { CatalogComponent } from './main/catalog/catalog.component';



@NgModule({
  declarations: [AppComponent,CatalogComponent,LoginComponent,HeaderComponent,HomeComponent,FooterComponent,RegisterComponent],
  imports: [BrowserModule, AppRoutingModule,AngularFireModule.initializeApp(environment.firebase), provideFirebaseApp(() => initializeApp(environment.firebase)), provideAuth(() => getAuth()), provideDatabase(() => getDatabase()), provideFirestore(() => getFirestore())],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
