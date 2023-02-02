import { Box, Typography } from '@mui/material';
import { Answer, Question, QuestionSection } from "../pages/Home/style-components/home.styles-components"

const Instructions = () => {
  return (
    <Box width={{xs:'90%',sm:'50%'}} height={{xs:'auto',sm:'100%'}} display="flex" alignItems='center' justifyContent="space-evenly">
       <Box  p={{xs:1,sm:1}} mb={{xs:'2em',sm:0}}  sx={{background: "rgba(237,239,238,0.90)", borderRadius:"20px"}}>
        <Typography variant='h5' textAlign='center' color="#444" fontWeight={600} pt={{xs:0,sm:1}} py={{xs:2,sm:0}}  sx={{textDecoration:"underline"}}>Information</Typography>
          <QuestionSection >
              <Question>What is Pokemon Battle Simulator?</Question>
              <Answer>Is a 6v6 pokemon game battle simulator, using Pokemon API. </Answer>
              <Question>How to play?</Question>
              <Answer>Choose your team of 6 pokemons, and then fight againts a random team and find if you can beat it. </Answer>
              <Question>Who let the dogs out?</Question>
              <Answer>It wasn't me, bro  </Answer>
          </QuestionSection>
       </Box>
    </Box>
  )
}
export default Instructions