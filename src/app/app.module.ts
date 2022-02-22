import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { CardComponent } from 'src/routes/card/card.component';
import { HomeComponent } from 'src/routes/home/home.component';
import { NavbarComponent } from 'src/shared/component/navbar/navbar.component';

import { AppComponent } from './app.component';
import { ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES,{preloadingStrategy: PreloadAllModules})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
