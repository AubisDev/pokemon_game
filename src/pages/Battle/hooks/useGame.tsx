import { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pokemon } from "../../../models";
import {
  setMessage,
  userAttack,
  botAttack,
  replaceBotPokemon,
  replaceCurrentPokemon,
  setPause,
  removePause,
  setAlivePokemons,
  emptyAlivePokemonList,
} from "../../../redux/state/game";
import { updateUserTeamStats } from "../../../redux/state/teams";
import { AppStore } from "../../../redux/store";
import {
  checkWhoIsFirstAttack,
  userAttackAction,
  checkHealth,
  botAttackAction,
  delay,
  firstToMove,
} from "../utilities/gameLogic";

const ATTACK_ACTION = "attack";

const useGame = () => {
  const dispatch = useDispatch();
  const botRef = useRef(0);
  const userRef = useRef(0);
  const pauseRef = useRef(false);
  const { userPokemon, botPokemon, pause, messageOne, messageTwo } =
    useSelector((store: AppStore) => store.game);
  const { userTeam, enemyTeam } = useSelector((store: AppStore) => store.teams);
  const { username } = useSelector((store: AppStore) => store.user);
  const [attackMove, setAttackMove] = useState(false);
  const [botAttackMove, setBotAttackMove] = useState(false);
  const [throwUserPokeball, setThrowUserPokeball] = useState(false);
  const [throwBotPokeball, setThrowBotPokeball] = useState(false);
  const [winner, setWinner] = useState("");
  const [userPokemonFainted, setUserPokemonFainted] = useState(false);

  // Define la accion que ejecuta el usuario
  // Si la accion es de cambio, es un movimiento priorizado, caso contrario se define el primer movimiento segun la velocidad del los pokemones
  const handleUserAction = async (action: string) => {
    pauseRef.current = true;
    const botState = { ...botPokemon };
    const currUserPokemon = { ...userPokemon };
    if (action === ATTACK_ACTION) {
      const firstMove = checkWhoIsFirstAttack(
        userPokemon.speed,
        botPokemon.speed,
      );
      if (firstMove === firstToMove.user) {
        handleUserAttack(botState, firstMove);
      } else {
        handleBotAttack(currUserPokemon, firstMove);
      }
    } else {
      showPokemonSelectMenu();
    }
  };

  // user pokemon attack animation
  const userAttackAnimation = () => {
    setAttackMove(true);
    setTimeout(() => {
      setAttackMove(false);
    }, 500);
  };

  // bot pokemon attack animation
  const botAttackAnimation = () => {
    setBotAttackMove(true);
    setTimeout(() => {
      setBotAttackMove(false);
    }, 500);
  };

  // throw user pokeball animation
  const throwUserPokeballAnimation = () => {
    setThrowUserPokeball(true);
    setTimeout(() => {
      setThrowUserPokeball(false);
    }, 1500);
  };

  // throw bot pokeball animation
  const throwBotPokeballAnimation = () => {
    setThrowBotPokeball(true);
    setTimeout(() => {
      setThrowBotPokeball(false);
    }, 1500);
  };

  // sets new turn messages
  const newTurnMessage = async (pokemon: Pokemon) => {
    const firstLine = "What will";
    const secondLine = `${pokemon.name.toUpperCase()} do?`;
    dispatch(
      setMessage({
        messageOne: firstLine,
        messageTwo: secondLine,
      }),
    );
    pauseRef.current = false;
  };

  useEffect(() => {
    throwBotPokeballAnimation();
    throwUserPokeballAnimation();
    newTurnMessage(userPokemon);
  }, []);

  //  User attack logic
  const handleUserAttack = async (botState: Pokemon, turn: string) => {
    dispatch(
      setMessage({
        messageOne: `${userPokemon.name
          .charAt(0)
          .toUpperCase()
          .concat(userPokemon.name.slice(1))} used attack`,
        messageTwo: "",
      }),
    );
    await delay(750);
    if (turn === firstToMove.user) {
      await delay(1250);
      userAttackAnimation();
      const newCopy = { ...botState };
      const updatedState = userAttackAction(newCopy, userPokemon, botPokemon);
      if (updatedState.currentHealth === botState.currentHealth) {
        dispatch(
          setMessage({
            messageOne: `${userPokemon.name} does not affects ${botState.name}`,
            messageTwo: "",
          }),
        );
      }
      await delay(1250);
      dispatch(userAttack(updatedState));
      await delay(1000);
      const isEnemyAlive = checkHealth(updatedState);
      if (isEnemyAlive) await handleBotAttack({ ...userPokemon }, turn);
      else await handleBotPokemonChange();
    } else {
      await delay(1250);
      userAttackAnimation();
      const newCopy = { ...botState };
      const updatedState = userAttackAction(newCopy, userPokemon, botPokemon);
      if (updatedState.currentHealth === botState.currentHealth) {
        dispatch(
          setMessage({
            messageOne: `${userPokemon.name} does not affects ${botState.name}`,
            messageTwo: "",
          }),
        );
      }
      await delay(1250);
      dispatch(userAttack(updatedState));
      const isEnemyAlive = checkHealth(updatedState);
      if (!isEnemyAlive) await handleBotPokemonChange();
      await newTurnMessage(userPokemon);
    }
  };

  //  Bot attack logic
  const handleBotAttack = async (currUserPokemon: Pokemon, turn: string) => {
    dispatch(
      setMessage({
        messageOne: `${botPokemon.name
          .charAt(0)
          .toUpperCase()
          .concat(botPokemon.name.slice(1))} used attack`,
        messageTwo: "",
      }),
    );
    await delay(750);
    if (turn === firstToMove.user) {
      await delay(1250);
      botAttackAnimation();
      const uCopy = { ...currUserPokemon };
      const updatedState = botAttackAction(uCopy, userPokemon, botPokemon);
      dispatch(botAttack(updatedState));
      const updatedTeam = updateUserTeam(updatedState);
      dispatch(updateUserTeamStats(updatedTeam));
      await delay(1000);
      const isUserPokemonAlive = checkHealth(updatedState);
      if (!isUserPokemonAlive) await handleUserPokemonChange();
      else {
        await newTurnMessage(userPokemon);
      }
    } else {
      await delay(1250);
      botAttackAnimation();
      const uCopy = { ...currUserPokemon };
      const updatedState = botAttackAction(uCopy, userPokemon, botPokemon);
      dispatch(botAttack(updatedState));
      const updatedTeam = updateUserTeam(updatedState);
      dispatch(updateUserTeamStats(updatedTeam));
      await delay(1000);
      const isUserPokemonAlive = checkHealth(updatedState);
      if (isUserPokemonAlive) await handleUserAttack({ ...botPokemon }, turn);
      else await handleUserPokemonChange();
    }
  };

  //  When bot pokemon fainted, it sends the next one to battle
  const handleBotPokemonChange = async () => {
    dispatch(
      setMessage({
        messageOne: `${botPokemon.name
          .charAt(0)
          .toUpperCase()
          .concat(botPokemon.name.slice(1))} has fainted`,
        messageTwo: "",
      }),
    );
    await delay(1500);
    const nextPokemon = enemyTeam[botRef.current + 1];
    if (nextPokemon) {
      throwBotPokeballAnimation();
      await delay(1500);
      dispatch(replaceBotPokemon(nextPokemon));
      dispatch(
        setMessage({
          messageOne: `Bot enemy sends:`,
          messageTwo: `${nextPokemon.name
            .charAt(0)
            .toUpperCase()
            .concat(nextPokemon.name.slice(1))}`,
        }),
      );
      await delay(2000);
      botRef.current += 1;
      await newTurnMessage(userPokemon);
    } else {
      setWinner("user");
    }
  };

  // user change pokemon action logic
  const handleUserPokemonChange = async (pokemon?: Pokemon) => {
    dispatch(
      setMessage({
        messageOne: `${userPokemon.name
          .charAt(0)
          .toUpperCase()
          .concat(userPokemon.name.slice(1))} has fainted`,
        messageTwo: "",
      }),
    );
    setUserPokemonFainted(true);
    await delay(1500);
    showAvailableTeam();
  };

  // Update pokemon health after an attack
  const updateUserTeam = (updatedPokemonStats: Pokemon) => {
    return [...userTeam].map((pokemon) => {
      if (updatedPokemonStats.id === pokemon.id) {
        pokemon = updatedPokemonStats;
      }
      return pokemon;
    });
  };

  // Show available pokemons when user uses change action
  const showAvailableTeam = async () => {
    const alivePokemons = [...userTeam].filter(
      (pokemon) =>
        pokemon.currentHealth > 0 && pokemon.name !== userPokemon.name,
    );
    if (alivePokemons.length === 0) setWinner("bot wins");
    dispatch(setAlivePokemons(alivePokemons));
    await delay(1000);
  };

  // Show message for change pokemon action
  const showPokemonSelectMenu = async () => {
    dispatch(
      setMessage({
        messageOne: "Select pokemon",
        messageTwo: "",
      }),
    );
    showAvailableTeam();
    await delay(1000);
  };

  // Logic for user pokemon change action
  const handleUserSelection = async (selectedPokemon: Pokemon) => {
    throwUserPokeballAnimation();
    dispatch(replaceCurrentPokemon(selectedPokemon));
    dispatch(emptyAlivePokemonList({}));
    dispatch(
      setMessage({
        messageOne: `${username} sends ${selectedPokemon.name}`,
        messageTwo: "",
      }),
    );
    await delay(2000);
    if (userPokemonFainted) {
      setUserPokemonFainted(false);
      await newTurnMessage(selectedPokemon);
    } else {
      handleBotAttack(selectedPokemon, "user first");
    }
  };

  return {
    attackMove,
    botAttackMove,
    messageOne,
    messageTwo,
    handleUserAction,
    pauseRef,
    handleUserPokemonChange,
    throwUserPokeball,
    throwBotPokeball,
    winner,
    handleUserSelection,
  };
};
export default useGame;
