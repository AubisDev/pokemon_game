import { Pokemon } from '../models/pokemon.model';


export const PokemonDataAdapter = ( pokemon: any ):Pokemon => {
    return {
        name: pokemon.name,
        id: pokemon.id,
        imageFront: pokemon.sprites.other.home.front_default,
        imageSpot: pokemon.sprites.front_default,
        health: pokemon.stats[0].base_stat,
        attack: pokemon.stats[1].base_stat,  
        defense: pokemon.stats[2].base_stat,  
        speed: pokemon.stats[5].base_stat,
        types: pokemon.types.map( (pokeType:any) => pokeType.type.name ),
        status: 'alive',
    }
}