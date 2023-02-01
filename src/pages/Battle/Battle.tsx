import { Stack } from "@mui/material"
import { ActionsSection, BattleSectionContainer, InnerContainerBorder, PixelatedButton, SectionContainer } from "./style-components"
import PlayerTeam from '../ChooseTeam/components/PlayerTeam';
import Typography from "@mui/material/Typography";
import UserPokemon from "./components/UserPokemon";
import BotPokemon from "./components/BotPokemon";
import useGame from "./hooks/useGame";

const Battle = () => {
  const { attackMove, botAttackMove, messageOne, messageTwo, handleUserAction } = useGame();

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
              <Typography  fontSize="32px" fontFamily="cursive" color="white" mt={-1}>{messageOne} </Typography>
              <Typography  fontSize="32px" fontFamily="cursive" color="white" mt={-1}>{messageTwo}</Typography>
            </Stack>
            <PixelatedButton onClick={ () => handleUserAction('attack') } className="fightBtn" style={{ background:"#7b151e"}}>Fight</PixelatedButton>
            <PixelatedButton onClick={() => handleUserAction('change') } className="changeBtn" style={{ background:"#bd6917"}}>Change</PixelatedButton>
          </InnerContainerBorder>
        </ActionsSection>
      </Stack>
      <PlayerTeam />
    </SectionContainer>
  )
}
export default Battle;