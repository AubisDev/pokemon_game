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
    width: '40%',
    height: '60%',
    background: 'rgba(0,0,0,0.85)',
    borderRadius: 30,
    border: '2px solid blue'
}))


export const TeamCardsTitle = styled('div')(({ theme }) =>({ 
    fontFamily: 'Yrsa',
    fontWeight: 600,
    fontSize: 24,
    color: 'orange',
    paddingTop: 20,
    textAlign: 'center',
    display:"flex",
    flexDirection: 'row',
    justifyContent:"center"

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
    height: '150%',
    width: '100%',
    background: 'rgba(215,215,215,.85)',
    position: 'absolute',
    zIndex: -1,
    left: '-70%',
    borderRadius:"50%"
}))

// Search Bar 

export const SearchBarContainer = styled('div')(({ theme }) => ({ 
    width:250,
    padding: '2em',
    margin: '0 1em',
    background: 'rgba(255,255,255,0.85)',
    color: "black",
    borderRadius: 5,

}))