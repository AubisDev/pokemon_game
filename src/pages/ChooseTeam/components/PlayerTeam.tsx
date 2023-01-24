import { Box, Grid, Typography } from "@mui/material"
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
        <Grid container  gridTemplateColumns='repeat(2, minmax(0, 1fr))' p={2} width="100%" height="90%" alignItems='center' justifyContent='center' margin='auto' >
        {
            userTeam.map( pokemon => <PokemonGridCard {...pokemon}/>)
        }
        </Grid>
    </TeamCardsContainer>
  )
}
export default PlayerTeam