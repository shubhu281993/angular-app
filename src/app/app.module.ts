import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { HotToastModule } from '@ngneat/hot-toast';
import { NotifierModule } from 'angular-notifier';
import { CardsComponent } from 'src/routes/cards/cards.component';
import { HomeComponent } from 'src/routes/home/home.component';
import { CardComponent } from 'src/shared/component/card/card.component';
import { NavbarComponent } from 'src/shared/component/navbar/navbar.component';

import { AppComponent } from './app.component';
import { ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CardsComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES,{preloadingStrategy: PreloadAllModules}),
    HttpClientModule,
    FormsModule,
    HotToastModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
