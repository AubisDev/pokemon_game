import { styled } from "@mui/system";
import team_sel_bg from '../../../assets/team-sel-bg.webp';
import { Stack, Box, Typography, Grid } from '@mui/material';
import { RadarChart } from "recharts";



export const MainSectionContainer = styled('div')(({ theme }) =>({
    height:'100vh', 
    display:'flex', 
    flexDirection:'row', 
    position:'relative',
    width:'100vw',  
    overflow:'hidden',
    background:'rgba(0,0,0,0.90)', 

    [theme.breakpoints.down("md")]:{
        height:"auto",
        overflow:'auto', 
        flexDirection:'column', 
        overflowX:'hidden', 
    }
}))


export const GridContainer = styled(Grid)(({ theme }) =>({
    gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
    width:"100%",
    height:"80%",
    alignitems:"center",
    margin:"auto",


    [theme.breakpoints.down("md")]:{
        gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
        height:"auto",
    }
}))

export const FindPokemonSectionContainer = styled('div')(({ theme }) =>({
    display:'flex', 
    flexDirection:'column', 
    width:'75%',  

    [theme.breakpoints.down("md")]:{
        width:"100%"
    }
}))

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
    height: '100%',
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    borderLeft:'1px solid rgba(113,115,115,0.25)',
    position:"relative",

    [theme.breakpoints.down("md")]:{
        width: '100%',
    }
}))


export const TeamCardsTitle = styled('div')(({ theme }) =>({ 
    fontFamily: 'Yrsa',
    fontWeight: 600,
    fontSize: 24,
    color: 'orange',
    textAlign: 'center',
    display:"flex",
    flexDirection: 'row',
    position:"absolute",
    top:"5%",

    [theme.breakpoints.down("md")]:{
        position: 'relative',
        textAlign:"center",
        fontSize: 26,
        paddingTop: '8px',
        borderTop: '1px solid rgba(255,255,255,0.25)'
    }
}))


export const BouncingContainer = styled('div')(({ theme }) => ({ 
    width: '30%',
    height:"100px",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    animation: 'bouncer 0.25 linear infinite' ,
    transformOrigin:"bottom",
    position:"relative",

    [theme.breakpoints.down("md")]:{
        width: '100px',
        height: '80px',
    }


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
    border:"2px solid orange",
    position:"relative"
    
}))

export const WhiteBgCircle = styled('div')(({ theme }) => ({ 
    height: '250%',
    width: '100%',
    background: 'rgba(215,215,215,.85)',
    position: 'absolute',
    zIndex: -1,
    left: '-70%',
    borderRadius:"50%",
    border:"2px solid orange"
}))

export const RedBgCircle = styled('div')(({ theme }) => ({ 
    height: '250%',
    width: '100%',
    background: 'rgba(123,21,30,.85)',
    position: 'absolute',
    zIndex: -1,
    left: '-70%',
    borderRadius:"50%",
    border:"2px solid orange"
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

    [theme.breakpoints.down("md")]:{
        height: 'auto',
   },

}))

export const Form = styled('form')(({ theme }) => ({ 
    display:"flex", 
    flexDirection:"row", 
    padding:0, 
    margin:0, 
    alignItems:'center', 
    justifyContent:'center',

    [theme.breakpoints.down("md")]:{
         flexDirection:"column", 
    },

}))


export const InformationContainer =  styled('div')(({ theme }) => ({ 
    height: '85.5vh',
    width: '100%',
    display:"flex",
    flexDirection:"row",

    [theme.breakpoints.down("md")]:{
        flexDirection:"column-reverse",
        height:"auto"
    },
    
}))

export const PokemonData =  styled('div')(({ theme }) => ({ 
    height: '100%',
    width: '50%',
    display:"flex",
    flexDirection:"column",
    color:"white",
    alignItems:"center",
    margin:'0 auto'
}))

export const PokemonImageSectionContainer =  styled('div')(({ theme }) => ({ 
    position:'relative',
    margin:'auto',
    marginTop:5,
    height: '100%', 
    width: '50%',
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    [theme.breakpoints.down("md")]:{
        height: '70vh',
        marginTop:50,
        marginBottom: 125
    },
}))




export const PokemonName =  styled('div')(({ theme }) => ({ 
    backgroundSize: '200% auto',
    color:'#fff',
    backgroundClip: 'text',
    textFillColor: 'transparent',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    animation: 'textclip 4s linear infinite',
    display: 'inline-block',
    fontSize: '48px',
    fontWeight: 600,
    textTransform: 'capitalize',
    alignText:"center",

    "@keyframes textclip":{
        "to":{
            backgroundPosition: "200% center"
        }
    },

    [theme.breakpoints.down("md")]:{
        fontSize:"36px",
    },
}))



export const Pulse =  styled('div')(({ theme }) => ({ 
    borderRadius: '50%',
    width: '200px',
    height: '200px',
    opacity: 0,
    animation: 'scaleIn 6s infinite cubic-bezier(.36, .11, .89, .32)',
    zIndex:-1,
    marginLeft:"-3em",

    "@keyframes scaleIn":{
        'from': {
            transform: 'scale(.75, .75)',
            opacity: .15,
        },
        'to': {
            transform: 'scale(2.5, 2.5)',
            opacity: 0,
        }
    },

    [theme.breakpoints.down("md")]:{
        width: '75px',
        height: '75px',
    },
}))


/* Stats components*/
export const StatsContainer =  styled(Stack)(({ theme }) => ({ 
    width:'80%',
   
    alignItems:"center",

    [theme.breakpoints.down("md")]:{
        height:'auto',
        paddingTop: '3em',
        paddingBottom: '5em'
    },
}))

export const StatsTitle =  styled(Typography)(({ theme }) => ({ 
    fontSize:"2em",

    [theme.breakpoints.up("xl")]:{
        fontSize:"2.2em",
    },
    [theme.breakpoints.down("md")]:{
        fontSize:"1.8em",
    },

}))

export const StatText =  styled(Typography)(({ theme }) => ({ 
    fontSize:"1em",
    textAlign:"left",
    fontWeight:600,
    [theme.breakpoints.up("xl")]:{
        fontSize:"1.25em",
    },
    [theme.breakpoints.down("md")]:{
        fontSize:"0.8em",
    },
}))

export const statChartContainer =  styled(Stack)(({ theme }) => ({
    alignItems:"center" 

}))

export const RadarChartComponent =  styled(RadarChart)(({ theme }) => ({
    transform: 'scale(0.70)',
    fontSize:"22px", 
    marginTop: '-3em',

    [theme.breakpoints.down("md")]:{
        fontSize:"18px", 
        color:"white",
    },
}))



export const ChartSquare =  styled(Box)(({ theme }) => ({
    width:"8px",
    height:"8px",
    marginLeft:"3px",

    [theme.breakpoints.up("xl")]:{
        width:"10px",
        height:"10px",
    },
    [theme.breakpoints.down("md")]:{
        width:"6px",
        height:"6px",
        marginLeft:"2px",
    },
}))

export const TypeName =  styled(Typography)(({ theme }) => ({
    fontSize:"20px",
    fontWeight:600,
    textTransform: 'capitalize',
    [theme.breakpoints.down("md")]:{
        fontSize:"16px",
    },
}))

export const TypeImage = styled('img')(({ theme }) => ({
    width: 24, 
    height: 24, 
    paddingLeft:4
}))

export const PokemonImageContainer =  styled(Typography)(({ theme }) => ({
    width:"50%",
    height:"50%",
    zIndex: 100,
    position:"relative",

    [theme.breakpoints.down("md")]:{
        width:"100%",
        height:"100%",
    },
}))

export const PokemonCompleteImage =  styled('img')(({ theme }) => ({
    display:"flex", 
    width:"100%", 
    height:"100%",  
    WebkitBoxReflect:"below 0 linear-gradient(transparent, transparent, #005)",
    position: 'absolute',
    left: 0,
    right: 0 ,
    top: 0 ,
    bottom: 0 ,
    margin:'auto',

    [theme.breakpoints.down("md")]:{
        width:"200px",
        height:"200px",
        position:"relative",
    },
}))

/* User Team */
export const GridItemText =  styled(Typography)(({ theme }) => ({
    width:"30%", 
    color:"white",
    fontWeight:700,
    fontSize:"14px",
    letterSpacing:"2px",


    [theme.breakpoints.down("md")]:{
        
    },
}))



