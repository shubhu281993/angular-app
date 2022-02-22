import { Routes } from '@angular/router';
import { CardComponent } from 'src/routes/card/card.component';
import { HomeComponent } from 'src/routes/home/home.component';

export const ROUTES: Routes = [
    {path:'', component:HomeComponent},
    {path:'card', component:CardComponent},
    {path:'**', redirectTo:''},

];
