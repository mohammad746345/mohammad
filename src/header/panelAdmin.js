import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LoginForm from '../component/loginForm';
import { Button } from '@material-ui/core';
import './panelAdmin.css'

const useStyles = makeStyles((theme) => ({
   
    root: {
    }   
}));
  

export default function PanelAdmin(){
    const classes = useStyles();

    const adminUser = {
email:'mamad@gmail.com',
password:'admin123'
    }
    const [user , setUser] = useState({name :'' , email:''})
    const [error ] = useState('')

    const Login = details => {
        console.log(details);

        if(details.email === adminUser.email && details.password === adminUser.password){
        console.log('Login In');
        setUser({
            name:details.name,
            email:<details>.</details>
        })
        }else {
            console.log('details do not mutch');

        }
    };

    const Logout = () => {
     setUser({name:'' , email:''})
    }

    return (
        <div maxWidth="sm" className={classes.root}>

        <Grid  container>
            
                <Paper className={classes.paper}>
            {(user.email !== "") ? (
                <div className='welcome'> 
                <h2>welcome <span>{user.name} </span> </h2>
                <Button  
                style={{width:'100%' , backgroundColor:'#FF7A2F' ,borderRadius:'25px'}} 
                onClick={Logout}>خروج</Button>
                 </div>
            ) :(
                 <LoginForm Login={Login} error={error} />
            )}
            </Paper>
       </Grid>
       </div>
    )
}











































