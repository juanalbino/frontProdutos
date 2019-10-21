import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../modelo/Produto';
import { ProdutoComponent } from './produto.component';
import { Mensagem } from '../modelo/Mensagem';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  //URL
  private url = "http://localhost:8090/api/produto";

  

//Contrutor
  constructor(private http:HttpClient) { }

  //Listar todos os produtos
  listarProdutos():Observable<Produto[]>{
    return this.http.get<Produto[]>(this.url);
  }

  //Cadastrar um novo produto
  cadastrarProduto(objeto: Produto):Observable<Mensagem>{
    return this.http.post<Mensagem>(this.url, objeto);
  }

  //Alterar um produto
  alterarProduto(objeto: Produto):Observable<Mensagem>{
    return this.http.put<Mensagem>(this.url, objeto);
  }

  //Excluir um produto
  excluirProduto(codigo:number):Observable<Mensagem>{
    return this.http.delete<Mensagem>(this.url+"/"+codigo);
  }

}
