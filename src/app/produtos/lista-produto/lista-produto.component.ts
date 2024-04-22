import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produtos.service';
import { Produto } from '../produto';
import { HttpClientModule } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-produto',
  standalone: true,
  imports: [HttpClientModule, NgFor, CommonModule],
  templateUrl: './lista-produto.component.html'

})
export class ListaProdutoComponent implements OnInit {

  constructor(private produtoService: ProdutoService) {}

 public produtos!: Produto[];

  ngOnInit() {
    this.produtoService.obterProdutos().subscribe({
      next: (produtos: Produto[]) => {
        this.produtos = produtos;
        console.log(produtos);
      },
      error: (error: any) => {
        console.log(error);
        // Handle error as needed (e.g., display an error message)
      }
    });
  }


  // trackById(index: number, item: any) {
  //   return item.id; // Use a unique identifier from your Produto model
  // }

}
