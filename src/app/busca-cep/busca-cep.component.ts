import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { CEP } from '../model/cep';

@Component({
  selector: 'has-busca-cep',
  templateUrl: './busca-cep.component.html',
  styleUrls: ['./busca-cep.component.css']
})
export class BuscaCepComponent implements OnInit {

  cepForm: FormGroup;
  cep:CEP;
  //Atributo
  //Armazenar o resultado 
  //Criar o Objeto - Instanciamento
  //Cria atributo 
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
      //Recerber os valores da caixa de texto

      this.cepForm=this.formBuilder.group({
        //Variavel como Cep
        //Armazenar valor que vem da tela
        cep:this.formBuilder.control('')

  })
  }
  //Chamado pela tela
  onConsultar(){
  //Declarar variavel
  let cep: string=this.cepForm.value.cep;
  //Alert
  alert(cep);
  }

}
