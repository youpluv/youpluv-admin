import React from 'react';
import { Login } from 'react-admin';
import Background from '../../assets/images/login-background.png';


const classes = {
  login: {
    main: {
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'
    }
  }
}

const LoginPage = () => {

  return(
    <Login style={classes.login.main} backgroundImage={Background} />
  )
}

export default LoginPage;
