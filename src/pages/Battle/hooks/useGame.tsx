import { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pokemon } from "../../../models";
import { setMessage, userAttack, botAttack, replaceBotPokemon, replaceCurrentPokemon, setPause, removePause } from "../../../redux/state/game";
import { updateUserTeamStats } from "../../../redux/state/teams";
import { AppStore } from "../../../redux/store";
import { checkWhoIsFirstAttack, userAttackAction, checkHealth, botAttackAction, delay } from "../utilities/gameLogic";

const useGame = () => {

    const dispatch = useDispatch();
    let botRef = useRef(0);
    let userRef = useRef(0);
    let pauseRef = useRef(false);
    const { userPokemon, botPokemon, pause, messageOne, messageTwo} = useSelector( (store:AppStore) => store.game);
    const { userTeam, enemyTeam } = useSelector( (store:AppStore) => store.teams);
    const { username } = useSelector( (store:AppStore) => store.user);
    const [ attackMove, setAttackMove] = useState(false);
    const [ botAttackMove, setBotAttackMove] = useState(false);
    const [ throwUserPokeball, setThrowUserPokeball] = useState(false);
    const [ throwBotPokeball, setThrowBotPokeball] = useState(false);
  
    const handleUserAction = async(action:string) => {
      pauseRef.current = true;
      let botState = {...botPokemon};
      let currUserPokemon = {...userPokemon};
      if( action === 'attack'){
        let firstMove = checkWhoIsFirstAttack(userPokemon.speed, botPokemon.speed);
        if( firstMove === 'user first'){
            handleUserAttack(botState, firstMove);
        } 
        else{
            handleBotAttack(currUserPokemon, firstMove);
        }
      }
      else{
        dispatch( setMessage({
            messageOne:`Select pokemon`,
            messageTwo: ''
          }));
        dispatch( setPause({}) )
        await delay(1500);
        handleBotAttack(currUserPokemon, 'bot first');
      }
      //User
      //Todo sino, verifica que aun tenga pokemones vivos, en caso de, manda el proximo pokemon, sino la batalla termina
  
    }
  
    const userAttackAnimation = () => {
        setAttackMove(true);
        setTimeout(() => {
            setAttackMove(false)
        }, 500);
    }
  
    const botAttackAnimation = () => {
        setBotAttackMove(true);
        setTimeout(() => {
            setBotAttackMove(false)
        }, 500);
    }
    
    const throwUserPokeballAnimation = () => {
        setThrowUserPokeball(true);
        setTimeout(() => {
            setThrowUserPokeball(false)
        }, 1500);
    }
    
    const throwBotPokeballAnimation = () => {
        setThrowBotPokeball(true);
        setTimeout(() => {
            setThrowBotPokeball(false)
        }, 1500);
    }
    
    const newTurnMessage = async ( pokemon:Pokemon) => {
        let firstLine = 'What will';
        let secondLine = `${pokemon.name.toUpperCase()} do?`;
        dispatch(setMessage({
            messageOne: firstLine,
            messageTwo: secondLine
        }))
        await delay(1000);
        pauseRef.current = false;
    }
  
    useEffect(() => {
        throwUserPokeballAnimation()
        newTurnMessage(userPokemon);
    }, [])
    
  
  
  
  
    const handleUserAttack = async (botState:Pokemon, turn: string) => {
      dispatch( setMessage({
        messageOne:`${userPokemon.name.charAt(0).toUpperCase().concat(userPokemon.name.slice(1))} used attack`,
        messageTwo: ''
      }));
      await delay(750);
        if( turn === 'user first'){
            await delay(1250);
            userAttackAnimation();
            const newCopy = {...botState}
            let updatedState = userAttackAction(newCopy, userPokemon, botPokemon );
            dispatch( userAttack(updatedState) );
            await delay(1000);
            const isEnemyAlive = checkHealth(updatedState);
            if( isEnemyAlive ) await handleBotAttack({...userPokemon}, turn);
            else await handleBotPokemonChange();
        }
        else{
            await delay(1250);
            userAttackAnimation();
            const newCopy = {...botState}
            let updatedState = userAttackAction(newCopy, userPokemon, botPokemon );
            dispatch( userAttack(updatedState) );
            const isEnemyAlive = checkHealth(updatedState);
            if( !isEnemyAlive ) await handleBotPokemonChange();
            await newTurnMessage(userPokemon);
            
        }   
     
    }
  
    const handleBotAttack = async (currUserPokemon: Pokemon, turn: string) => {
      dispatch( setMessage({
        messageOne: `${botPokemon.name.charAt(0).toUpperCase().concat(botPokemon.name.slice(1))} used attack`,
        messageTwo: ''
      }));
      await delay(750);
        if( turn === 'user first'){
            await delay(1250);
            botAttackAnimation();
            const uCopy = {...currUserPokemon};
            let updatedState = botAttackAction(uCopy, userPokemon, botPokemon );
            dispatch( botAttack(updatedState) ); 
            const updatedTeam = updateUserTeam(updatedState);
            dispatch( updateUserTeamStats( updatedTeam ))
            await delay(1000);
            const isUserAlive = checkHealth(updatedState);
            if( !isUserAlive ) await handleUserPokemonChange();
            await newTurnMessage(userPokemon);
          
        }
        else{
            await delay(1250);
            botAttackAnimation();       
            const uCopy = {...currUserPokemon}
            let updatedState = botAttackAction(uCopy, userPokemon, botPokemon );
            dispatch( botAttack(updatedState) ); 
            const updatedTeam = updateUserTeam(updatedState);
            dispatch( updateUserTeamStats( updatedTeam ))
            await delay(1000);
            const isUserAlive = checkHealth(updatedState);
            if( isUserAlive ) await handleUserAttack({...botPokemon}, turn);
            else await handleUserPokemonChange();
          
        }
  
    }
  
    const handleBotPokemonChange = async () => {
        dispatch( setMessage({
            messageOne: `${botPokemon.name.charAt(0).toUpperCase().concat(botPokemon.name.slice(1))} has fainted`,
            messageTwo: ''
        }));
        await delay(1500);
        const nextPokemon = enemyTeam[ botRef.current + 1];
        throwBotPokeballAnimation();
        await delay(1500);
        dispatch( replaceBotPokemon(nextPokemon));
        dispatch( setMessage({
            messageOne: `Bot enemy sends:`,
            messageTwo: `${nextPokemon.name.charAt(0).toUpperCase().concat(nextPokemon.name.slice(1))}`
        }));
        await delay(2000);
        botRef.current = botRef.current+1;
        await newTurnMessage(userPokemon);
    }
  
    const handleUserPokemonChange = async (pokemon?: Pokemon) => {
    // if( pokemon ){
    //     dispatch( replaceCurrentPokemon(pokemon));
    //     dispatch( removePause({}) )
    //     await delay(1000);
    //            dispatch( setPause({}) )
    //     userRef.current = userRef.current+1;
    //     await newTurnMessage(pokemon);
    // }
    // else{
       // const index = userTeam.findIndex( elem => elem.currentHealth > 0);
       dispatch( setMessage({
            messageOne: `${userPokemon.name.charAt(0).toUpperCase().concat(userPokemon.name.slice(1))} has fainted`,
            messageTwo: ''
        }));
        await delay(1500);
        const nextPokemon = userTeam[ userRef.current + 1];
        dispatch( replaceCurrentPokemon(nextPokemon));
        throwUserPokeballAnimation();
        await delay(1500);
        dispatch( setMessage({
            messageOne: `${username} sends:`,
            messageTwo: `${nextPokemon.name.charAt(0).toUpperCase().concat(nextPokemon.name.slice(1))}`
        }));
        await delay(2000);
        userRef.current = userRef.current + 1;
        await newTurnMessage(nextPokemon);
      
    }
    
    const updateUserTeam = (updatedPokemonStats:Pokemon) => {
        return [...userTeam].map( pokemon => {
            if( updatedPokemonStats.id === pokemon.id){
                pokemon = updatedPokemonStats;
            }
            return pokemon;
        })
         
    }

  return {
    attackMove,
    botAttackMove,
    messageOne,
    messageTwo,
    handleUserAction,
    pauseRef,
    handleUserPokemonChange,
    throwUserPokeball,
    throwBotPokeball
  }
}
export default useGame