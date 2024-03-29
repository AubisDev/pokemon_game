import { Pokemon } from "../../../models/pokemon.model";
import { calculateDamage } from "./DamageCalculator";

export const firstToMove = {
  user: "user first",
  bot: "bot first",
};

export const gameLogic = () => {};

export const checkWhoIsFirstAttack = (userSpeed: number, botSpeed: number) => {
  return userSpeed > botSpeed ? firstToMove.user : firstToMove.bot;
};

export const userAttackAction = (
  newState: Pokemon,
  currentUserPokemon: Pokemon,
  currentBotPokemon: Pokemon,
) => {
  const userDamage = calculateDamage(
    currentUserPokemon.attack,
    currentBotPokemon.defense,
    currentUserPokemon.types,
    currentBotPokemon.types,
  );
  if (userDamage === 0) return newState;
  newState.currentHealth =
    Math.floor(newState.currentHealth - userDamage) < 0
      ? 0
      : Math.floor(newState.currentHealth - userDamage);
  if (newState.currentHealth === 0) newState.status = "dead";
  return newState;
};

export const botAttackAction = (
  newState: Pokemon,
  currentUserPokemon: Pokemon,
  currentBotPokemon: Pokemon,
) => {
  const botDamage = calculateDamage(
    currentBotPokemon.attack,
    currentUserPokemon.defense,
    currentBotPokemon.types,
    currentUserPokemon.types,
  );
  if (botDamage === 0) return newState;
  newState.currentHealth =
    Math.floor(newState.currentHealth - botDamage) < 0
      ? 0
      : Math.floor(newState.currentHealth - botDamage);
  if (newState.currentHealth === 0) newState.status = "dead";
  return newState;
};

export const checkHealth = (pokemon: Pokemon) => {
  return pokemon.status === "alive";
};

export const delay = (timeMs: number) =>
  new Promise((resolve) => setTimeout(resolve, timeMs));
