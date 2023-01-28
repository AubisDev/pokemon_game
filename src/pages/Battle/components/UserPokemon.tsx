import { useSelector } from 'react-redux';
import { AppStore } from '../../../redux/store';
import { UserLifeBar, UserPokemonImage } from '../style-components/main';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Box, LinearProgress, Typography, Stack } from '@mui/material';

interface IUserPokemonProps{
    attackMove: boolean;

}

const UserPokemon = ({attackMove}: IUserPokemonProps) => {
    const { userTeam } = useSelector( (store:AppStore) => store.teams);
    


return (
    <>
        {
            attackMove ? 
            (   
                    <UserPokemonImage 
                        src={ userTeam[0].imageBack} 
                        alt={userTeam[0].name} 
                        animate={{
                            translateX:400,
                            translateY: -250
                        }}

                        transition={{
                            duration:0.5
                        }}
                    />
            )
            :
            (
                    <UserPokemonImage src={ userTeam[0].imageBack} alt={userTeam[0].name} />
            )
        }
        <UserLifeBar>
            <Typography textAlign='left' fontSize="24px" letterSpacing={2} px={4} py={1} >Altaria</Typography>
            <>
                <LinearProgress variant='determinate' color='success' value={100}  sx={{ width:'80%', height:'20px', borderRadius:'10px',marginLeft:"50px", border:"4px solid rgba(0,0,0,0.30)", }} />
            </>
            <Typography fontSize="20px" position='absolute' bottom={12} right='15%'>{userTeam[0].health}/{userTeam[0].health}</Typography>
        </UserLifeBar>
    </>
  )
}
export default UserPokemon