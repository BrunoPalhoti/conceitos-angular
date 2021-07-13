import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-usuario-detalhe',
  templateUrl: './usuario-detalhe.component.html',
  styleUrls: ['./usuario-detalhe.component.css']
})
export class UsuarioDetalheComponent implements OnInit {

  @Input() usuariosFilho: any;//receber variaveis do pai (usuario-lisr.components.ts)
  @Output() usuarioEmitter = new EventEmitter<string>()//envia para o pai (usuario-lisr.components.ts)
  @Output() usuarioSalvarEmitter = new EventEmitter<any>()
  constructor() {
    console.log(this.usuariosFilho);
  }

  ngOnInit(): void {}

  //alterando o valor no pai
  //botão do usuario-detalhe.component.html
  clickButton(nome: any, email: any, cpf: any){

    let objeto = {
      id: this.usuariosFilho.id,
      nome: nome,
      email: email,
      cpf: cpf
    }
    this.usuarioSalvarEmitter.next(objeto);
    //this.usuarioSalvarEmitter.next(this.usuariosFilho.nome = nome);
    //this.usuarioSalvarEmitter.next(this.usuariosFilho.email = email);
  }
}
