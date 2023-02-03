import { Box, Button, CircularProgress, Stack, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { AppStore } from '../../../redux/store';
import { colorTypesList, TypeData } from '../../../utilities';
import { charDataEmptyValues } from '../utilities';
import PokemonSearchBar from './PokemonSearchBar';
import RadarChartData from './RadarChartData';
import PokemonImage from './PokemonImage';
import { CharDataAdapter, ChartData } from '../adapters';
import Stats from './Stats';
import { FindPokemonSectionContainer, InformationContainer, MainSectionContainer, PokemonData } from '../style-components';
import { addPokemon, setBotTeam } from '../../../redux/state/teams';
import PlayerTeam from './PlayerTeam';
import { useState } from 'react';
import { setStartersPokemons } from '../../../redux/state/game';
import { Pokemon } from '../../../models';
import { BotPokemonDataAdapter } from '../../../adapters';
import { useNavigate } from 'react-router-dom';
import { fetchRandomTeamService, fetchBossTeamService, fetchHardBossTeamService } from '../services';



const PokemonInformation = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState<boolean>(false);
    const [openDifficultyMenu, setOpenDifficultyMenu] = useState<boolean>(false);
    const { name, id, imageFront, imageSpot, imageBack, health, attack, defense, speed, types, status, currentHealth } = useSelector( (store: AppStore) => store.search);
    const { userTeam } = useSelector( (store: AppStore) => store.teams);
    const typeInformation: TypeData = types ? colorTypesList(types[0]) : colorTypesList('none');
    const chartData:ChartData[] = attack ? CharDataAdapter({attack, defense, health,speed}) : charDataEmptyValues();
    const foundPokemon = attack ? true : false;

    const handleClick = () => {
      const newState = [...userTeam];
      let itsAlreadyInTeam = userTeam.some( elem => elem.id === id);
      if ( !itsAlreadyInTeam ){
        let emptyIndex = newState.findIndex( elem => elem.name === '');
        if( emptyIndex !== -1) {
          let pokemonData = { name, id, attack, defense, speed, health, types, status, imageSpot, imageBack, imageFront, currentHealth };
          dispatch( addPokemon({
            pokemonData,
            index: emptyIndex
          }));
        }
      }
    }

 
    

    const handleDifficulty = async (option:string) => {
      setLoading(true)
      let adaptedBotTeamData:Pokemon[] = [];
      if( option === 'random'){
        let botTeam:any = await fetchRandomTeamService();
        adaptedBotTeamData = botTeam.map( (pokemon:Pokemon) => BotPokemonDataAdapter(pokemon));
        
      }
     else if( option === 'boss'){
        let botTeam:any = await fetchBossTeamService();
        adaptedBotTeamData = botTeam.map( (pokemon:Pokemon) => BotPokemonDataAdapter(pokemon));
     }
     else{
        let botTeam:any = await fetchHardBossTeamService();
        adaptedBotTeamData = botTeam.map( (pokemon:Pokemon) => BotPokemonDataAdapter(pokemon));
     }
      dispatch( setBotTeam(adaptedBotTeamData));
      dispatch( setStartersPokemons({
        pause: false,
        userPokemon: userTeam[0],
        botPokemon: adaptedBotTeamData[0]
      }))
      setTimeout(() => {
        setLoading(false);
        navigate('/battle', {replace:true})
      }, 3000);
    }

    return (
    <MainSectionContainer>
      <FindPokemonSectionContainer>
        <PokemonSearchBar/>
            {foundPokemon ? (
                <>
                  <Stack>
                    <InformationContainer>
                      <PokemonData >
                        <Stats stats={{attack, defense, health, speed}} types={types} color={typeInformation.bgColor}/>
                        <RadarChartData data={chartData}  color={typeInformation.bgColor}/>
                      </PokemonData>
                      <PokemonImage color={typeInformation.bgColor} image={imageFront} name={name} gradientColor={typeInformation.bgGradient} />
                    </InformationContainer>
                  </Stack>
                  <Button 
                    onClick={ handleClick} 
                    fullWidth={false} 
                    variant="contained" 
                    sx={{ width:'200px', marginX:"auto" ,position:{xs:'relative',sm:'absolute'}, marginBottom:{xs:'3em',sm:0}, bottom:15, left:0, right:"0"}} 
                  >
                    Add to my team
                  </Button>
                </>
              )
              : null
            }
        </FindPokemonSectionContainer>
      <PlayerTeam  setOpenDifficultyMenu={setOpenDifficultyMenu}/>
      {
        openDifficultyMenu ? 
        (
          <Box width='100%' height='100%' position='absolute' sx={{background:"rgba(0,0,0,0.75)"}}>
            <Box height="225px" width="275px" color='white' border='2px solid orange' display='flex' alignItems='center' justifyContent='center' flexDirection='column'  className='center_abs_item' sx={{ background: 'rgba(0,0,0,0.85)', borderRadius:"20px"}} >
            <Typography textAlign='center' py={2} fontSize={20}>
              {loading ? 'Calling trainer' : 'Select your enemy'}
            </Typography>
            {
              loading ? <CircularProgress />
                      : <>
                          <Button onClick={() => handleDifficulty('random')} variant='contained' color='success' sx={{ width:'120px'}}>Random</Button>
                          <Button onClick={() => handleDifficulty('boss')} variant='contained' color='secondary' sx={{ my:1, width:'120px'}}>Boss</Button>
                          <Button onClick={() => handleDifficulty('hard_boss')} variant='contained' color='error' sx={{ width:'120px'}}>Hard Boss</Button>
                        </>
            }
          </Box>
          </Box>
        ) : null
      }
    </MainSectionContainer>
  )
}
export default PokemonInformation
