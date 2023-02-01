
import { Box, Button, Grid } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { AppStore } from '../../../redux/store';
import { TeamCardsContainer, TeamCardsTitle } from "../style-components";
import PokemonGridCard from "./PokemonGridCard";
import { v4 as uuidv4 } from 'uuid';
import { useLocation, useNavigate } from 'react-router';
import { checkUserTeam } from '../utilities/userTeamChecker';
import useSnackbar from '../../../hooks/useSnackbar';
import { fetchBotTeamService } from '../services/fetchForBotTeam';
import { setBotTeam } from '../../../redux/state/teams';
import { setStartersPokemons } from '../../../redux/state/game';
import { BotPokemonDataAdapter, PokemonDataAdapter } from '../../../adapters/PokemonData.adapter';
import { Pokemon } from '../../../models';


interface IPlayerTeam {
  handleUserPokemonChange: (pokemon?: Pokemon) => Promise<void>;
}

const PlayerTeam = ({handleUserPokemonChange}:IPlayerTeam) => {
    const dispatch = useDispatch();
    const {errorSB, throwErrorSnackbar, ErrorSnackbar } = useSnackbar();
    const navigate = useNavigate();
    const location = useLocation();
    const { username } = useSelector( (store:AppStore) => store.user );
    const { userTeam } = useSelector( (store:AppStore) => store.teams );
    const isInBattleMode = location.pathname.includes("/battle");

    const handleClick = async () => {
      let isTeamComplete = checkUserTeam(userTeam);
      if( isTeamComplete ) {
        
        let botTeam:any = await fetchBotTeamService();
        let adaptedBotTeamData = botTeam.map( (pokemon:Pokemon) => BotPokemonDataAdapter(pokemon));
        dispatch( setBotTeam(adaptedBotTeamData));
        dispatch( setStartersPokemons({
          pause: false,
          userPokemon: userTeam[0],
          botPokemon: adaptedBotTeamData[0]
        }))
        setTimeout(() => {
          navigate('/battle', {replace:true})
        }, 3000);
      }
      else {
        throwErrorSnackbar();
      }
    }

    return (
      <TeamCardsContainer >
        <TeamCardsTitle >{`${username}'s`} <Box component='span' color='white' pl={1} >Team</Box></TeamCardsTitle>
        <Grid container rowGap={1}  gridTemplateRows='repeat(1, minmax(0, 1fr))' py={1} px={1} width="100%" height='80%'  alignItems='center'  margin='auto' >
        {
            userTeam.map( pokemon => (
                <PokemonGridCard key={uuidv4()} pokemon={pokemon} handleUserPokemonChange={handleUserPokemonChange}/>
            ))
        }
        </Grid>
        { isInBattleMode ? null : 
          <Button 
            fullWidth 
            variant='contained' 
            color="warning" 
            sx={{ paddingY:1, fontFamily:'fantasy'}} 
            onClick={handleClick}
          
          > Ready to battle </Button>
        }

        {
          errorSB ? ErrorSnackbar("Team is not complete, must select 6 pokemons") : null
        }
      </TeamCardsContainer>
    )
}
export default PlayerTeam




