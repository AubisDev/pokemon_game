import { Alert, Snackbar, TextField, Typography } from '@mui/material';
import { replace } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useSnackbar from '../hooks/useSnackbar';
import { PrivateRoutes } from '../models/routes';
import { setUsername } from '../redux/state/user';
import { CommonButton } from "../pages/Home/style-components/home.styles-components"
import { useState } from 'react';
import { usernameError } from '../utilities/constants';

const UserForm = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { errorSB, throwErrorSnackbar, ErrorSnackbar } = useSnackbar();
  const [userName, setUserName] = useState<string>('Pokemon Master');

  const handleSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if( userName.length >= 2){
       dispatch(setUsername({ username: userName}));
       navigate(`/${PrivateRoutes.TEAM_SELECTION}`, {replace:true});
    }
    else{
      throwErrorSnackbar();
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setUserName(event.currentTarget.value);

  return (
    <form style={{ display:"flex", flexDirection:"column"}}>
        <Typography textAlign="center" fontSize={{xs:"18px", sm:'20px'}} color="white"> Write your name</Typography>
        <Typography pb={3} textAlign="center" fontSize={{xs:"18px", sm:'20px'}} color="white"> to start the game </Typography>
        <TextField
          id="username-input"
          label="Username"
          name='username'
          value={userName}
          onChange={ (e) => handleChange(e)}
        />
        { errorSB ? ErrorSnackbar(usernameError, errorSB) : null}
        <CommonButton type="submit" onClick={ (e) => handleSubmit(e)} > Let's choose my team </CommonButton>
    </form>
  )
}
export default UserForm