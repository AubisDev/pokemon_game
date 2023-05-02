import { styled } from "@mui/system";
import { motion } from "framer-motion";
import { Box } from "@mui/material";
import battleBg from "../../../assets/battle_bg.webp";

export const SectionContainer = styled("div")(({ theme }) => ({
  backgroundSize: "cover",
  height: "100vh",
  width: "100vw",
  display: "flex",
  flexDirection: "row",
  background: "rgba(0,0,0,0.9)",
  position: "relative",
  overflowX: "hidden",

  [theme.breakpoints.down("md")]: {
    height: "auto",
    minHeight: "100vh",
    flexDirection: "column",
  },
}));

export const BattleSectionContainer = styled("div")(({ theme }) => ({
  height: "80vh",
  width: "100%",
  backgroundImage: `url(${battleBg})`,
  backgroundSize: "cover",
  position: "relative",
  backgroundPosition: "center",
  overflow: "hidden",

  [theme.breakpoints.down("md")]: {
    width: "100vw",
    height: "60vh",
  },
}));

export const ActionsSection = styled("div")(({ theme }) => ({
  height: "20%",
  width: "100%",
  position: "relative",
  border: "1px solid darkorange",
  background: "rgba(0,0,0,.6)",
  overflowX: "hidden",

  [theme.breakpoints.down("md")]: {
    width: "99.2vw",
    height: "20vh",
  },
}));

export const InnerContainerBorder = styled("div")(({ theme }) => ({
  width: "98%",
  height: "85%",
  border: "4px solid darkorange",
  background: "linear-gradient( #21314b, #21314b,#21314b ) padding-box, blue",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-evenly",
  overflowX: "hidden",

  [theme.breakpoints.down("md")]: {
    border: "2px solid darkorange",
    width: "94%",
    padding: 2,
  },
}));

export const PixelatedButton = styled("button")(({ theme }) => ({
  fontSize: "40px",
  height: "90%",
  padding: "0 1.5em",
  marginLeft: "0.5em",
  fontFamily: "VT323",
  borderRadius: "20px",
  border: "2px solid white",
  boxShadow: "0px 2px 5px rgba(0,0,0,1)",
  color: "white",
  cursor: "pointer",
  letterSpacing: "3px",
  overflowX: "hidden",

  [theme.breakpoints.down("md")]: {
    width: "125px",
    height: "70px",
    fontSize: "18px",
    padding: "0 0.25em",
    marginRight: "0.5em",
    fontFamily: "sans-serif",
    fontWeight: 600,
    textAlign: "center",
  },
}));

export const UserPokemonImage = styled(motion.img)(({ theme }) => ({
  width: "350px",
  height: "350px",
  position: "absolute",
  bottom: "-5%",
  left: "15%",
  overflowX: "hidden",

  [theme.breakpoints.down("xl")]: {
    width: "265px",
    height: "265px",
    bottom: 0,
    left: "20%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "175px",
    height: "175px",
    bottom: 0,
    left: "10%",
  },
}));

export const BotPokemonImage = styled(motion.img)(({ theme }) => ({
  width: "250x",
  height: "250px",
  position: "absolute",
  top: "10%",
  right: "15%",
  overflowX: "hidden",

  [theme.breakpoints.down("xl")]: {
    width: "210px",
    height: "210px",
    top: "10%",
    right: "15%",
  },

  [theme.breakpoints.down("sm")]: {
    width: "125px",
    height: "125px",
    top: "22.5%",
    right: "5%",
  },
}));

export const UserLifeBar = styled(Box)(({ theme }) => ({
  width: "40%",
  height: "125px",
  background: "rgba(251,244,216,0.85)",
  position: "absolute",
  bottom: "5%",
  right: "5%",
  borderRadius: "30px 10px 30px 10px",
  boxShadow: "10px 10px 15px rgba(0,0,0,1)",
  border: "4px groove rgba(0,0,0,.75)",
  display: "flex",
  alignItems: "start",
  flexDirection: "column",
  overflowX: "hidden",

  [theme.breakpoints.down("sm")]: {
    width: "150px",
    height: "65px",
    bottom: "8%",
    right: "5%",
  },
}));

export const BotLifeBar = styled(Box)(({ theme }) => ({
  width: "40%",
  height: "125px",
  background: "rgba(251,244,216,0.85)",
  position: "absolute",
  top: "7%",
  left: "5%",
  borderRadius: "30px 10px 30px 10px",
  boxShadow: "10px 10px 15px rgba(0,0,0,1)",
  border: "4px groove rgba(0,0,0,.75)",
  display: "flex",
  alignItems: "start",
  flexDirection: "column",
  overflowX: "hidden",

  [theme.breakpoints.down("sm")]: {
    width: "150px",
    height: "65px",
    top: "15%",
    right: "5%",
  },
}));

export const AlivePokemonContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "90%",
  background: "rgba(54,175,246,0.6)",
  border: "1px solid white",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  margin: "auto",
  transitionDuration: "0.3s",
  cursor: "pointer",

  "&:hover": {
    background: "rgba(68,153,42,0.6)",
  },

  [theme.breakpoints.down("sm")]: {},
}));

export const AvailablePokemonImage = styled("img")(({ theme }) => ({
  width: "40px",
  height: "100%",
}));
