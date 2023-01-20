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

    
  return {
    errorSB,
    throwErrorSnackbar,
  }
}
export default useSnackbar