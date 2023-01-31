import { Stack } from "@mui/material"
import { ActionsSection, BattleSectionContainer, InnerContainerBorder, PixelatedButton, SectionContainer } from "./style-components"
import PlayerTeam from '../ChooseTeam/components/PlayerTeam';
import Typography from "@mui/material/Typography";
import { useSelector, useDispatch } from 'react-redux';
import { AppStore } from '../../redux/store';
import UserPokemon from "./components/UserPokemon";
import { useRef, useState } from "react";
import BotPokemon from "./components/BotPokemon";
import { calculateDamage } from './utilities/DamageCalculator';
import { botAttack, replaceBotPokemon, replaceCurrentPokemon, userAttack } from "../../redux/state/game";
import { Pokemon } from "../../models";
import { botAttackAction, checkHealth, checkWhoIsFirstAttack, userAttackAction } from './utilities/gameLogic';

const Battle = () => {
  const dispatch = useDispatch();
  let botRef = useRef(0);
  let userRef = useRef(0);
  const { userPokemon, botPokemon } = useSelector( (store:AppStore) => store.game);
  const { userTeam, enemyTeam } = useSelector( (store:AppStore) => store.teams);
  const [ attackMove, setAttackMove] = useState(false);
  const [ botAttackMove, setBotAttackMove] = useState(false);

  const handleUserAction = (action:string) => {
    let firstMove = checkWhoIsFirstAttack(userPokemon.speed, botPokemon.speed);
    let botState = {...botPokemon};
    let userState = {...userPokemon};
    if( firstMove === 'user first'){
      handleUserAttack(botState, firstMove);
    } 
    else{
      handleBotAttack(userState, firstMove);
      
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
      userAttackAnimation();
      let updatedState = userAttackAction(botState, userPokemon, botPokemon );
      dispatch( userAttack(updatedState) );
      const isEnemyAlive = checkHealth(updatedState);
      if( isEnemyAlive ) handleBotAttack(updatedState, turn);
      else handleBotPokemonChange();
    }
    else{
      setTimeout(() => {
        userAttackAnimation();
        let updatedState =   userAttackAction(botState, userPokemon, botPokemon );
        dispatch( userAttack(updatedState) );
        const isEnemyAlive = checkHealth(updatedState);
        if( isEnemyAlive ) handleBotAttack(updatedState, turn);
        else handleBotPokemonChange();
      }, 3000);
    }
  }




  const handleBotAttack = (userState: Pokemon, turn: string) => {
    if( turn === 'user first'){
      setTimeout(() => {
          botAttackAnimation();       
          let updatedState = botAttackAction(userState, userPokemon, botPokemon );
          dispatch( botAttack(updatedState) ); 
          const isUserAlive = checkHealth(updatedState);
          if( isUserAlive ) handleUserAttack(updatedState, turn);
          else handleUserPokemonChange();
      }, 3000);
    }
    else{
        botAttackAnimation();       
        let updatedState = botAttackAction(userState, userPokemon, botPokemon );
        dispatch( botAttack(updatedState) ); 
        const isUserAlive = checkHealth(updatedState);
        if( isUserAlive ) handleUserAttack(updatedState, turn);
        else handleUserPokemonChange();
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
            <PixelatedButton  onClick={ () => handleUserAction('attack') } className="fightBtn" style={{ background:"#7b151e"}}>Fight</PixelatedButton>
            <PixelatedButton onClick={() => handleUserAction('change') } className="changeBtn" style={{ background:"#bd6917"}}>Change</PixelatedButton>
          </InnerContainerBorder>
        </ActionsSection>
      </Stack>
      <PlayerTeam />
    </SectionContainer>
  )
}
export default Battle;