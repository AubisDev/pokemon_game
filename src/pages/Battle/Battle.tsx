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
import { botAttack, moveBotIndex, replaceBotPokemon, userAttack } from "../../redux/state/game";
import { Pokemon } from "../../models";
import { botAttackAction, checkEnemyHealth, checkWhoIsFirstAttack, userAttackAction } from './utilities/gameLogic';

const Battle = () => {
  const dispatch = useDispatch();
  let indexRef = useRef(0);
  const { userPokemon, botPokemon, botCurrentIndex } = useSelector( (store:AppStore) => store.game);
  const { userTeam, enemyTeam } = useSelector( (store:AppStore) => store.teams);
  const [ attackMove, setAttackMove] = useState(false);
  const [ botAttackMove, setBotAttackMove] = useState(false);

  const handleUserAction = (action:string) => {
    let newState = {...botPokemon};
    let firstMove = checkWhoIsFirstAttack(userPokemon.speed, botPokemon.speed);
    if( firstMove === 'user first'){
      userAttackAnimation();
      let updatedState =   userAttackAction(newState,userPokemon, botPokemon );
      dispatch( userAttack(updatedState) );
      const isEnemyAlive = checkEnemyHealth(botPokemon);
      if( isEnemyAlive ){

      }
    } 

    if( action === 'attack' ){

      //Todo lOGICA DE QUITAR VIDA Y VERIFICAR ESTADO
    }
    else{
      //Todo: Dispatch que el juego se pause para que el usuario escoja el pokemon a utilizar

    }

    //Todo: Si el pokemon enemigo aun tiene vida, ataca
    setTimeout(() => {
      if( newState.status !== 'dead' ){
        botAttackAnimation();
        newState = {...userPokemon};
        let updatedState =   botAttackAction(newState ,userPokemon, botPokemon );
        dispatch( botAttack(updatedState) );
        //!Logica para cambiar de pokemon
      }




      else{
        dispatch( replaceBotPokemon(enemyTeam[indexRef.current+1]));
        indexRef.current = indexRef.current+1;
      }
    }, 4000);
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
export default Battle