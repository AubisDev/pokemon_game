import { styled } from '@mui/system';
import battleBg from '../../../assets/battle_bg.webp';
import { motion } from 'framer-motion';
import { Box } from '@mui/material';

export const SectionContainer = styled("div")(({theme}) => ({
    backgroundSize: 'cover',
    height:"100vh",
    width:"100vw",
    display:"flex",
    flexDirection:"row",
    background: 'rgba(0,0,0,0.9)',
    position:"relative"
}))

export const BattleSectionContainer = styled("div")(({theme}) => ({ 
    height:"80%",
    width:"100%",
    backgroundImage: `url(${battleBg})`,
    backgroundSize:"cover",
    position: 'relative',

    
}))

export const ActionsSection = styled("div")(({theme}) => ({ 
    height:"20%",
    width:"100%",
    position:"relative",
    border:'1px solid darkorange',
    background:"rgba(0,0,0,.6)"
}))

export const InnerContainerBorder = styled("div")(({theme}) => ({  
    width:"98%",
    height:"85%",
    border:"4px solid darkorange",
    background:"linear-gradient( #21314b, #21314b,#21314b ) padding-box, blue",
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-evenly",
}))

export const PixelatedButton = styled("button")(({theme}) => ({ 
    fontSize:"40px",
    height:"90%",
    padding:"0 1.5em",
    marginLeft:"0.5em",
    fontFamily:"VT323",
    borderRadius:"20px",
    border:"2px solid white",
    boxShadow:"0px 2px 5px rgba(0,0,0,1)",
    color:"white",
    cursor:"pointer",
    letterSpacing:"3px"
}))


export const UserPokemonImage  = styled(motion.img)(({theme}) => ({ 
    width: '350px',
    height: '350px',
    position: 'absolute',
    bottom:'-8%',
    left: '20%'
}))

export const BotPokemonImage  = styled(motion.img)(({theme}) => ({ 
    width: '250x',
    height: '250px',
    position: 'absolute',
    top:'15%',
    right: '15%'
}))

export const UserLifeBar = styled(Box)(({theme}) => ({ 
    width: '40%',
    height:"125px",
    background:"rgba(251,244,216,0.85)",
    position: 'absolute',
    bottom:'5%',
    right: '5%',
    borderRadius: '30px 10px 30px 10px',
    boxShadow:"10px 10px 15px rgba(0,0,0,1)",
    border: '4px groove rgba(0,0,0,.75)',
    display:"flex",
    alignItems:"start",
    flexDirection:"column"
}))

export const BotLifeBar = styled(Box)(({theme}) => ({ 
    width: '40%',
    height:"125px",
    background:"rgba(251,244,216,0.85)",
    position: 'absolute',
    top:'7%',
    left: '5%',
    borderRadius: '30px 10px 30px 10px',
    boxShadow:"10px 10px 15px rgba(0,0,0,1)",
    border: '4px groove rgba(0,0,0,.75)',
    display:"flex",
    alignItems:"start",
    flexDirection:"column"
}))

