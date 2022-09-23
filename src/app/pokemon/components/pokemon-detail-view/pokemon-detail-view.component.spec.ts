import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonService } from '@pokemon/services/pokemon.service';
import { PokemonTestingService } from '@pokemon/services/pokemon.service.testing';
import { PokemonDetailViewComponent } from './pokemon-detail-view.component';

describe('PokemonDetailViewComponent', () => {
  let component: PokemonDetailViewComponent;
  let fixture: ComponentFixture<PokemonDetailViewComponent>;
  let pokemonService: PokemonService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonDetailViewComponent ],
      providers: [
        { provide: PokemonService, useClass: PokemonTestingService }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    pokemonService = TestBed.inject(PokemonService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
