import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Produto } from "./produto"

@Injectable()
export class ProdutoService {

    constructor(private http: HttpClient) {
         
    }
    protected UrlServicrV1: string = "http://localhost:3000/"

    obterProdutos() : Observable<Produto[]>{
        return this.http
        .get<Produto[]>(this.UrlServicrV1 + "produtos");
    }
}