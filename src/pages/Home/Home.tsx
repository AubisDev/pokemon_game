import { Box, Stack, TextField } from "@mui/material"
import { Container, Overlay, MainContainer, TitleText, FormContainer } from '../../style-components/home.styles-components';
import logo from '../../assets/logo.webp';
import UserForm from "../../components/UserForm";
import Instructions from "../../components/Instructions";
import charizard from '../../assets/charizard.png';

const Home = () => {
  return (
    <Container>
        <Overlay>
            <Instructions/>
            <MainContainer>
                    <div className="shine"></div>
                    <Box  position='relative' >
                        <img src={logo} alt="pokemon logo" style={{ width:"300px",}}/>
                        <Stack direction="column" my={1}>
                            <TitleText style={{color:"blue", textAlign:'center'}} >Battle</TitleText>
                            <TitleText style={{color:"red", paddingRight:0,textAlign:'center'}}>Simulator</TitleText>
                        </Stack>
                    </Box>
                    <UserForm/>
                    <div className='shadow'></div>
            </MainContainer>
            <Box width='33%' height="100%"></Box>
        </Overlay>
    </Container>
  )
}
export default Home