import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonService } from '@pokemon/services/pokemon.service';
import { PokemonTestingService } from '@pokemon/services/pokemon.service.testing';
import { SearchPokemonComponent } from './search-pokemon.component';

describe('SearchPokemonComponent', () => {
  let component: SearchPokemonComponent;
  let fixture: ComponentFixture<SearchPokemonComponent>;
  let pokemonService: PokemonService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPokemonComponent ],
      providers: [
        { provide: PokemonService, useClass: PokemonTestingService }
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    pokemonService = TestBed.inject(PokemonService);
  });

  it('should create', () => {
    spyOn( pokemonService, 'getPokemons').and.callThrough;
    expect(component.pokemons.length).toBe(2);
  });

  it('should find a pokemon', async () => {
    spyOn( pokemonService, 'getPokemon').and.callThrough;
    await component.searchPokemon('Pikachu');
    expect(component.pokemons.length).toBe(1);
  });

  it('should find return all pokemons', async () => {
    spyOn( pokemonService, 'getPokemon').and.callThrough;
    await component.searchPokemon('');
    expect(component.pokemons.length).toBe(2);
  });  

  it('should paginate', async () => {
    component.makePagination( 3 );
    expect(component.currentPage).toBe(3);
  });

});
