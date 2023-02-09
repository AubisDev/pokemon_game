import { Box, Typography } from "@mui/material";
import { Answer, Question, QuestionSection } from "../style-components";

function Instructions() {
  return (
    <Box
      width={{ xs: "90%", sm: "50%" }}
      height={{ xs: "auto", sm: "100%" }}
      display="flex"
      alignItems="center"
      justifyContent="space-evenly"
    >
      <Box
        p={{ xs: 1, sm: 1 }}
        mb={{ xs: "2em", md: 0 }}
        sx={{
          background: "rgba(237,239,238,0.95)",
          borderRadius: "20px",
          border: "2px solid gray",
        }}
      >
        <Typography
          variant="h5"
          textAlign="center"
          color="#444"
          fontWeight={600}
          pt={{ xs: 3, sm: 1 }}
          pb={{ xs: 6, md: 0 }}
          sx={{ textDecoration: "underline" }}
        >
          Information
        </Typography>
        <QuestionSection>
          <Question>What is Pokemon Battle Simulator?</Question>
          <Answer>
            Is a 6v6 pokemon game battle simulator, using Pokemon API.
          </Answer>
          <Question>How to play?</Question>
          <Answer>
            Choose your team of 6 pokemons, and then fight againts a random team
            and find if you can beat it.
          </Answer>
          <Question>Gameplay details</Question>
          <Answer>
            Damage is based in Pokemons types, not by MT/MO. There are only 2
            moves during battle, attack and change.
          </Answer>
        </QuestionSection>
      </Box>
    </Box>
  );
}
export default Instructions;
