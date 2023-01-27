import { Pokemon } from '../../../models/pokemon.model';


export const checkUserTeam = (userTeam: Pokemon[]) => {
    return userTeam.every( pokemon => pokemon.name.length > 0  && pokemon.attack );    
}

