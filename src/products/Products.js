import React from "react";
import {
  MuiThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';


import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

import { Button } from "@material-ui/core";

import './Products.css'




const theme = {
  overrides: {
    MuiCard: {
      root: {

          
        "&.MuiEngagementCard--01": {
          transition: "0.3s",
          maxWidth: 450,
          height:'360px',
          position:'relative',
          bottom:130,
          margin: "20px",
          color:'black',
          borderRadius:18,
          '@media (max-width: 960px)' : {
            height:'auto',
          }

        },
          "& .MuiTypography--subheadingbutton": {
            textAlign:'center',
            width:'120px',
            display:'none',
            borderRadius:25,
            fontFamily:'Vazir',
            border:'1px solid #f7f6e7'

          },
          "& .MuiTypography--subheadingbutton1": {
            textAlign:'center',
            width:'120px',
            display:'none',
            borderRadius:25,
            fontFamily:'Vazir',
            border:'1px solid #f7f6e7'


          },

        
          "&:hover": {
            boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0)",
            backgroundColor:'#eb5e0b',
            color:'white',
            transition: "0.6s",
            height:'420px',

           
            "& .MuiTypography--subheadingbutton": {
              position:'relative',
                display:'flex',
               

                backgroundColor:'#ef8d32',
                color:"white",
                height:'47px',
              

                "&:hover": {
                  boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0)",
                  backgroundColor:'#eb5e0b',

              }
  
              },
              "& .MuiTypography--subheadingbutton1": {
height:'47px',
display:'flex',

                backgroundColor:'#ef8d32',
               
                "&:hover": {
                  boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0)",
                  backgroundColor:'#eb5e0b',

              }
  
              },
    
            
          },

          "& .MuiCardMedia-root": {
            paddingTop: "115%",
         height:'280px'
  
          },
         

          "& .MuiCardContent-root": {
            textAlign: "right",
            padding: '0px',
            
          },
         
          "& .MuiTypography--heading": {
            fontWeight: "bold",
            textAlign:'center'

          },
          "& .MuiTypography--subheading": {
            textAlign:'center',
            marginRight:'5px',
            marginTop:'36px',
            width:'120px',
            backgroundColor:'#ef8d32',
            "&:hover": {
              
              backgroundColor:'#cc561e',

            },
          },
         

                    
          "& .MuiTypography--subheadingMah": {
              textAlign:'center',
              textAlignLast:'center',
  
                      },

                    
  
          
        }
      }
    
  }
};

const Products =() =>{
    
  return (
    <Container maxWidth="lg">

    <Grid container>

      <div class='root1'>
            <Grid container spacing={3}
             direction="column"
             justify="center"
             alignItems="center"
            >

           

          <h1
              style={{fontSize:'30px' , color:'#fb743e',position:'relative',bottom:20}}
            >
              محصولات
            </h1>
             
            <p
            className={"MuiEngagementCard--p"}
                style={{  textAlign:'justify' ,  alignContent: 'left',
                textJustify:'initial',
              fontSize:'16px' , color:'black',lineHeight:'1.8',position:'relative' ,bottom:70,margin:'40px'
               
              
              }}

            >
             شرکت داده پردازی الگوریتم پارس، با بهره گیری از تخصص و دانش سرمایه های انسانی خود، به ارائه راهکارهای مبتنی بر فناوری اطلاعات برای سازمان ها و شرکت های متوسط و بزرگ می پردازد . برخی از محصولات این شرکت را می توانید مشاهده فرمایید


            </p>

         </Grid>
         </div>


  <Grid  item xs={12} sm={6} md={3} spacing={1}>
  <ScrollAnimation animateIn="animate__bounceIn">


    <MuiThemeProvider theme={createMuiTheme(theme)}>
      <div className="App">
        
        <Card className={"MuiEngagementCard--01"}>
          <CardMedia
            className={"MuiCardMedia-root"}
            image={
              "./images/products/HSE.png"
            }
          >
          </CardMedia>
          <CardContent className={"MuiCardContent-root"}>
            <p
              className={"MuiTypography--heading"}
              style={{position:'relative',marginTop:'10px'}}
            >
                    نرم افزار جامع مدیریت سلامت ، ایمنی و محیط زیست
            </p>
           
              
            
          </CardContent>
          <Button 
              className={"MuiTypography--subheadingbutton"}

                variant="contained" color="primary">
            دانلود کاتالوگ
          </Button>
        </Card>
      </div>
    </MuiThemeProvider>
    </ScrollAnimation>

    </Grid>

    <Grid  item xs={12} sm={6}  md={3} spacing={1}>
    <ScrollAnimation animateIn="animate__bounceIn">

    <MuiThemeProvider theme={createMuiTheme(theme)}>
      <div className="App">
        <Card className={"MuiEngagementCard--01"}>
          <CardMedia
            className={"MuiCardMedia-root"}
            image={
                "./images/products/IMS.png"
            }
          />
            <CardContent className={"MuiCardContent-root"}>
            <p
              className={"MuiTypography--heading"}
              
            >
                    نرم افزار جامع مدیریت یکپارچه
        </p>


          </CardContent>
          <Button 
              className={"MuiTypography--subheadingbutton1"}

                variant="contained" color="primary">
                        دانلود کاتالوگ

          </Button>

        </Card>
      </div>
    </MuiThemeProvider>
    </ScrollAnimation>

    </Grid>

    <Grid  item xs={12} sm={6} md={3} spacing={1}>
    <ScrollAnimation animateIn="animate__bounceIn">

    <MuiThemeProvider theme={createMuiTheme(theme)}>
      <div className="App">
        <Card className={"MuiEngagementCard--01"}>
          <CardMedia
            className={"MuiCardMedia-root"}
            image={
                "./images/products/QA.png"
            }
          />
          <CardContent className={"MuiCardContent-root"}>
            <p
              className={"MuiTypography--heading"}
              
            >
              نرم افزار جامع تضمین کیفیت    

              
            </p>
           

          </CardContent>
          <Button 
              className={"MuiTypography--subheadingbutton1"}

                variant="contained" color="primary">
                        دانلود کاتالوگ

          </Button>
        </Card>
      </div>
    </MuiThemeProvider>
    </ScrollAnimation>
    </Grid>

    <Grid  item xs={12} sm={6} md={3} spacing={1}>
    <ScrollAnimation animateIn="animate__bounceIn">

    <MuiThemeProvider theme={createMuiTheme(theme)}>
      <div className="App">
        <Card className={"MuiEngagementCard--01"}>
          <CardMedia
            className={"MuiCardMedia-root"}
            image={
                "./images/products/Teb.png"
            }
          />
          <CardContent className={"MuiCardContent-root"}>
            <p
              className={"MuiTypography--heading"}
              
            >
                نرم افزار طب کار
            </p>
            
           
          </CardContent>
          
          <Button 
              className={"MuiTypography--subheadingbutton1"}

                variant="contained" color="primary">
                        دانلود کاتالوگ

          </Button>
        </Card>

      </div>
    </MuiThemeProvider>
    </ScrollAnimation>
    </Grid>

    </Grid>
    </Container>
    
  );
}

export default Products