import { Component, OnInit } from '@angular/core';
import { Pokemon } from '@pokemon/interfaces/pokemon.interface';
import { PokemonService } from '@pokemon/services/pokemon.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pokemon-detail-view',
  templateUrl: './pokemon-detail-view.component.html',
  styleUrls: ['./pokemon-detail-view.component.scss']
})
export class PokemonDetailViewComponent implements OnInit {

  public pokemonSelected: Pokemon = {};
  public subscriptions: Subscription[] = [];
  
  constructor( private pokemonService: PokemonService ) { }

  ngOnInit(): void {
    const pokemonSelected$ = this.pokemonService.pokemonSelected$
    .subscribe( pokemon => this.pokemonSelected = pokemon );
    this.subscriptions.push( pokemonSelected$ );
  }

  ngOnDestroy() {
    this.subscriptions.forEach( ( subscription ) => subscription.unsubscribe() );
  }

}
