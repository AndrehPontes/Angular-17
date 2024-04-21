import { Routes } from '@angular/router';
import { HomeComponent } from './navegacao/home/home.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { ServicosComponent } from './institucional/servicos/servicos.component';
import { DataBindingComponent } from './demos/data-binding/data-binding.component';
import { ListaProdutoComponent } from './produtos/lista-produto/lista-produto.component';

export const routes: Routes = [
    {path:'', redirectTo:'/home', pathMatch: 'full'},
    {path:'home', component: HomeComponent},    
    {path:'sobre', component: SobreComponent},
    {path:'servicos', component: ServicosComponent},
    {path:'contato', component: ContatoComponent},
    {path:'faeture-data-binding', component: DataBindingComponent},
    {path:'produtos', component: ListaProdutoComponent},
];
