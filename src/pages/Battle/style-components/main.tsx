import { styled } from '@mui/system';
import battleBg from '../../../assets/battle_bg.webp';
import { motion } from 'framer-motion';

export const SectionContainer = styled("div")(({theme}) => ({
    backgroundSize: 'cover',
    height:"100vh",
    width:"100vw",
    display:"flex",
    flexDirection:"row",
    background: 'rgba(0,0,0,0.9)',
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
    height:"90%",
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