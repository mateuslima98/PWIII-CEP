import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { Alert } from 'selenium-webdriver';
import { throwError, from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CepAPIService {
apiURL: string="https://viacep.com.br/ws/";
//responsavel por fazer a requisição para o via cep
//forma de se comunicar com a API 
  constructor(private httpClient: HttpClient) { }
  //Caso nn haja falhas no cep  , mandará uma requisição para utilizar para tratar o erro/falha
  handleError(error) {
  let errorMessage = `Error Code: ${error.status}\nMessage:${error.message}`;
  alert(errorMessage);
  return throwError(errorMessage);
}
}
  

