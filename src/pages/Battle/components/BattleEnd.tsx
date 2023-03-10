import { Box, Button, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { delay } from "../utilities/gameLogic";
import { PublicRoutes } from "../../../models";
import { resetBattelData } from "../../../redux/state/game";
import { resetSearchData } from "../../../redux/state/pokemon";
import { resetUserData } from "../../../redux/state/user";
import { resetUserTeam } from "../../../redux/state/teams";

interface IBattleEnd {
  message: string;
}

function BattleEnd({ message }: IBattleEnd) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const color = message === "Congrats, YOU WON!" ? "gold" : "crimson";

  const handleResetGame = async () => {
    dispatch(resetBattelData({}));
    dispatch(resetSearchData({}));
    dispatch(resetUserData({}));
    dispatch(resetUserTeam({}));
    await delay(1500);
    navigate(`/${PublicRoutes.HOME}`, { replace: true });
  };
  return (
    <Box
      width="100%"
      height="100vh"
      zIndex={500}
      position="fixed"
      display="flex"
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
      color="white"
      sx={{ background: "rgba(0,0,0,.85)" }}
    >
      <Typography fontSize={{ xs: "28px", sm: "48px" }}>
        {" "}
        Battle has ended
      </Typography>
      <Typography
        fontSize={{ xs: "36px", sm: "72px" }}
        fontWeight={600}
        color={color}
      >
        {" "}
        {message}
      </Typography>
      <Box
        position="absolute"
        bottom="10%"
        display="flex"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
      >
        <Typography
          fontSize={{ xs: "22px", sm: "30px" }}
          fontWeight={600}
          mb={1}
        >
          {" "}
          Thank you for playing
        </Typography>
        <Button
          variant="contained"
          color="warning"
          onClick={handleResetGame}
          sx={{ fontWeight: 600, width: "250px" }}
        >
          {" "}
          Play again
        </Button>
      </Box>
    </Box>
  );
}
export default BattleEnd;
