import { Routes } from '@angular/router';
import { HomeComponent } from './navegacao/home/home.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { ServicosComponent } from './institucional/servicos/servicos.component';

export const routes: Routes = [
    {path:'', redirectTo:'/home', pathMatch: 'full'},
    {path:'home', component: HomeComponent},    
    {path:'sobre', component: SobreComponent},
    {path:'servicos', component: ServicosComponent},
    {path:'contato', component: ContatoComponent},
];
