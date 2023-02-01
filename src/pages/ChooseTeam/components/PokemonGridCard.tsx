import { Box, Button, Grid, LinearProgress, Stack, Typography } from "@mui/material"
import pokeball  from '../../../assets/pokeball.webp';
import { BouncingContainer, Circle, GridItem } from "../style-components";
import { Pokemon } from '../../../models/';
import { v4 as uuidv4 } from 'uuid';
import { colorTypesList } from "../../../utilities";
import CloseIcon from '@mui/icons-material/Close';
import { removePokemon } from "../../../redux/state/teams";
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from "react-router";
import { AppStore } from '../../../redux/store';

interface IPokemonGridCard {
  pokemon: Pokemon;
  handleUserPokemonChange: (pokemon?: Pokemon) => Promise<void>;
}




const PokemonGridCard = ({pokemon, handleUserPokemonChange }:IPokemonGridCard) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { name, id, attack, defense, speed, health, types, imageSpot, currentHealth } = pokemon;
  const { pause } = useSelector((store:AppStore) => store.game);
  const normalise = (currValue:number) => Math.floor((100*(currValue/pokemon.health)));
  const normalizedHealth = normalise(pokemon.currentHealth);
  const healthBarColors = normalizedHealth > 50 ? 'success' : (normalizedHealth > 20 &&  normalizedHealth <= 50) ? 'warning' : 'error'


  const handleRemove = () =>  dispatch(removePokemon(id));
  
  const isInBattleMode = location.pathname.includes("/battle");

  const handlePokemonChange = ( pokemon:Pokemon) => {
    if( isInBattleMode && pause){
      handleUserPokemonChange(pokemon)
    }
  }

  return (
    <Grid item xs={12}  height="90px"  borderRadius='10px'  >
      {
        pokemon.name.length === 0 ? (
          <GridItem onClick={() => console.log(pokemon)}>
            <Typography width='30%' color='white' py={1} fontWeight={700} fontSize={14} letterSpacing={1}>?</Typography>
            <Box display='flex' flexDirection='column' width='70%' alignItems='center'>
              <Typography color='white' py={1} fontWeight={700} fontSize={14} letterSpacing={1}>EMPTY SPOT</Typography>
              <img src={pokeball} alt="pokeball" style={{ width:"20px"}}/>
            </Box>
            <Circle/>
          </GridItem>
        )
        :
        (
          <GridItem onClick={() => handlePokemonChange(pokemon)}>
            <BouncingContainer>
              <img src={imageSpot} alt="pokeball" style={{ width:"80px", height:'80px'}}/>
            </BouncingContainer>
            <Box display='flex' flexDirection='column' width='70%' height='100%' alignItems='start' ml={5} color="white">
              <Stack direction='row' alignItems='center' justifyContent='space-evenly' width='100%'>
                <Typography color='white' pt={1} fontWeight={700} fontSize={16} letterSpacing={2} textTransform="capitalize" fontFamily='sans-serif' >{name}</Typography>
                <Stack direction='row'  pt={1}>
                  {
                    types?.map( (pokeType:any, index) => (
                        <Box key={uuidv4()} display='flex' flexDirection='row' alignItems='center'>
                        <img src={colorTypesList(types[index]).symbol} alt={`${pokeType} type`} style={{ width:18, height:18, paddingLeft:4}}/>
                        </Box>
                    ))
                  }
                </Stack>
                { !isInBattleMode ? 
                  (
                    <Button onClick={handleRemove} sx={{mb:"-8px", zIndex:200}}>
                      <CloseIcon sx={{background:"red", borderRadius:"50%", color:"white", fontSize:"18px"}}/>
                    </Button>
                  ) : null
                }
              </Stack>
              <Stack direction='row' width="100%" alignItems='center' spacing={1} position='relative' >
                <Typography  fontSize='17px'>HP </Typography>
                <Typography fontFamily='Yrsa' fontSize='17px' position='absolute' left={0} right={0} zIndex={100}>{currentHealth}/{health} </Typography>
                <LinearProgress variant='determinate' color={healthBarColors} value={normalizedHealth} sx={{ width:'80%', height:'15px', borderRadius:'10px'}} />
              </Stack>
              <Stack direction='row' spacing={2} fontFamily='Yrsa' fontSize='15px'>
                <Typography >Atk: {attack} </Typography>
                <Typography >Def: {defense} </Typography>
                <Typography >Speed: {speed} </Typography>
              </Stack>
            </Box>
            <Circle/>
          </GridItem>
        )
      }
      
    </Grid>
  )
}
export default PokemonGridCard