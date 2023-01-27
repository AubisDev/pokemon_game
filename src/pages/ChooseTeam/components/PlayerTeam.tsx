
import { Box, Button, Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import { AppStore } from '../../../redux/store';
import { TeamCardsContainer, TeamCardsTitle } from "../style-components";
import PokemonGridCard from "./PokemonGridCard";
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router';
import { checkUserTeam } from '../utilities/userTeamChecker';
import useSnackbar from '../../../hooks/useSnackbar';



const PlayerTeam = () => {
    const navigate = useNavigate();
    const { username } = useSelector( (store:AppStore) => store.user );
    const { userTeam } = useSelector( (store:AppStore) => store.teams );
    const {errorSB, throwErrorSnackbar, ErrorSnackbar } = useSnackbar();

    const handleClick = () => {
      let isTeamComplete = checkUserTeam(userTeam);
      if( isTeamComplete ) navigate('/battle', {replace:true});
      else throwErrorSnackbar();
    }

  return (
    <TeamCardsContainer >
      <TeamCardsTitle >{`${username}'s`} <Box component='span' color='white' pl={1} >Team</Box></TeamCardsTitle>
      <Grid container rowGap={1}  gridTemplateRows='repeat(1, minmax(0, 1fr))' py={1} px={1} width="100%" height='80%'  alignItems='center'  margin='auto' >
      {
          userTeam.map( pokemon => <PokemonGridCard key={uuidv4()} {...pokemon}/>)
      }
      </Grid>
      <Button 
        fullWidth 
        variant='contained' 
        color="warning" 
        sx={{ paddingY:1}} 
        onClick={handleClick}
      > Ready to battle </Button>

      {
        errorSB ? ErrorSnackbar("Team is not complete, must select 6 pokemons") : null
      }
    </TeamCardsContainer>
  )
}
export default PlayerTeam




