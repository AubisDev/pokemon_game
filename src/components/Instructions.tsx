import { Box, Typography } from '@mui/material';
import { Answer, Question, QuestionSection } from "../style-components/home.styles-components"

const Instructions = () => {
  return (
    <Box width={400} height='auto' margin="auto" p={1}  sx={{background: "rgba(237,239,238,0.90)", borderRadius:"20px"}}>
        <Typography variant='h5' textAlign='center' color="#444" fontWeight={600} pt={1} sx={{textDecoration:"underline"}}>Information</Typography>
        <QuestionSection >
            <Question>What is Pokemon Battle Simulator?</Question>
            <Answer>Is a 6v6 pokemon game battle simulator, using Pokemon API. </Answer>
            <Question>How to play?</Question>
            <Answer>Choose your team of 6 pokemons, and then fight againts a random team and find if you can beat it. </Answer>
            <Question>Who let the dogs out?</Question>
            <Answer>It wasn't me, bro  </Answer>
        </QuestionSection>
    </Box>
  )
}
export default Instructions