import { useSelector } from 'react-redux';
import { AppStore } from '../../../redux/store';
import {  BotLifeBar, BotPokemonImage } from '../style-components/main';
import { motion } from 'framer-motion';
import { LinearProgress, Typography } from '@mui/material';
import pokeball from '../../../assets/pokeball.webp';
import { useMediaQuery } from 'react-responsive';
interface IBotPokemonProps{
    botAttackMove: boolean;
    throwBotPokeball: boolean;
}

const BotPokemon = ({botAttackMove, throwBotPokeball}:IBotPokemonProps) => {
    const { botPokemon } = useSelector( (store:AppStore) => store.game);
    const normalise = (currValue:number) => (100*(currValue/botPokemon.health));
    const normalizedHealth = normalise(botPokemon.currentHealth);
    const healthBarColors = normalizedHealth > 50 ? 'success' : (normalizedHealth > 20 &&  normalizedHealth <= 50) ? 'warning' : 'error'
    const isMobile = useMediaQuery({ query: '(max-width: 600px)' });

  return (
    <>
    {   
        throwBotPokeball ?
        (
            <motion.img 
            animate={{
                translateX: isMobile ? [80,-25] : [75,-75],
                translateY: isMobile ? [0,-35,60] : [0,-25,75],
                rotate:[0,-360]
            }}
            transition={{ ease:'easeInOut', duration:1.5}}
            src={ pokeball} 
            alt={botPokemon.name} 
            style={{ position:"absolute", width:"25px", top:'10%', right:"20%"}}/>
        )
        :
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
            <BotPokemonImage src={botPokemon.imageSpot} alt={botPokemon.name} />
        )
    }

        <BotLifeBar>
            <Typography textAlign='left' fontSize={{xs:'16px',sm:"24px"}} letterSpacing={{xs:1, sm:2}} px={{xs:3,sm:3}} py={{xs:0.5,sm:1}} textTransform='capitalize'>{botPokemon.name}</Typography>
            <LinearProgress variant='determinate' color={healthBarColors } value={normalizedHealth}  sx={{ width:{xs:'70%',sm:'80%'}, height:{xs:"9px",sm:'20px'}, borderRadius:'10px',marginLeft:{xs:'25px',sm:"50px"}, border:"4px solid rgba(0,0,0,0.30)", boxShadow:'2px 4px 2px rgba(0,0,0,0.1)' }} />
        </BotLifeBar>
    </>
  )
}
export default BotPokemon