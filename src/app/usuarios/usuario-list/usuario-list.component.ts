import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {

  usuarioSelect: any = null;

 //arrey de objeto
 usuarios = [
  {id: 1, nome: "Usuario 1", email: "usuario1@gmail.com", cpf: "12345678901"},
  {id: 2, nome: "Usuario 2", email: "usuario2@gmail.com", cpf: "12345678901"},
  {id: 3, nome: "Usuario 3", email: "usuario3@gmail.com", cpf: "12345678901"}
 ]
  constructor() {}

  ngOnInit(): void {

  }

  //recebe o valor que esta vindo do filho (usuario-detalhe.components.ts)
  onUsuarioEmitter(valor: string){
    console.log(valor);

  }

  //selecionando o valor do filho (usuario-detalhe.components.ts) para o pai (usuario-list.components.ts)
  onSelecionarClique(usuario: any){
    console.log(usuario);
    this.usuarioSelect = usuario;
  }

  //salvando na tabela as informações passadas pelo filho (usuario-detalhe.components.ts)
  onUsuarioSalvarEmitter(usuarioFilho: any){
    for(let i = 0; i < this.usuarios.length; i++){
      if(this.usuarios[i].id == usuarioFilho.id){
        this.usuarios[i] = usuarioFilho;
      }
    }
  }
}
