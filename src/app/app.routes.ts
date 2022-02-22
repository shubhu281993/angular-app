import { Routes } from '@angular/router';
import { CardsComponent } from 'src/routes/cards/cards.component';
import { HomeComponent } from 'src/routes/home/home.component';

export const ROUTES: Routes = [
    {path:'', component:HomeComponent},
    {path:'card', component:CardsComponent},
    {path:'**', redirectTo:''},

];
