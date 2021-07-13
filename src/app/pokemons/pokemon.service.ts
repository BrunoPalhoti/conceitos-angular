import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// servicio sever para fazer a comunicação com a API
@Injectable({
  providedIn: 'root'
})
export class PokemonService {

   //instanciando a variavel(injetado)
   constructor(private http: HttpClient) { }

   getAll(offset: number, limit: number){//buscar info api (Só é chamada sempre que for requisitada)
   return this.http.get("https://pokeapi.co/api/v2/pokemon?offset=" + offset + "&limit=" + limit) // requicisao get
   }

   getOne(url: string){//buscar info api (Só é chamada sempre que for requisitada)
    return this.http.get(url) // requicisao get
    }
}
