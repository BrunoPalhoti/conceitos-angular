import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonsDetalheComponent } from './pokemons-detalhe/pokemons-detalhe.component';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonsDetalheComponent
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    SharedModule
  ],
  exports: [
    PokemonListComponent
  ]
})
export class PokemonsModule { }
