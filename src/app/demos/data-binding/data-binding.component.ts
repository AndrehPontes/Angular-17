import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [],
  templateUrl: './data-binding.component.html'
})
export class DataBindingComponent {
  public contadorClique: number = 0;
  public urlImagem: string = "https://angular.io/assets/images/logos/angular/logo-nav@2x.png"

  adicionarClique(){
    this.contadorClique ++;
  }
  zerarContador(){
    this.contadorClique = 0;
  }
}
