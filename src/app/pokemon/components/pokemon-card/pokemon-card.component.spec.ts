import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonService } from '@pokemon/services/pokemon.service';
import { pokemonMock, PokemonTestingService } from '@pokemon/services/pokemon.service.testing';

import { PokemonCardComponent } from './pokemon-card.component';

describe('PokemonCardComponent', () => {
  let component: PokemonCardComponent;
  let fixture: ComponentFixture<PokemonCardComponent>;
  let pokemonService: PokemonService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonCardComponent ],
      providers: [
        { provide: PokemonService, useClass: PokemonTestingService }
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    pokemonService = TestBed.inject(PokemonService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select a pokemon', () => {
    const pokemon = pokemonMock;
    component.selectPokemon(pokemon);
    pokemonService.pokemonSelected$.subscribe( result => expect( result.id ).toBeDefined() ); 
  });

  it('shouldnt select a pokemon', () => {
    const pokemon = { name:"pikachu", id: 1 };
    component.selectPokemon(pokemon);
    pokemonService.pokemonSelected$.subscribe( result => expect( result.id ).toBeUndefined() ); 
  });  

});
