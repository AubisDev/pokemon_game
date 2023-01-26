
import { Box, Button, Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import { AppStore } from '../../../redux/store';
import { TeamCardsContainer, TeamCardsTitle } from "../style-components";
import PokemonGridCard from "./PokemonGridCard";
import { v4 as uuidv4 } from 'uuid';



const PlayerTeam = () => {

    const { username } = useSelector( (store:AppStore) => store.user );
    const { userTeam } = useSelector( (store:AppStore) => store.teams );


  return (
    <TeamCardsContainer >
      <TeamCardsTitle >{`${username}'s`} <Box component='span' color='white' pl={1} >Team</Box></TeamCardsTitle>
      <Grid container rowGap={1}  gridTemplateRows='repeat(1, minmax(0, 1fr))' py={1} px={1} width="100%" height='80%'  alignItems='center'  margin='auto' >
      {
          userTeam.map( pokemon => <PokemonGridCard key={uuidv4()} {...pokemon}/>)
      }
      </Grid>
      <Button fullWidth variant='contained' color="warning"  > Battle</Button>
    </TeamCardsContainer>
  )
}
export default PlayerTeam


