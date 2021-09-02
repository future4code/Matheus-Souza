import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import {StyledToolbar} from './Styled';
import { goToLogin, goToRecipesList } from '../../routes/coordinator';
import { useHistory } from 'react-router';


const Header=()=>{
  const history =useHistory()
  return (
      <AppBar position="static">
        <StyledToolbar>
        <Button 
          onClick={()=>{goToRecipesList(history)}}
           color="inherit">
          labeCook</Button>

          <Button 
            onClick={()=>{goToLogin(history)}}
            color="inherit">
            Login</Button>

        </StyledToolbar>
      </AppBar>
  );
}
export default Header