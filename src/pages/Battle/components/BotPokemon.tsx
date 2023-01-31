import { useSelector } from 'react-redux';
import { AppStore } from '../../../redux/store';
import {  BotLifeBar, BotPokemonImage } from '../style-components/main';
import { motion } from 'framer-motion';
import { LinearProgress, Typography } from '@mui/material';

interface IBotPokemonProps{
    botAttackMove: boolean;
}

const BotPokemon = ({botAttackMove}:IBotPokemonProps) => {
    const { botPokemon } = useSelector( (store:AppStore) => store.game);
    const normalise = (currValue:number) => (100*(currValue/botPokemon.health));
  return (
    <>
    {
        botAttackMove ? 
        (   
                <BotPokemonImage 
                    src={ botPokemon.imageSpot} 
                    alt={botPokemon.name} 
                    animate={{
                        translateX:-400,
                        translateY: 250
                    }}

                    transition={{
                        duration:0.5
                    }}
                />
        )
        :
        (
                <BotPokemonImage src={ botPokemon.imageSpot} alt={botPokemon.name} />
        )
    }

        <BotLifeBar>
            <Typography textAlign='left' fontSize="24px" letterSpacing={2} px={4} py={1} textTransform='capitalize'>{botPokemon.name}</Typography>
            <LinearProgress variant='determinate' color='success' value={normalise(botPokemon.currentHealth)} sx={{ width:'80%', height:'20px', borderRadius:'10px',marginLeft:"50px", border:"4px solid rgba(0,0,0,0.30)", boxShadow:'2px 4px 2px rgba(0,0,0,0.1)' }} />
            <Typography fontSize="20px" position='absolute' bottom={12} right='15%'>{botPokemon.currentHealth}/{botPokemon.health}</Typography>
        </BotLifeBar>
    </>
  )
}
export default BotPokemon