import { Box, Stack } from "@mui/material"
import { Container, HomeOverlay, MainContainer, TitleText, PokemonLogo, } from './style-components/home.styles-components';
import logo from '../../assets/logo.webp';
import UserForm from "../../components/UserForm";
import Instructions from "../../components/Instructions";

const Home = () => {
  return (
    <Container>
        <HomeOverlay>
            <MainContainer>
              <div className="shine"></div>
              <div className="shine2"></div>
              <Box position='relative' >
                  <PokemonLogo src={logo} alt="pokemon logo" />
                  <Stack direction="column" my={1}>
                      <TitleText style={{color:"blue"}} >Battle</TitleText>
                      <TitleText style={{color:"red", paddingRight:0,}}>Simulator</TitleText>
                  </Stack>
              </Box>
              <UserForm/>
            </MainContainer>
            <Instructions/>
        </HomeOverlay>
    </Container>
  )
}
export default Home