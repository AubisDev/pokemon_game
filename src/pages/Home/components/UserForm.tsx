import { TextField, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useSnackbar from "../../../hooks/useSnackbar";
import { PrivateRoutes } from "../../../models";
import { setUsername } from "../../../redux/state/user";
import { CommonButton } from "../style-components";
import { usernameError } from "../../../utilities/constants";
import { defaultUsername, FormInstructionTextOne } from "../utilities";

function UserForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { errorSB, throwErrorSnackbar, ErrorSnackbar } = useSnackbar();
  const [userName, setUserName] = useState<string>(defaultUsername);

  const handleSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (userName.length >= 2) {
      dispatch(setUsername({ username: userName }));
      navigate(`/${PrivateRoutes.TEAM_SELECTION}`, { replace: true });
    } else throwErrorSnackbar();
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setUserName(event.currentTarget.value);

  return (
    <form style={{ display: "flex", flexDirection: "column" }}>
      <Typography
        textAlign="center"
        fontSize={{ xs: "18px", sm: "20px" }}
        color="white"
      >
        {FormInstructionTextOne}
      </Typography>
      <TextField
        id="username-input"
        label="Username"
        name="username"
        value={userName}
        onChange={(e) => handleChange(e)}
      />
      {errorSB ? ErrorSnackbar(usernameError, errorSB) : null}
      <CommonButton type="submit" onClick={(e) => handleSubmit(e)}>
        Let's choose my team
      </CommonButton>
    </form>
  );
}
export default UserForm;
