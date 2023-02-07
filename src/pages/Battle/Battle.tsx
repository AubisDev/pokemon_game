import { Stack } from "@mui/material"
import { ActionsSection, BattleSectionContainer, InnerContainerBorder, PixelatedButton, SectionContainer } from "./style-components"
import PlayerTeam from '../ChooseTeam/components/PlayerTeam';
import Typography from "@mui/material/Typography";
import UserPokemon from "./components/UserPokemon";
import BotPokemon from "./components/BotPokemon";
import useGame from "./hooks/useGame";
import BattleEnd from "./components/BattleEnd";
import { defeatMessage, winMessage } from "./utilities/constants";
import AvailablePokemonList from "./components/AvailablePokemonList";

const Battle = () => {
  const { 
    attackMove, 
    botAttackMove, 
    messageOne, 
    messageTwo, 
    handleUserAction, 
    pauseRef, winner,
    throwUserPokeball, 
    throwBotPokeball, 
    handleUserSelection } = useGame();
    

  return (
    <SectionContainer>
      <Stack width={{xs:'100%', sm:'75%'}} height='100%' direction="column"  mb={{xs:'3em',sm:0}} overflow='hidden'>
        <BattleSectionContainer >
          <UserPokemon attackMove={attackMove} throwUserPokeball={throwUserPokeball}/>
          <BotPokemon botAttackMove={botAttackMove} throwBotPokeball={throwBotPokeball}/>
        </BattleSectionContainer>
        <ActionsSection>
          <InnerContainerBorder className="center_abs_item">
            <Stack direction="column" pl={{xs:3,sm:5}}>
              <Typography  fontSize={{xs:"20px",sm:"32px"}}  fontFamily="cursive" color="white" mt={-1}>{messageOne} </Typography>
              <Typography  fontSize={{xs:"20px",sm:"32px"}} fontFamily="cursive" color="white" mt={{xs:0,sm:-1}}>{messageTwo}</Typography>
            </Stack>
            {
              pauseRef.current ? <AvailablePokemonList handleUserSelection={handleUserSelection} /> :
              (
                <>
                  <PixelatedButton disabled={pauseRef.current} onClick={ () => handleUserAction('attack') } className="fightBtn" style={{ background:"#7b151e"}}>{pauseRef.current ? 'Wait' : 'Fight'}</PixelatedButton>
                  <PixelatedButton disabled={pauseRef.current} onClick={() => handleUserAction('change') } className="changeBtn" style={{ background:"#bd6917"}}>{pauseRef.current ? 'Wait' : 'Change'}</PixelatedButton>
                </>
              )
            }
            
          </InnerContainerBorder>
        </ActionsSection>
      </Stack>
      <PlayerTeam />
      {
        winner.length !== 0 ?  winner === 'user' 
          ? <BattleEnd message={winMessage} />
          : <BattleEnd message={defeatMessage} />
        : null
      }
      
    </SectionContainer>
  )
}
export default Battle;