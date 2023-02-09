import { Box, Stack } from "@mui/material";
import {
  Container,
  HomeOverlay,
  ContentContainer,
  TitleText,
  PokemonLogo,
} from "./style-components/home.styles-components";
import logo from "../../assets/logo.webp";
import UserForm from "./components/UserForm";
import Instructions from "./components/Instructions";

function Home() {
  return (
    <Container>
      <HomeOverlay>
        <ContentContainer>
          <LightEffects />
          <Box position="relative">
            <PokemonLogo src={logo} alt="pokemon logo" />
            <Stack direction="column" my={1}>
              <TitleText style={{ color: "blue" }}>Battle</TitleText>
              <TitleText style={{ color: "red", paddingRight: 0 }}>
                Simulator
              </TitleText>
            </Stack>
          </Box>
          <UserForm />
        </ContentContainer>
        <Instructions />
      </HomeOverlay>
    </Container>
  );
}
export default Home;

function LightEffects() {
  return (
    <>
      <div className="shine" />
      <div className="shine2" />
    </>
  );
}
