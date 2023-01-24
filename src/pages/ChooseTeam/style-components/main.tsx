import { styled } from "@mui/system";
import team_sel_bg from '../../../assets/team-sel-bg.webp';


export const TeamSelectionContainer = styled('div')(({ theme }) =>({
    width: '100vw',
    height: '100vh',
    backgroundImage: `url(${team_sel_bg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    position: 'relative',

    [theme.breakpoints.down("md")]:{
        height:"auto"
    }
}))



export const TeamCardsContainer  = styled('div')(({ theme }) =>({
    width: '25%',
    height: 'auto',
    background: 'rgba(0,0,0,0.85)',
    borderRadius: 30,
    border: '2px solid blue'
}))


export const TeamCardsTitle = styled('div')(({ theme }) =>({ 
    fontFamily: 'Yrsa',
    fontWeight: 600,
    fontSize: 24,
    color: 'orange',
    textAlign: 'center',
    display:"flex",
    flexDirection: 'row',
    justifyContent:"center",
    alignItems:"center",

}))


export const GridItem = styled('div')(({ theme }) => ({
    textAlign:'center',
    margin:'auto',
    display:'flex',
    alignItems:'center',
    height:"100%",
    flexDirection:'row',
    justifyContent:'space-evenly',
    background:"rgba(8,81,122,.85)",
    clipPath: "polygon( 0 20%, 10% 0, 90% 0, 100% 20%, 100% 80%, 90% 100%, 10% 100%, 0% 80%, 0% 10%)",
    border:"2px solid blue",
    position:"relative"
    
}))

export const Circle = styled('div')(({ theme }) => ({ 
    height: '250%',
    width: '100%',
    background: 'rgba(215,215,215,.85)',
    position: 'absolute',
    zIndex: -1,
    left: '-70%',
    borderRadius:"50%"
}))

// Search Bar 

export const SearchBarContainer = styled('div')(({ theme }) => ({ 
    width:'auto',
    height: '10vh',
    padding: '1em 0',
    margin: 'auto',
    background: 'transparent',
    color: "white",
    borderRadius: 5,

}))




export const PokemonSection =  styled('div')(({ theme }) => ({ 
    height: '85.5vh',
    width: '100%',
    display:"flex",
    flexDirection:"row",
    
}))

export const PokemonData =  styled('div')(({ theme }) => ({ 
    height: '100%',
    width: '300px',
    display:"flex",
    flexDirection:"column",
    color:"white",
    alignItems:"center"
}))


export const CircleSmall =  styled('div')(({ theme }) => ({
    width: 500,
    height: 500,
    position: 'relative',

    "&:before":{
        content: '""',
        position: 'absolute',
        top:"100px",
        right:"100px",
        left:"100px",
        bottom:"100px",
        border: '20px solid #fff',
        borderRadius:"50%",
        boxShadow: "0 0 60px #0f0, inset 0 0 50px #0f0",
        WebkitBoxReflect: "below 10px linear-gradient(transparent, transparent, #0002)",
        animation: 'animate 5s linear infinite'
    },

    "@keyframes animate":{
        '0%':{
            boxShadow:" 0 0 50px #0f0, inset 0 0 50px #0f0",
            filter: 'hue-rotate(0deg)'
        },
        '20%':{
            boxShadow:" 0 0 60px #0f0, inset 0 0 60px #0f0"
        },
        '40%':{
            boxShadow:" 0 0 40px #0f0, inset 0 0 40px #0f0"
        },
        '60%':{
            boxShadow:" 0 0 80px #0f0, inset 0 0 80px #0f0"
        },
        '80%':{
            boxShadow:" 0 0 100px #0f0, inset 0 0 100px #0f0"
        },
        '100%':{
            boxShadow:" 0 0 50px #0f0, inset 0 0 50px #0f0",
            filter: 'hue-rotate(360deg)'
        }
    }
   
}))


export const PokemonName =  styled('div')(({ theme }) => ({ 
    
    backgroundSize: '200% auto',
    color:'#fff',
    backgroundClip: 'text',
    textFillColor: 'transparent',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    animation: 'textclip 8s linear infinite',
    display: 'inline-block',
    fontSize: '48px',
    textTransform: 'capitalize',
    alignText:"center",

    "@keyframes textclip":{
        "to":{
            backgroundPosition: "200% center"
        }
    }
}))

