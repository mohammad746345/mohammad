import React, { useState } from 'react'

import TextField from '@material-ui/core/TextField';
import { create } from "jss";
import rtl from "jss-rtl";
import {
  StylesProvider,
  ThemeProvider,
  jssPreset,
  createGenerateClassName
} from "@material-ui/styles";

import { createMuiTheme, makeStyles} from "@material-ui/core/styles";
import { Button } from '@material-ui/core';


const jss = create({
    plugins: [...jssPreset().plugins, rtl()]
  });
  const generateClassName = createGenerateClassName({
    disableGlobal: true
  });
  
  const useStyles = makeStyles((theme) => ({
   root:{
       
   },
    margin: {
      margin: theme.spacing(1),
  width:'100%',
  position:'relative',
  bottom:30,
  },
   
   
  }));
  





function LoginForm({Login , error}) {
    const classes = useStyles();

    const [details , setDetails]= useState({name:'' , email:'' , password:''})
    const [lang, setLang] = React.useState("en");
  
    let theme = createMuiTheme({
      direction: setLang === "ar" ? "ltr" : "rtl",
      overrides: {
        MuiOutlinedInput: {
            root: {
                position: 'relative',
                borderRadius:25,
                                  height:'50px',
  
                '& $notchedOutline': {
                    borderColor: 'rgba(0, 0, 0, 0.23)',
  
                },
                '&:hover:not($disabled):not($focused):not($error) $notchedOutline': {
                    borderColor: '#000000',
                    // Reset on touch devices, it doesn't add specificity
                    '@media (hover: none)': {
                        borderColor: 'rgba(218, 39, 17, 0.23)',
                    },
                },
                '&$focused $notchedOutline': {
                    borderColor: '#ef8d32',
                    borderWidth: 2,
                    borderRadius:25,
  
  
                },
            },
        },
        MuiFormLabel: {
         
            root: {
              fontFamily:'Vazir',
              fontSize:'14px',
                '&$focused': {
                    color: '#000000',
                }
            }
        },
      shape:{
        borderRadius:25
      },
    }
      
    })



const submitHandler = e => {
    e.preventDefault()

    Login(details)
}

    return (

        <form onSubmit = {submitHandler}>
            <div>
                <h2 style={{position:'relative' , bottom:30}}> ورود </h2>
                {(error !=="") ? (<div className='error'>{error}</div>):""}

                <div>
                <StylesProvider jss={jss} generateClassName={generateClassName}>
      <ThemeProvider theme={theme}>
                       <TextField  
                       className={classes.margin} 
                       type='text' 
                       name='name' 
                       id='name' 
                       variant="outlined"  
                       lang={lang}
                       label="نام "


                    onChange={e => setDetails({...details, name:e.target.value})} value={details.name}/>
                    </ThemeProvider>
                    </StylesProvider>
                </div>
                

                <div>
                <StylesProvider jss={jss} generateClassName={generateClassName}>
                <ThemeProvider theme={theme}>
                    <TextField
                     className={classes.margin} 
                     type='email' 
                     name='email' 
                     id='email' 
                     lang={lang}
                     variant="outlined"  
                     label="ایمیل "

                    onChange={e => setDetails({...details, email:e.target.value})} value={details.email}/>
                    </ThemeProvider>
                    </StylesProvider>
                </div>

                <div>
                <StylesProvider jss={jss} generateClassName={generateClassName}>
                <ThemeProvider theme={theme}>
                    <TextField  
                    className={classes.margin} 
                    type='password' 
                    name='password' 
                    id='password' 
                    variant="outlined" 
                    label="پسوورد"
                    lang={lang}
                    onChange={e => setDetails({...details, password:e.target.value})} value={details.password}
                    />
                    </ThemeProvider>
                    </StylesProvider>
                </div>

                <Button style={{width:'100%' , backgroundColor:'#FF7A2F' ,borderRadius:'25px'}} type='submit'>ارسال</Button>

            </div>
        </form>
    )
}

export default LoginForm