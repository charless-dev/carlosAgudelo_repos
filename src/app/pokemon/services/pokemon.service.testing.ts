import { Pokemon } from "@pokemon/interfaces/pokemon.interface";
import { BehaviorSubject, Observable } from "rxjs";

export const pokemonMock:Pokemon = {
    name: 'Pikachu',
    id: 1,
    types: [{slot: 10, type:{ name: '', url:'' }}],
    weight: 100,
    sprites: { 
        back_default:       '',
        back_female:        '',
        back_shiny:         '',
        back_shiny_female:  '',
        front_default:      '',
        front_female:       '',
        front_shiny:        '',
        front_shiny_female: ''
    },
    moves: []
}

export class PokemonTestingService {

    private pokemonSelected: BehaviorSubject<Pokemon> = new BehaviorSubject<Pokemon>({});
    public pokemonSelected$: Observable<Pokemon> = this.pokemonSelected;

    setPokemonSelected( pokemon:Pokemon ):void {
        this.pokemonSelected.next( pokemon );
    }

    getPokemon ( term:string|number ):Promise<Pokemon> {
        return Promise.resolve( pokemonMock );
    }

    getPokemons( number:number ):Promise<Pokemon[]> {
        return Promise.resolve([
        { name: 'Pikachu', id: 1},
        { name: 'Charmander', id: 2}
        ])
    }

}