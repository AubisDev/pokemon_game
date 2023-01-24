
import { Box, Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import { AppStore } from '../../../redux/store';
import { TeamCardsContainer, TeamCardsTitle } from "../style-components/main";
import PokemonGridCard from "./PokemonGridCard";




const PlayerTeam = () => {

    const { username } = useSelector( (store:AppStore) => store.user );
    const { userTeam } = useSelector( (store:AppStore) => store.teams );


  return (
    <TeamCardsContainer >
      <TeamCardsTitle >{`${username}'s`} <Box component='div' color='white' pl={1}>Team</Box></TeamCardsTitle>
      <Grid container rowGap={1}  gridTemplateRows='repeat(1, minmax(0, 1fr))' py={4} px={1} width="100%"  alignItems='center'  margin='auto' >
      {
          userTeam.map( pokemon => <PokemonGridCard {...pokemon}/>)
      }
      </Grid>
    </TeamCardsContainer>
  )
}
export default PlayerTeam


