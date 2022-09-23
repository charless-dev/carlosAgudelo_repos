import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPokemonComponent } from './pages/search-pokemon/search-pokemon.component';
import { SharedModule } from '@shared/shared.module';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { PokemonsGridComponent } from './components/pokemons-grid/pokemons-grid.component';
import { PokemonDetailViewComponent } from './components/pokemon-detail-view/pokemon-detail-view.component';
import { PaginationComponent } from '@shared/pagination/pagination.component';

@NgModule({
  declarations: [
    SearchPokemonComponent,
    PokemonCardComponent,
    PokemonsGridComponent,
    PokemonDetailViewComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PokemonModule { }
