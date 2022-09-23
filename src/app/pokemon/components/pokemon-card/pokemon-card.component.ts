import { Component, Input } from '@angular/core';
import { Pokemon } from '@pokemon/interfaces/pokemon.interface';
import { PokemonService } from '@pokemon/services/pokemon.service';
import Vibrant from 'node-vibrant';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent {

  @Input() pokemon:Pokemon = {};
  @Input() showDetails:Boolean = false;

  constructor( private pokemonService: PokemonService ) { }

  selectPokemon( pokemon:Pokemon ) {
    if( pokemon.types && pokemon.weight && pokemon.sprites && pokemon.moves ) {
      this.pokemonService.setPokemonSelected( pokemon );
    }
  }

}
