import { Stack } from "@mui/material"
import { ActionsSection, BattleSectionContainer, InnerContainerBorder, PixelatedButton, SectionContainer } from "./style-components"
import PlayerTeam from '../ChooseTeam/components/PlayerTeam';
import Typography from "@mui/material/Typography";
import { useSelector, useDispatch } from 'react-redux';
import { AppStore } from '../../redux/store';
import UserPokemon from "./components/UserPokemon";
import { useRef, useState } from "react";
import BotPokemon from "./components/BotPokemon";
import { botAttack, pauseGame, removePause, replaceBotPokemon, replaceCurrentPokemon, userAttack } from "../../redux/state/game";
import { Pokemon } from "../../models";
import { botAttackAction, checkHealth, checkWhoIsFirstAttack, userAttackAction } from './utilities/gameLogic';

const Battle = () => {
  const dispatch = useDispatch();
  let botRef = useRef(0);
  let userRef = useRef(0);
  let pauseRef = useRef(false);
  const { userPokemon, botPokemon, pause } = useSelector( (store:AppStore) => store.game);
  const { userTeam, enemyTeam } = useSelector( (store:AppStore) => store.teams);
  const [ attackMove, setAttackMove] = useState(false);
  const [ botAttackMove, setBotAttackMove] = useState(false);

  const handleUserAction = (action:string) => {
    pauseRef.current = true;
    let botState = {...botPokemon};
    let currUserPokemon = {...userPokemon};
    let firstMove = checkWhoIsFirstAttack(userPokemon.speed, botPokemon.speed);
    if( firstMove === 'user first'){
      handleUserAttack(botState, firstMove);
    } 
    else{
      handleBotAttack(currUserPokemon, firstMove);
      //Todo: Dispatch que el juego se pause para que el usuario escoja el pokemon a utilizar
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







  const handleUserAttack = (botState:Pokemon, turn: string) => {
    if( turn === 'user first'){
      setTimeout(() => {
        userAttackAnimation();
        const newCopy = {...botState}
        let updatedState = userAttackAction(newCopy, userPokemon, botPokemon );
        dispatch( userAttack(updatedState) );
        const isEnemyAlive = checkHealth(updatedState);
        if( isEnemyAlive ) handleBotAttack(updatedState, turn);
        else handleBotPokemonChange();
      }, 1000);
    }
    else{
      setTimeout(() => {
        userAttackAnimation();
        const newCopy = {...botState}
        let updatedState = userAttackAction(newCopy, userPokemon, botPokemon );
        dispatch( userAttack(updatedState) );
        const isEnemyAlive = checkHealth(updatedState);
        if( !isEnemyAlive ) handleBotPokemonChange();
        pauseRef.current = false;
      }, 3000);
    }
  }

  const handleBotAttack = (currUserPokemon: Pokemon, turn: string) => {
    if( turn === 'user first'){
      setTimeout(() => {
          botAttackAnimation();
          const uCopy = {...currUserPokemon}
          let updatedState = botAttackAction(uCopy, userPokemon, botPokemon );
          dispatch( botAttack(updatedState) ); 
          const isUserAlive = checkHealth(updatedState);
          if( !isUserAlive ) handleUserPokemonChange();
          pauseRef.current = false;
      }, 3000);
    }
    else{
      setTimeout(() => {
        botAttackAnimation();       
        const uCopy = {...currUserPokemon}
        let updatedState = botAttackAction(uCopy, userPokemon, botPokemon );
        dispatch( botAttack(updatedState) ); 
        const isUserAlive = checkHealth(updatedState);
        if( isUserAlive ) handleUserAttack(updatedState, turn);
        else handleUserPokemonChange();
      }, 1000);
    }
  }

  const handleBotPokemonChange = () => {
    dispatch( replaceBotPokemon(enemyTeam[botRef.current+1]));
    botRef.current = botRef.current+1;
  }

  const handleUserPokemonChange = () => {
    dispatch( replaceCurrentPokemon(userTeam[userRef.current+1]));
    userRef.current = userRef.current+1;
  }

















  return (
    <SectionContainer>
      <Stack width='75%' height='100%' direction="column">
        <BattleSectionContainer>
          <UserPokemon attackMove={attackMove}/>
          <BotPokemon botAttackMove={botAttackMove}/>
        </BattleSectionContainer>
        <ActionsSection>
          <InnerContainerBorder className="center_abs_item">
            <Stack direction="column" pl={5}>
              <Typography  fontSize="32px" fontFamily="cursive" color="white" mt={-1}>What will </Typography>
              <Typography  fontSize="32px" fontFamily="cursive" color="white" mt={-1}>{userPokemon.name.toUpperCase()} do? </Typography>
            </Stack>
            <PixelatedButton   onClick={ () => handleUserAction('attack') } className="fightBtn" style={{ background:"#7b151e"}}>Fight</PixelatedButton>
            <PixelatedButton  onClick={() => handleUserAction('change') } className="changeBtn" style={{ background:"#bd6917"}}>Change</PixelatedButton>
          </InnerContainerBorder>
        </ActionsSection>
      </Stack>
      <PlayerTeam />
    </SectionContainer>
  )
}
export default Battle;