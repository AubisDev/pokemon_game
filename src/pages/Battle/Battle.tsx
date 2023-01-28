import { Stack } from "@mui/material"
import { ActionsSection, BattleSectionContainer, InnerContainerBorder, PixelatedButton, SectionContainer } from "./style-components"
import PlayerTeam from '../ChooseTeam/components/PlayerTeam';
import Typography from "@mui/material/Typography";
import { useSelector } from 'react-redux';
import { AppStore } from '../../redux/store';
import UserPokemon from "./components/UserPokemon";
import { useState } from "react";
import BotPokemon from "./components/BotPokemon";

const Battle = () => {
  const { username } = useSelector( (store:AppStore) => store.user);
  const [ attackMove, setAttackMove] = useState(false);
  const [ botAttackMove, setBotAttackMove] = useState(false);
  
  const handleUserAction = (action:string) => {
    if( action === 'attack' ){
      setAttackMove(true);
      //Todo lOGICA DE QUITAR VIDA Y VERIFICAR ESTADO
      setTimeout(() => {
        setAttackMove(false)
      }, 500);
    }
    else{
      //Todo: Dispatch que el juego se pause para que el usuario escoja el pokemon a utilizar

    }

    //Todo: Si el pokemon enemigo aun tiene vida, ataca
    //User
    setBotAttackMove(true);
    setTimeout(() => {
      setBotAttackMove(false)
    }, 500);
    //Todo sino, verifica que aun tenga pokemones vivos, en caso de, manda el proximo pokemon, sino la batalla termina

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
              <Typography  fontSize="32px" fontFamily="cursive" color="white" mt={-1}>{username.toUpperCase()} do? </Typography>
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