import { Alert, Snackbar, TextField, Typography } from '@mui/material';
import { replace } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useSnackbar from '../hooks/useSnackbar';
import { PrivateRoutes } from '../models/routes';
import { setUsername } from '../redux/state/user';
import { CommonButton } from "../style-components/home.styles-components"
import { useState } from 'react';

const UserForm = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { errorSB, throwErrorSnackbar  } = useSnackbar();
  const [userName, setUserName] = useState<string>('Pokemon Master');

  const handleSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if( userName.length >= 2){
       dispatch(setUsername(userName));
       navigate(`/${PrivateRoutes.TEAM_SELECTION}`);
    }
    else{
      throwErrorSnackbar();
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setUserName(event.currentTarget.value)
  }

  return (
    <form style={{ display:"flex", flexDirection:"column"}}>
        <Typography textAlign="center" variant="h6" color="white"> Write your name</Typography>
        <Typography pb={3} textAlign="center" variant="h6" color="white"> to start the game </Typography>
        <TextField
          id="username-input"
          label="Username"
          name='username'
          value={userName}
          onChange={ (e) => handleChange(e)}
        />
        <Snackbar open={errorSB} autoHideDuration={6000} anchorOrigin={{ vertical:'bottom', horizontal:'center' }}>
          <Alert  severity="error" sx={{ width: '100%'}}>
            There was an error
          </Alert>
        </Snackbar>
        <CommonButton type="submit" onClick={ (e) => handleSubmit(e)} > Let's choose my team </CommonButton>
    </form>
  )
}
export default UserForm