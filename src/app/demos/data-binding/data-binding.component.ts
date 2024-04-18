import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule,NgClass],
  templateUrl: './data-binding.component.html'
})
export class DataBindingComponent {
  public contadorClique: number = 0;
  public urlImagem: string = "https://angular.io/assets/images/logos/angular/logo-nav@2x.png"
  public nome: string = ''

  adicionarClique(){
    this.contadorClique ++;
  }
  zerarContador(){
    this.contadorClique = 0;
  }
}
