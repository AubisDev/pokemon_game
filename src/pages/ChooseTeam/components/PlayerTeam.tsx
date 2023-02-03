
import { Box, Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { AppStore } from '../../../redux/store';
import { TeamCardsContainer, TeamCardsTitle, GridContainer } from "../style-components";
import PokemonGridCard from "./PokemonGridCard";
import { v4 as uuidv4 } from 'uuid';
import { useLocation, useNavigate } from 'react-router';
import { checkUserTeam } from '../utilities/userTeamChecker';
import useSnackbar from '../../../hooks/useSnackbar';

interface IPlayerTeam {
  setOpenDifficultyMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const PlayerTeam = ({setOpenDifficultyMenu}:IPlayerTeam) => {
    const dispatch = useDispatch();
    const {errorSB, throwErrorSnackbar, ErrorSnackbar } = useSnackbar();
    const navigate = useNavigate();
    const location = useLocation();
    const { username } = useSelector( (store:AppStore) => store.user );
    const { userTeam } = useSelector( (store:AppStore) => store.teams );
    const isInBattleMode = location.pathname.includes("/battle");

    const handleReadyClick = async () => {
      let isTeamComplete = checkUserTeam(userTeam);
      if( isTeamComplete ) setOpenDifficultyMenu(true);
      else  throwErrorSnackbar();
    }

    return (
      <TeamCardsContainer>
        <TeamCardsTitle >{`${username}'s`} <Box component='span' color='white' pl={1} >Team</Box></TeamCardsTitle>
        <GridContainer container py={1} px={1} rowGap={1} >
        {
          userTeam.map( pokemon => <PokemonGridCard key={uuidv4()} pokemon={pokemon} />)
        }
        </GridContainer>
        { isInBattleMode ? null : 
          <Button 
            fullWidth 
            variant='contained' 
            color="warning" 
            sx={{ paddingY:1, fontFamily:'fantasy'}} 
            onClick={handleReadyClick}
          
          > Ready to battle </Button>
        }

        {
          errorSB ? ErrorSnackbar("Team is not complete, must select 6 pokemons",errorSB) : null
        }
        
      </TeamCardsContainer>
    )
}
export default PlayerTeam




