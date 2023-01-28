import { Stack } from "@mui/material"
import { ActionsSection, BattleSectionContainer, InnerContainerBorder, PixelatedButton, SectionContainer } from "./style-components"
import PlayerTeam from '../ChooseTeam/components/PlayerTeam';
import Typography from "@mui/material/Typography";
import { useSelector } from 'react-redux';
import { AppStore } from '../../redux/store';

const Battle = () => {
  const { username } = useSelector( (store:AppStore) => store.user);

  return (
    <SectionContainer>
      <Stack width='75%' height='100%' direction="column">
        <BattleSectionContainer>
          
          </BattleSectionContainer>
          <ActionsSection>
           <InnerContainerBorder className="center_abs_item">
              <Stack direction="column" pl={5}>
                <Typography  fontSize="32px" fontFamily="cursive" color="white" mt={-1}>What will </Typography>
                <Typography  fontSize="32px" fontFamily="cursive" color="white" mt={-1}>{username.toUpperCase()} do? </Typography>
              </Stack>
              <PixelatedButton className="fightBtn" style={{ background:"#7b151e"}}>Fight</PixelatedButton>
              <PixelatedButton className="changeBtn" style={{ background:"#bd6917"}}>Change</PixelatedButton>
           </InnerContainerBorder>
          </ActionsSection>
      </Stack>
      <PlayerTeam />
    </SectionContainer>
  )
}
export default Battle