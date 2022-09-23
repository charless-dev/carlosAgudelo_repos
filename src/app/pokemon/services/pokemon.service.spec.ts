import { HttpErrorResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';

import { PokemonService } from './pokemon.service';
import { pokemonMock } from './pokemon.service.testing';

describe('PokemonService', () => {
  let service: PokemonService;
  let httpClientSpy: { get:jasmine.Spy }

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj( 'HttpClient', ['get'] );

    service = new PokemonService( httpClientSpy as any );
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a pokemon', ( done:DoneFn ) => {
    const pokemon = pokemonMock;
    httpClientSpy.get.and.returnValue( of( pokemon ) );
    spyOn( service, 'setPokemonColors').and.callFake( () => pokemon );
    
    service.getPokemon('pika').then( ( pokemon )=> {
      expect( pokemon.id ).toBeDefined()
      done();
    });
  });

  it('shouldnt return a pokemon', ( done:DoneFn ) => {
    const err = new Error('test');
    httpClientSpy.get.and.returnValue( throwError(() => err) );

    service.getPokemon('novale').then( ( pokemon )=> {
      expect( pokemon.id ).toBeUndefined()
      done();
    });
  });

  it('should return two pokemons', ( done:DoneFn ) => {
    const pokemon = pokemonMock;
    httpClientSpy.get.and.returnValue( of( pokemon ) );
    spyOn( service, 'setPokemonColors').and.callFake( () => pokemon );

    service.getPokemons( 2, 2 ).then( ( pokemons )=> {
      expect( pokemons.length ).toBe(2);
      done();
    });
  });

  it('shouldnt select a pokemon', () => {
    const pokemon = { name:"pikachu", id: 1 };
    service.setPokemonSelected( pokemon );
    service.pokemonSelected$.subscribe( result => expect( result.id ).toBeDefined() ); 
  }); 

  it('should calculate pagination', () => {
    const result = service.calculatePagination( 4, 8 );
    expect( result ).toBe(5); 
  }); 

});
