import { PokemonDataAdapter } from '../../../adapters/PokemonData.adapter';
import { Pokemon } from '../../../models/pokemon.model';

const apiURL = 'https://pokeapi.co/api/v2/pokemon/';
const idArrays = generateRandomIdArray();

function generateRandomIdArray (){
    const numberOfPokemons = 6;
    return Array(numberOfPokemons).fill(0).map(() => Math.floor(800 * Math.random()) + 1); // numbers from 0-50 (exclusive)

}

export const fetchBotTeamService = async () => {
    try {
        return await Promise.all([
            fetch(`${apiURL}${idArrays[1]}`),
            fetch(`${apiURL}${idArrays[2]}`),
            fetch(`${apiURL}${idArrays[0]}`),
            fetch(`${apiURL}${idArrays[3]}`),
            fetch(`${apiURL}${idArrays[4]}`),
            fetch(`${apiURL}${idArrays[5]}`),
        ]).then(([res1,res2,res3,res4,res5,res6]) => Promise.all([
            res1.json(),
            res2.json(),
            res3.json(),
            res4.json(),
            res5.json(),
            res6.json(),
        ]));
    } catch (error) {
        console.log(error);
    }


   
}