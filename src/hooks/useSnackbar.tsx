import { Snackbar, Alert } from "@mui/material";
import { useState } from "react"


interface ISnackbar {
    error: boolean;
    success: boolean;
}

const useSnackbar = () => {

    const [errorSB, setErrorSB] = useState(false);

    const throwErrorSnackbar = () => {
        setErrorSB(true);
        setTimeout(() => {
            setErrorSB(false);
        }, 5000);
    }

    const ErrorSnackbar = (message: string) => {
      return(
        <Snackbar open={errorSB} autoHideDuration={6000} anchorOrigin={{ vertical:'bottom', horizontal:'left' }}>
          <Alert  severity="error" sx={{ width: '100%'}}>
            {message}
          </Alert>
        </Snackbar>
      )

    }
    

    
  return {
    errorSB,
    throwErrorSnackbar,
    ErrorSnackbar
  }
}
export default useSnackbar