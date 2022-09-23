import { Component, Input } from '@angular/core';
import { Pokemon } from '@pokemon/interfaces/pokemon.interface';

@Component({
  selector: 'app-pokemons-grid',
  templateUrl: './pokemons-grid.component.html',
  styleUrls: ['./pokemons-grid.component.scss']
})
export class PokemonsGridComponent {

  @Input() pokemons: Pokemon[] = [];
  
  constructor() { }
  
}
