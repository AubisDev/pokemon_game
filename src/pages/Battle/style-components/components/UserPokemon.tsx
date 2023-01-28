import { useSelector } from 'react-redux';
import { AppStore } from '../../../../redux/store';
import { UserPokemonImage } from '../main';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Box } from '@mui/material';

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
                            translateY: -200
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
    </>
  )
}
export default UserPokemon