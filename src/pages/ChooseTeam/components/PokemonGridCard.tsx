import { Box, Button, Grid, LinearProgress, Stack, Typography } from "@mui/material"
import pokeball  from '../../../assets/pokeball.webp';
import { BouncingContainer, Circle, GridItem } from "../style-components";
import { Pokemon } from '../../../models/';
import { v4 as uuidv4 } from 'uuid';
import { colorTypesList } from "../../../utilities";
import CloseIcon from '@mui/icons-material/Close';
import RemoveIcon from '@mui/icons-material/Remove';

const PokemonGridCard = (pokemon: Pokemon) => {
  const { name, attack, defense, speed, health, types, imageSpot } = pokemon;
  return (
    <Grid item xs={12}  height="90px"  borderRadius='10px'>
      {
        pokemon.name.length === 0 ? (
          <GridItem>
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
          <GridItem>
            <BouncingContainer>
              <img src={imageSpot} alt="pokeball" style={{ width:"80px", height:'80px'}}/>
            </BouncingContainer>
            <Box display='flex' flexDirection='column' width='70%' height='100%' alignItems='start' ml={5} color="white">
              <Stack direction='row' alignItems='center' justifyContent='space-between' width='100%'>
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
                <Button sx={{mb:"-8px"}}>
                  <RemoveIcon sx={{background:"red", borderRadius:"50%", color:"white", fontSize:"18px"}}/>
                </Button>
              </Stack>
              <Stack direction='row' width="100%" alignItems='center' spacing={1} position='relative' >
                <Typography  fontSize='17px'>HP </Typography>
                <Typography fontFamily='Yrsa' fontSize='17px' position='absolute' left={0} right={0} zIndex={100}>{health}/{health} </Typography>
                <LinearProgress variant='determinate' color='success' value={100} sx={{ width:'80%', height:'15px', borderRadius:'10px'}} />
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