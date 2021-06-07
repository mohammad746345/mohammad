import React, {useState} from 'react'
import {
  
  makeStyles,
  
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import axios from 'axios'

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import { create } from "jss";
import rtl from "jss-rtl";
import {
  StylesProvider,
  ThemeProvider,
  jssPreset,
  createGenerateClassName
} from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import './demoRequest.css'


const jss = create({
  plugins: [...jssPreset().plugins, rtl()]
});
const generateClassName = createGenerateClassName({
  disableGlobal: true
});





const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    margin:'50px',
    position:'relative',
    top:7

  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    marginTop:'160px',
    fontSize:'15px',
    color:'#fb743e',


  },
  margin: {
    margin: theme.spacing(1),
width:'95%',
position:'relative',
bottom:30,
},
  gridleft: {
    margin: theme.spacing(1),
    width:'95%',
    position:'relative',
bottom:30,
    right:25,
    '@media (max-width: 780px)' : {
      right:0,
    }
  },

  formControl: {
    margin: theme.spacing(1),

  },
 
}));


function SoftWare() {
  const classes = useStyles();
  const [software, setsoftware] = React.useState('');
  const handleChange = (event) => {
    setsoftware(event.target.value);
  };
  return (
    <div>
     
      <FormControl variant="outlined" className={classes.margin}>
      <InputLabel id="SoftWare-label">نرم افزار درخواستی</InputLabel>

        <Select
          labelId="SoftWare-label"
          id="SoftWare"
          value={software}
          onChange={handleChange}
          label="نرم افزار درخواستی"
          
        >
           <MenuItem className={classes.selectItem} value="">
            <p><b>انتخاب کنید</b></p>
          </MenuItem>
          <MenuItem className={classes.selectItem} value={'HSE'}> نرم افزار جامع مدیریت HSE</MenuItem>
          <MenuItem className={classes.selectItem} value={'طب کار'}>نرم افزار طب کار</MenuItem>
          <MenuItem className={classes.selectItem} value={'تعیین کیفیت'}>نرم افزار تعیین کیفیت</MenuItem>
          <MenuItem className={classes.selectItem} value={'مدیریت تعمیرات'}>نرم افزار جامع مدیریت تعمیرات</MenuItem>
          <MenuItem className={classes.selectItem} value={'CMMS'}> نرم افزار CMMS</MenuItem>
        </Select>
      </FormControl>
     
    </div>
  );
}





export default function DemoRequest() {
  const classes = useStyles();
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
  });
  
  const [form, setForm] = useState({
    username: '',
    lastname:'',
    companyname:'',
    phonenumber:'',
    phonemobilenumber:'',

    errorUserName: false,
    errorLastName: false,
    errorCompanyName: false,
    errorPhoneNumber: false,
    errorPhoneMobileNumber: false,

    
    helperTextUserName: '',
    helperTextLastName: '',
    helperTextCompanyName: '',
    helperTextPhoneNumber: '',
    helperTextPhoneMobileNumber: ''




})


const changeHandler = (event) => {
  setForm({
      ...form,
      [event.target.name]: event.target.value
  })
}

function handleClick(event) {
  event.preventDefault()

  const userObject = {
      userName: form.username,
      lastName: form.lastname,
      companyName:form.companyname,
      phoneNumber:form.phonenumber,
      phoneMobileNumber:form.phonemobilenumber,


  }


  if (form.username === '') {
      setForm({
          ...form,
          helperTextUserName: 'وارد کردن نام الزامی میباشد',
          errorUserName: true
      })
     } else if (form.lastname === '') {
        setForm({
            ...form,
            helperTextLastName: 'وارد کردن نام خانوادگی الزامی میباشد',
            errorLastName: true
        
          })
      }  else if (form.companyname==='') {
          setForm({
              ...form,
             
              helperTextCompanyName: 'وارد کردن نام شرکت الزامی میباشد',
            
              errorCompanyName: true
          })
         } else if (form.phonenumber==='') {
            setForm({
                ...form,
               
                helperTextPhoneNumber: 'وارد کردن شماره تماس الزامی میباشد',
                errorPhoneNumber: true
            })
           } else if (form.phonemobilenumber === '') {
              setForm({
                  ...form,
                  helperTextPhoneMobileNumber: 'وارد کردن موبایل الزامی میباشد',
                  errorPhoneMobileNumber: true
              })
                
    }
    else{
      console.log(JSON.parse(JSON.stringify(userObject)));

        axios({
          url: 'http://dummy.restapiexample.com/api/v1/create',
          method: 'POST',
          data: userObject
        })
          .then(() => {
            console.log('Data has been sent to the server');
            this.resetUserInputs();
            this.getBlogPost();
          })
          .catch(() => {
            console.log('Internal server error');
          });;
  }
          }


  return (
    <Container maxWidth="lg">

    <Grid container  spacing={3}>
    <Grid item xs={12} className={classes.paper}>
    <h1>درخواست دمو</h1>


    </Grid>
    <form 
    onSubmit={handleClick}
    className={classes.root} noValidate>
    <Grid item xs={12} sm={6}>
    <StylesProvider jss={jss} generateClassName={generateClassName}>
      <ThemeProvider theme={theme}>
      <TextField
        error={form.errorUserName}
        helperText={form.helperTextUserName}
        className={classes.margin}
        label="نام "
        name={'username'}
        lang={lang}

        type="username"
        onChange={changeHandler}
        variant="outlined"
        id="name-input"

      />
      </ThemeProvider></StylesProvider>
    </Grid>
    <Grid item  xs={12} sm={6}>
    <StylesProvider jss={jss} generateClassName={generateClassName}>
      <ThemeProvider theme={theme}>
    <TextField

error={form.errorLastName}
helperText={form.helperTextLastName}
className={classes.gridleft}
label="نام خانوادگی"
name={'lastname'}
lang={lang}

type="lastname"
onChange={changeHandler}
variant="outlined"
id="lastname-input"

/>
</ThemeProvider></StylesProvider>
</Grid>   
 <Grid item  xs={12} sm={6}>
 <StylesProvider jss={jss} generateClassName={generateClassName}>
      <ThemeProvider theme={theme}>
<TextField

error={form.errorCompanyName}
helperText={form.helperTextCompanyName}
className={classes.margin}
label="نام شرکت"
name={'companyname'}
type="companyname"
onChange={changeHandler}
lang={lang}

variant="outlined"
id="companyname-input"

/>
</ThemeProvider></StylesProvider>
</Grid>   
 <Grid item  xs={12} sm={6}>
 <StylesProvider jss={jss} generateClassName={generateClassName}>
      <ThemeProvider theme={theme}>
<TextField

className={classes.gridleft}
label="زمینه فعالیت"
lang={lang}

name={''}
onChange={changeHandler}
variant="outlined"
id="phonenumber-input"

/>
</ThemeProvider></StylesProvider>
</Grid>  

<Grid item  xs={12} sm={6}>
<StylesProvider jss={jss} generateClassName={generateClassName}>
      <ThemeProvider theme={theme}>

 <SoftWare />
 </ThemeProvider></StylesProvider>
      </Grid>
      
  <Grid item  xs={12} sm={6}>
  <StylesProvider jss={jss} generateClassName={generateClassName}>
      <ThemeProvider theme={theme}>
  <TextField

error={form.errorPhoneNumber}
helperText={form.helperTextPhoneNumber}
className={classes.gridleft}
label="شماره تماس"
name={'phonenumber'}
type="phonenumber"
lang={lang}

onChange={changeHandler}
variant="outlined"
id="phonenumber-input"

/>
</ThemeProvider></StylesProvider>
</Grid>

<Grid item  xs={12} sm={6}>
<StylesProvider jss={jss} generateClassName={generateClassName}>
      <ThemeProvider theme={theme}>
<TextField

className={classes.margin}
label="ادرس پست الکترونیکی"
type="email"
lang={lang}

onChange={changeHandler}
variant="outlined"
id="custom-css-outlined-input"

/>
</ThemeProvider></StylesProvider>
</Grid>

      <Grid item  xs={12} sm={6}>
      <StylesProvider jss={jss} generateClassName={generateClassName}>
      <ThemeProvider theme={theme}>
      <TextField
        error={form.errorPhoneMobileNumber}
        helperText={form.helperTextPhoneMobileNumber}
        className={classes.gridleft}
        label="شماره موبایل را وارد کنید"
        name={'phonemobilenumber'}
        lang={lang}

        type="phonemobilenumber"
        onChange={changeHandler}
        variant="outlined"
        id="phonemobilenumber-input"

      />
</ThemeProvider></StylesProvider>
</Grid>  
<Grid item  xs={12}>

<button className="buttonn" type='submit'><span><b>ارسال</b></span></button>
</Grid>
    </form>
    </Grid>
    </Container>
  );
}