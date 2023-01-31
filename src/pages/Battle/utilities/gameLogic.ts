import { Pokemon } from '../../../models/pokemon.model';
import { calculateDamage } from './DamageCalculator';


export const gameLogic = () => {
    
}

export const checkWhoIsFirstAttack = ( userSpeed: number, botSpeed: number) => {
    return userSpeed > botSpeed ? 'user first' : 'bot first';
}

export const userAttackAction = ( newState: Pokemon, currentUserPokemon:Pokemon, currentBotPokemon:Pokemon) => {
    let userDamage = calculateDamage(currentUserPokemon.attack, currentBotPokemon.defense, currentUserPokemon.types, currentBotPokemon.types);
    newState.currentHealth = (newState.currentHealth - userDamage) < 0 ? 0 : newState.currentHealth - userDamage;
    
    return newState;
}

export const botAttackAction = ( newState: Pokemon, currentUserPokemon:Pokemon, currentBotPokemon:Pokemon) => {
    let botDamage = calculateDamage(currentBotPokemon.attack, currentUserPokemon.defense, currentBotPokemon.types, currentUserPokemon.types);
    newState.currentHealth = newState.currentHealth - botDamage;
    if( newState.currentHealth === 0) newState.status === 'dead';
    return newState;
}


export const checkEnemyHealth = (botPokemon:Pokemon) => {
    return botPokemon.status === 'dead';
}

    