import { Box, Button, Grid, LinearProgress, Stack, Typography } from "@mui/material"
import pokeball  from '../../../assets/pokeball.webp';
import { BouncingContainer, GridItem, WhiteBgCircle } from "../style-components";
import { Pokemon } from '../../../models/';
import { v4 as uuidv4 } from 'uuid';
import { colorTypesList } from "../../../utilities";
import CloseIcon from '@mui/icons-material/Close';
import { removePokemon } from "../../../redux/state/teams";
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from "react-router";
import { AppStore } from '../../../redux/store';
import { RedBgCircle } from '../style-components/main';

interface IPokemonGridCard {
  pokemon: Pokemon;
}




const PokemonGridCard = ({pokemon }:IPokemonGridCard) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { name, id, attack, defense, speed, health, types, imageSpot, currentHealth, status } = pokemon;
  const { pause } = useSelector((store:AppStore) => store.game);
  const normalise = (currValue:number) => Math.floor((100*(currValue/pokemon.health)));
  const normalizedHealth = normalise(pokemon.currentHealth);
  const healthBarColors = normalizedHealth > 50 ? 'success' : (normalizedHealth > 20 &&  normalizedHealth <= 50) ? 'warning' : 'error'


  const handleRemove = () =>  dispatch(removePokemon(id));
  
  const isInBattleMode = location.pathname.includes("/battle");


  return (
    <Grid item xs={12} sm={6} md={12}  height="90px"  borderRadius='10px'  >
      {
        pokemon.name.length === 0 ? (
          <GridItem>
            <Typography width='30%' color='white' py={1} fontWeight={700} fontSize={14} letterSpacing={1}>?</Typography>
            <Box display='flex' flexDirection='column' width='70%' alignItems='center'>
              <Typography color='white' py={1} fontWeight={700} fontSize={14} letterSpacing={1}>EMPTY SPOT</Typography>
              <img src={pokeball} alt="pokeball" style={{ width:"20px"}}/>
            </Box>
            { status === 'alive' ? <WhiteBgCircle /> :  <RedBgCircle/>}
            
          </GridItem>
        )
        :
        (
          <GridItem >
            <BouncingContainer>
              <img src={imageSpot} alt="pokeball" style={{ width:"100%", height:'100%', position:'absolute', left: 0,right: 0 ,top: 0 ,bottom: 0 ,margin:'auto',}}/>
            </BouncingContainer>
            <Box display='flex' flexDirection='column' width='70%' height='100%' alignItems='start' ml={{xs:3,sm:5}} color="white">
              <Stack direction='row' alignItems='center' justifyContent='space-evenly' width='100%'>
                {
                  status === 'alive'
                  ? <Typography component='p' color='white' pt={1} fontWeight={700} fontSize={{xs:14, sm:16}} letterSpacing={{xs:1, sm:2}} textTransform="capitalize" fontFamily='sans-serif' >{name}</Typography>
                  : <Typography component='s' color='white' pt={1} fontWeight={700} fontSize={{xs:14, sm:16}} letterSpacing={{xs:1, sm:2}} textTransform="capitalize" fontFamily='sans-serif' >{name}</Typography>

                }
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
              <Stack direction='row' width="100%" alignItems='center' spacing={1} py={{xs:0.5,sm:0}} position='relative' >
               {
                  status === 'alive'
                  ? 
                  (
                    <>
                      <Typography  fontSize={{xs:'15px', sm:'17px'}}>HP </Typography>
                      <Typography fontFamily='Yrsa' fontSize='17px' position='absolute' left={0} right={0} zIndex={100}>{currentHealth}/{health} </Typography>
                      <LinearProgress variant='determinate' color={healthBarColors} value={normalizedHealth} sx={{ width:'80%', height:'15px', borderRadius:'10px'}} />
                    </>
                  )
                  :
                  <Typography fontSize='17px' color="white" width='90%' borderRadius='10px' sx={{ background:"#7b151e"}}>Unable to fight </Typography>
                }
              </Stack>
              <Stack direction='row' spacing={{xs:1,sm:2}} fontFamily='Yrsa' >
                <Typography fontSize={{xs:'14px', sm:'15px'}}>Atk: {attack} </Typography>
                <Typography fontSize={{xs:'14px', sm:'15px'}}>Def: {defense} </Typography>
                <Typography fontSize={{xs:'14px', sm:'15px'}}>Speed: {speed} </Typography>
              </Stack>
            </Box>
            { status === 'alive' ? <WhiteBgCircle /> :  <RedBgCircle/>}
          </GridItem>
        )
      }
      
    </Grid>
  )
}
export default PokemonGridCard