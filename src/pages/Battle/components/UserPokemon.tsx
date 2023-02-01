import { useSelector } from 'react-redux';
import { AppStore } from '../../../redux/store';
import { UserLifeBar, UserPokemonImage, BotLifeBar } from '../style-components/main';
import { motion } from 'framer-motion';
import { Box, LinearProgress, Typography, Stack } from '@mui/material';

interface IUserPokemonProps{
    attackMove: boolean;

}

const UserPokemon = ({attackMove}: IUserPokemonProps) => {
    const { userPokemon } = useSelector( (store:AppStore) => store.game);
    const normalise = (currValue:number) => (100*(currValue/userPokemon.health));
    const normalizedHealth = normalise(userPokemon.currentHealth);
    const healthBarColors = normalizedHealth > 50 ? 'success' : (normalizedHealth > 20 &&  normalizedHealth <= 50) ? 'warning' : 'error'

    return (
    <>
        {
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
            : <UserPokemonImage src={ userPokemon.imageBack} alt={userPokemon.name} />

        }
        <UserLifeBar>
            <Typography textAlign='left' fontSize="24px" letterSpacing={2} px={4} py={1} textTransform='capitalize'>{userPokemon.name}</Typography>
            <LinearProgress variant='determinate' color={healthBarColors } value={normalizedHealth}  sx={{ width:'80%', height:'20px', borderRadius:'10px',marginLeft:"50px", border:"4px solid rgba(0,0,0,0.30)", boxShadow:'2px 4px 2px rgba(0,0,0,0.1)' }} />
            <Typography fontSize="20px" position='absolute' bottom={12} right='15%'>{userPokemon.currentHealth}/{userPokemon.health}</Typography>
        </UserLifeBar>


    </>
  )
}
export default UserPokemon