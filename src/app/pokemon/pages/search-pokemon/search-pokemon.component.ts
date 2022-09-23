import { Component, OnInit } from '@angular/core';
import { Pokemon } from '@pokemon/interfaces/pokemon.interface';
import { PokemonService } from '@pokemon/services/pokemon.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.scss']
})
export class SearchPokemonComponent implements OnInit {

  public pokemons: Pokemon[] = [];
  public pokemonsPerPage: number = 4;
  public currentPage: number = this.pokemonsPerPage;
  public pokemonSelected: Pokemon = {};
  public subscriptions: Subscription[] = [];
  
  constructor( private pokemonService: PokemonService ) { }

  ngOnInit(): void {
    this.searchPokemons( this.pokemonsPerPage );

    const pokemonSelected$ = this.pokemonService.pokemonSelected$.subscribe( pokemon => this.pokemonSelected = pokemon );
    this.subscriptions.push( pokemonSelected$ );
  }

  ngOnDestroy() {
    this.subscriptions.forEach( ( subscription ) => subscription.unsubscribe() );
  }

  async searchPokemon( term:string ):Promise<void> {
    this.pokemons = [];
    if( term === '' ) { 
      this.searchPokemons( this.pokemonsPerPage );
      return;
    }
    const pokemon = await this.pokemonService.getPokemon( term );
    this.pokemons.push( pokemon );
  }

  async searchPokemons( numPokemons:number ):Promise<void> {
    this.pokemons = [];
    this.pokemons = await this.pokemonService.getPokemons( this.pokemonsPerPage, numPokemons );
  }

  makePagination( pageNumber: number ) {
    this.currentPage = pageNumber;
    this.searchPokemons( pageNumber );
  }

}
