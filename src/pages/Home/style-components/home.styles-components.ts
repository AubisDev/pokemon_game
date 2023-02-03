import { styled } from '@mui/system';
import home_bg from '../../../assets/home-bg-2.webp';
import { Box, Typography } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

export const Container = styled('div')(({ theme }) =>({
    width: '100vw',
    height: '100vh',
    backgroundImage: `url(${home_bg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    overflowX:"hidden",
  

    [theme.breakpoints.down("md")]:{
        height:"auto"
    }
}))

export const Overlay = styled('div')(({ theme }) => ({
    width: '100vw',
    height: '100vh',
    background: 'rgba(0,0,0,.10)',
    position: 'relative',
    flexDirection:'row',
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    

    [theme.breakpoints.down("md")]:{
        flexDirection: 'column',
        height:"auto",
    }

}))

export const HomeOverlay = styled('div')(({ theme }) => ({
    width: '100vw',
    height: '100vh',
    background: 'rgba(0,0,0,.10)',
    position: 'relative',
    flexDirection:'row',
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    
    [theme.breakpoints.down("md")]:{
        flexDirection: 'column',
        height:"auto",
    }


}))

export const MainContainer = styled('div')(({ theme }) =>({
    width:"375px",
    height:"600px",
    display:'flex',
    margin:"auto",
    flexDirection:'column',
    justifyContent:'space-evenly',
    alignItems:"center",
    background: 'linear-gradient(-45deg, rgba(250,128,128,1) 0%, rgba(133,71,180,1) 25%, rgba(0,252,138,1) 100%)',
    borderRadius:"20px",
    border:"1px solid white",
    boxShadow:"2px 2px 2px 1px rgba(0, 0, 0, 0.2)",
    fontFamily: "'Yrsa', serif",
    overflow: 'hidden',
    position: 'relative',
    webkitAnimation: 'shimmy 6s ease-in-out infinite',

    [theme.breakpoints.down("md")]:{
        margin:'1.5em 0',
        width:"50%",
        height:"80vh",
    },

    [theme.breakpoints.down("sm")]:{
        margin:'1.5em 0',
        width:"90%",
        height:"90vh",
    },
}))

export const PokemonLogo = styled('img')(({ theme }) =>({
    width:"300px",
    [theme.breakpoints.down("md")]:{
        width:"215px",
    }
}))

export const CommonButton = styled("button")({
    marginTop: '26px', 
    padding:'10px 5px', 
    borderRadius:"5px", 
    border: 'none', 
    background:"#21907f",
    fontSize:"15px",
    color:"white",
    transitionDuration: '300ms',
    cursor:"pointer",
     
    "&:hover":{
        background:"#1f636b"
    }
})


export const TitleText = styled(Typography)(({ theme }) =>({
    fontSize: '2.8em',
    fontWeight:"700",
    lineHeight: '1em',
    textShadow:'-1px 0px 0px white, 1px 0px 0px white, 0px -1px 0px white, 0px 1px 0px white',
    paddingRight:"0.25em",
    textAlign:'center',
    
    [theme.breakpoints.down("md")]:{
        fontSize:"2.3em",
    }
}))

export const QuestionSection = styled("ul")(({ theme }) =>({
    display: 'flex',
    flexDirection:"column",
    justifyContent:"space-evenly",
    height: '275px',
    width: "400px",
    borderRadius: '10px',
    paddingBottom:0,
    
    [theme.breakpoints.down("md")]:{
        width:"90%",
        paddingBottom:"1.5em",
    },
}))

export const Question = styled('li')({
    wordBreak: 'break-word',
    fontSize: '20px',
    color:"#1f636b",
    fontFamily: 'Yrsa',
    fontWeight: 700
})

export const Answer = styled(Box)(({ theme }) =>({
    width: '70%',
    wordBreak: 'break-word',
    fontSize: '17px',
    color:"#333",
    fontWeight: 700,
    paddingBottom: '12px',
    paddingTop: '6px',
    marginLeft:"10px",
    fontFamily: 'Yrsa',

    [theme.breakpoints.down("md")]:{
        width:"90%"
    }
}))
