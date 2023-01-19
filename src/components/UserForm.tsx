import { TextField, Typography } from '@mui/material';
import { CommonButton } from "../style-components/home.styles-components"

const UserForm = () => {
  return (
    <form style={{ display:"flex", flexDirection:"column"}}>
        <Typography textAlign="center" variant="h6" color="white"> Write your name</Typography>
        <Typography pb={3} textAlign="center" variant="h6" color="white"> to start the game </Typography>
        <TextField
          id="username-input"
          label="Username"
          defaultValue="Pokemon Master"
          name='username'
          
        />
        <CommonButton > Let's choose my team </CommonButton>
    </form>
  )
}
export default UserForm