import React, {useState} from 'react'
import {
  
  makeStyles,
  
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import axios from 'axios'
import { useFilePicker } from "use-file-picker";

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import AttachmentIcon from '@material-ui/icons/Attachment';
import InputLabel from '@material-ui/core/InputLabel';
import { create } from "jss";
import rtl from "jss-rtl";
import {
  StylesProvider,
  ThemeProvider,
  jssPreset,
  createGenerateClassName
} from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { Button } from '@material-ui/core';




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
margin:'30px',
  },

  paper: {
    textAlign: 'center',
    marginTop:'160px',
    fontSize:'15px',
    color:'#db6400',
   
    [theme.breakpoints.down('md')]: {
      top:'50px',
      
},
  },
  margin: {
   
    margin: theme.spacing(1),
    width:'95%',
  marginleft:'120px',
   position:'relative',
   bottom:40,
  
  },
  marginleft:{
    margin: theme.spacing(1),
    width:'95%',
    marginRight:'35px',
    position:'relative',
    bottom:40,
  [theme.breakpoints.down('md')]: {
    marginRight:'7px',

  },
  
  },
  email:{
    margin: theme.spacing(1),
    width:'95%',
    marginRight:'35px',
    position:'relative',
    bottom:20,
  [theme.breakpoints.down('md')]: {
    marginRight:'7px',
    bottom:40,

  }
  },
 
number:{
  margin: theme.spacing(1),
  width:'95%',
  position:'relative',
  bottom:42,

},

phonenumber:{
  margin: theme.spacing(1),
  width:'95%',
  position:'relative',
  bottom:43,
[theme.breakpoints.down('md')]: {

},


},
  
 
resume:{
  width:'95%',

    height:'53px',
    border:'1px solid #aaaaaa',
   bottom:38,
right:7,
     borderRadius:25,
    '&:hover': {
border:'1px solid #1e212d'
  
    

  },

  },


  marginLeft1:{
    width:'95%',
    left:35,

    position:'relative',
    bottom:32,
    [theme.breakpoints.down('md')]: {
      left:7,
     
    },
  },
 
 
  btn:{

    background:'#e7882e',
	color:'#fff',
	border:'none',
	position:'relative',
  bottom:30,
	height:'60px',
  left:20,
	fontSize:'1.6em',
	padding:'0 2em',
	cursor:'pointer',
	transition:'800ms ease all',
	outline:'none',
	float: 'left',
	borderRadius: '20px',
  '&:hover': {
    background:'#ff6a00',
    color:'#ffffff' 
  
  },
},
   

  
  
  
}));


function Gender() {
  const classes = useStyles();
  const [Gender, setGender] = React.useState('');
  const handleChange = (event) => {
    setGender(event.target.value);
  };
  return (
    <div>
     
     <FormControl variant="outlined" className={classes.margin}>
        <InputLabel id="Gender-label">جنسیت</InputLabel>
        <Select
          labelId="Gender-label"
          id="Gender"
          
          value={Gender}
          onChange={handleChange}
          label="جنسیت"
        >
          <MenuItem value="">
            <em>انتخاب کنید</em>
          </MenuItem>
          <MenuItem value={'زن'}>زن  </MenuItem>
          <MenuItem value={'مرد'}>مرد</MenuItem>
        </Select>
      </FormControl>
     
    </div>
  );
}

function  MaritalStatus() {
  const classes = useStyles();
  const [ Marital, setMarital] = React.useState('');
  const handleChange = (event) => {
    setMarital(event.target.value);
  };
  return (
    <div>
     
      <FormControl variant="outlined"  className={classes.margin}

>
      <InputLabel id="MaritalStatus-label" 
    
    
    >وضعیت تاهل</InputLabel>
        <Select
          labelId="MaritalStatus-label"
          id="MaritalStatus"
          
          value={Marital}
          onChange={handleChange}
          label="وضعیت تاهل"

        >
          <MenuItem className={classes.selectItem} value="">
        <p><b>انتخاب کنید</b><hr /></p>
      </MenuItem>
      <MenuItem className={classes.selectItem} value={'متاهل'}>متاهل</MenuItem>
      <MenuItem className={classes.selectItem} value={'مجرد'}>مجرد</MenuItem>
        </Select>
      </FormControl>
     
    </div>
  );
}

function MilitaryService() {
  const classes = useStyles();
  const [Military, setMilitary] = React.useState('');
  const handleChange = (event) => {
    setMilitary(event.target.value);
  };
  return (
    <div>
     
      <FormControl variant="outlined" className={classes.margin}>
      <InputLabel id="MilitaryService-label">وضعیت نظام وظیفه</InputLabel>


        <Select
        labelId="MilitaryService-label"
        id="MilitaryService"
          value={Military}
          onChange={handleChange}
          label="وضعیت نظام وظیفه"

        >
          <MenuItem className={classes.selectItem} value="">
        <p><b>انتخاب کنید</b><hr /></p>
      </MenuItem>
      <MenuItem className={classes.selectItem} value={'انجام داده ام'}> انجام داده ام</MenuItem>
      <MenuItem className={classes.selectItem} value={'مشمول'}>مشمول</MenuItem>
      <MenuItem className={classes.selectItem} value={'معاف'}>معاف</MenuItem>
        </Select>
      </FormControl>
     
    </div>
  );
}

 



export default function JoinUs() {
  const classes = useStyles();
  const [lang, setLang] = React.useState("fa");

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
                  borderRadius:25

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


  const [filesContent, errors, openFileSelector, loading] = useFilePicker({
    multiple: true,
    // accept: '.ics,.pdf',
    accept: [".json", ".pdf"]
  });

  if (errors.length > 0) return <p>Error!</p>;

  if (loading) {
    return <div>Loading...</div>;
  }
    
  const [form, setForm] = useState({
    username: '',
    lastname:'',
    phonenumber:'',
    phonemobilenumber:'',

    errorUserName: false,
    errorLastName: false,
    errorPhoneNumber: false,
    errorPhoneMobileNumber: false,

    
    helperTextUserName: '',
    helperTextLastName: '',
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
        axios({
          url: '/api/save',
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

    <Grid container spacing={3}>
    <Grid item xs={12} className={classes.paper}>
       <h1>ارسال رزومه</h1>

    </Grid>
    <form onClick={handleClick} className={classes.root} noValidate>
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
      </ThemeProvider>
      </StylesProvider>
    </Grid>
    <Grid item  xs={12} sm={6}>
    <StylesProvider jss={jss} generateClassName={generateClassName}>
      <ThemeProvider theme={theme}>

<TextField

error={form.errorLastName}
helperText={form.helperTextLastName}
className={classes.number}
label="نام خانوادگی"
name={'lastname'}
type="lastname"
onChange={changeHandler}
variant="outlined"
id="lastname-input"

/>
</ThemeProvider>
</StylesProvider>
</Grid> 
<Grid item  xs={12} sm={6}>
<StylesProvider jss={jss} generateClassName={generateClassName}>
      <ThemeProvider theme={theme}>
 <Gender />
 </ThemeProvider>
 </StylesProvider>
      </Grid>

 <Grid item  xs={12} sm={6}>
<StylesProvider jss={jss} generateClassName={generateClassName}>
      <ThemeProvider theme={theme}>
 <MaritalStatus />
 </ThemeProvider>
 </StylesProvider>
      </Grid>
 
 

     <Grid item  xs={12} sm={6}>
     <StylesProvider jss={jss} generateClassName={generateClassName}>
      <ThemeProvider theme={theme}>

<MilitaryService />
</ThemeProvider>
</StylesProvider>
     </Grid>
 
  <Grid item  xs={12} sm={6}>
  <StylesProvider jss={jss} generateClassName={generateClassName}>
      <ThemeProvider theme={theme}>
<TextField
className={classes.number}
label="ادرس ایمیل"
  type='email'
  variant="outlined"
  id="custom-css-outlined-input"
/>
</ThemeProvider></StylesProvider>
</Grid>  

  <Grid item  xs={12} sm={6}>
  <StylesProvider jss={jss} generateClassName={generateClassName}>
      <ThemeProvider theme={theme}>

<TextField

error={form.errorPhoneNumber}
helperText={form.helperTextPhoneNumber}
className={classes.number}
label="شماره تماس"
name={'phonenumber'}
type="phonenumber"
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
className={classes.phonenumber}

 error={form.errorPhoneMobileNumber}
 helperText={form.helperTextPhoneMobileNumber}
 label="شماره موبایل را وارد کنید"
 name={'phonemobilenumber'}
 type="phonemobilenumber"
 onChange={changeHandler}
 variant="outlined"
 id="phonemobilenumber-input"
/>
</ThemeProvider></StylesProvider>
</Grid>
   <Grid item  xs={12} sm={6}>
     
      <Button 

      className={classes.resume} onClick={() => openFileSelector()}><span >رزومه خود را بارگذاری کنید</span>
      
      
      <AttachmentIcon style={{position:'relative',fontSize: 50 ,float:'right' ,bottom:5}} /></Button>
      <pre hidden>{JSON.stringify(filesContent, null, 2)}</pre>
     </Grid>

    <Grid item  xs={12}>

      <button className={classes.btn} ><span>ارسال</span></button>
    </Grid>
    </form>
    </Grid>

    </Container>
  );
}