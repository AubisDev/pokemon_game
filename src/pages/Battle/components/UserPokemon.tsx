import { useSelector } from 'react-redux';
import { AppStore } from '../../../redux/store';
import { UserLifeBar, UserPokemonImage } from '../style-components/main';
import { motion } from 'framer-motion';
import { LinearProgress, Typography,  } from '@mui/material';
import pokeball from '../../../assets/pokeball.webp';
import { useMediaQuery } from 'react-responsive';


interface IUserPokemonProps{
    attackMove: boolean;
    throwUserPokeball: boolean
}

const UserPokemon = ({attackMove, throwUserPokeball}: IUserPokemonProps) => {
    const { userPokemon } = useSelector( (store:AppStore) => store.game);
    const normalise = (currValue:number) => Math.floor((100*(currValue/userPokemon.health)));
    const normalizedHealth = normalise(userPokemon.currentHealth);
    const healthBarColors = normalizedHealth > 50 ? 'success' : (normalizedHealth > 20 &&  normalizedHealth <= 50) ? 'warning' : 'error'
    const isMobile = useMediaQuery({ query: '(max-width: 600px)' })
    return (
    <>
        {
            throwUserPokeball ?
            (
                <motion.img 
                animate={{
                    translateX: isMobile ? [-25,50] : [0,150],
                    translateY: isMobile ? [0,-125,-75] : [0,-175,-125],
                    rotate:[0,360]
                }}
                transition={{ ease:'easeInOut', duration:1.5}}
                src={ pokeball} 
                alt={userPokemon.name} 
                style={{ position:"absolute", width:"25px", bottom:'10%', left:"20%"}}/>
            )
            :
            attackMove ? 
            (   
                <UserPokemonImage 
                    src={ userPokemon.imageBack} 
                    alt={userPokemon.name} 
                    animate={{
                        translateX:400,
                        translateY: -250
                    }}

                    transition={{
                        duration:0.5
                    }}
                />
            )
            : <UserPokemonImage src={userPokemon.imageBack} alt={userPokemon.name} />
        }
        <UserLifeBar>
            <Typography textAlign='left' fontSize={{xs:'16px',sm:"24px"}} letterSpacing={{xs:1, sm:2}} px={{xs:3,sm:3}} py={{xs:0.5,sm:1}} textTransform='capitalize'>{userPokemon.name}</Typography>
            <LinearProgress variant='determinate' color={healthBarColors } value={normalizedHealth}  sx={{ width:{xs:'70%',sm:'80%'}, height:{xs:"9px",sm:'20px'}, borderRadius:'10px',marginLeft:{xs:'25px',sm:"50px"}, border:"4px solid rgba(0,0,0,0.30)", boxShadow:'2px 4px 2px rgba(0,0,0,0.1)' }} />
            <Typography fontSize={{xs:'12px',sm:"20px"}} position='absolute' bottom={{xs:0,sm:12}} right='15%'>{userPokemon.currentHealth}/{userPokemon.health}</Typography>
        </UserLifeBar>


    </>
  )
}
export default UserPokemon

