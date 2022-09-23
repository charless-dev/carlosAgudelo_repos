import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from '@pokemon/interfaces/pokemon.interface';
import { BehaviorSubject, catchError, firstValueFrom, Observable, of } from 'rxjs';
import Vibrant from 'node-vibrant';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private apiUrl: string = `https://pokeapi.co/api/v2`;
  private pokemonSelected: BehaviorSubject<Pokemon> = new BehaviorSubject<Pokemon>({});
  public pokemonSelected$: Observable<Pokemon> = this.pokemonSelected;

  constructor( private http: HttpClient ) { }

  setPokemonSelected( pokemon:Pokemon ):void {
    this.pokemonSelected.next( pokemon );
  }

  async getPokemon ( term:string|number ):Promise<Pokemon> {
    const url = `${ this.apiUrl }/pokemon/${ term }`;
    const source$ = this.http.get<Pokemon>( url ).pipe( catchError( err => of( {} ) ) );

    const pokemon = await firstValueFrom( source$ );
    return pokemon.hasOwnProperty("id")
    ? this.setPokemonColors( pokemon )
    : {}
  }

  async getPokemons( itemsPerPage:number, numPage:number ):Promise<Pokemon[]> {
    const pokemons: Pokemon[] = []; 
    const pageFrom = this.calculatePagination( itemsPerPage, numPage );
    
    for( let i = pageFrom; i <= numPage; i++ ) {
      const pokemon = await this.getPokemon( i );
      pokemons.push( pokemon );
    }
    return pokemons;
  }

  calculatePagination( itemsPerPage:number, numPage:number ) {
    const initialPage = 1;
    return numPage !== itemsPerPage ? numPage - ( itemsPerPage - initialPage) : initialPage;
  }

  setPokemonColors( pokemon:Pokemon ):Pokemon {
    const image = pokemon.sprites?.front_default || '';
    const vibrantr = new Vibrant( image );
    
    vibrantr.getPalette().then( ( palette ) => {
      pokemon.primaryColor = `rgb(${palette.Vibrant?.rgb.toString()})`;
      pokemon.secondaryColor = `rgb(${palette.LightVibrant?.rgb.toString()})`;
    })
    return pokemon;
  }

}
