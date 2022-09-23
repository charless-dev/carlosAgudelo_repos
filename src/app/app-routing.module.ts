import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SearchPokemonComponent } from "@pokemon/pages/search-pokemon/search-pokemon.component";

const routes:Routes = [
    {
        path: '',
        component: SearchPokemonComponent,
        pathMatch: 'full'
    }, 
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot( routes )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}