import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokemons: any = null;
  pokemonSelecionado: any = null;
  offset: number = 0;
  limit: number = 5;

  //injeção de dependecia servicio
  constructor(private pokemonService: PokemonService, private ac: ActivatedRoute) {}

  ngOnInit(): void {

    //pega todos os paremetros da url da api
    this.ac.queryParams
      .subscribe( (params: any) => {
        console.log(params);
      });

    this.pokemonService.getAll(this.offset, this.limit)//chamando a requisição que está no pokemon.service.ts (todos os pokemons)
    .subscribe( (x) =>{//fica ouvindo a resposta do servicio
      this.pokemons = x;
      console.log(this.pokemons);
    });
  }

  //botão de selecionar o pokemon
  selecionarPokemon(url: string){
   this.pokemonService.getOne(url)//chamando a requisição que está no pokemon.service.ts (todas as informação de um unico pokemon)
    .subscribe( (x) =>{//fica ouvindo a resposta do servicio
      this.pokemonSelecionado = x;
    });
  }

  //botão proxima pagina
  proximaPagina(){
    if(this.offset <= 1120){
    this.offset += this.limit;
    console.log(this.offset)
    this.pokemonService.getAll(this.offset, this.limit)
    .subscribe((data: any)=>{
      this.pokemons = data
      });
    }
  }

  //botão pagina Antorior
  PaginaAnterior(){
    if(this.offset >= 1){
      this.offset -= this.limit;
      this.pokemonService.getAll(this.offset, this.limit)
      .subscribe((data: any)=>{
        this.pokemons = data
      });
     }
  }
}
