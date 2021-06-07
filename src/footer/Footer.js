import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import InstagramIcon from '@material-ui/icons/Instagram';
import TelegramIcon from '@material-ui/icons/Telegram';
import FacebookIcon from '@material-ui/icons/Facebook';
import Grid from '@material-ui/core/Grid';




function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const useStyles = makeStyles((theme) => ({
  root: {
    direction: 'rtl',
    backgroundColor:
      theme.palette.type = '#646464',
    top: '250px',
    position: 'relative',
    width: '100%'

  },



  paper: {

    textAlign: 'center',
    color: theme.palette.type = 'Secondary',
    backgroundColor:
      theme.palette.type = '#646464',

  },
  linkk: {

    '& > * + *': {
      marginLeft: theme.spacing(1),

    },
  },

  linkkItem: {
    display: "inline-block",
    marginTop: '0px',
    color: 'black',

    "&:hover": {
      color: "#ffffff",
      textDecoration: 'none',

    }

  },
  iconItem: {
    margin: '10px',
    color: '#ef8d32',
  },
  img: {
    width: '50%',
    height: '50%',
    position: 'relative',
    top: '100px',
    right: '200px',
    '@media (max-width: 780px)': {
      marginBottom: '150px',
      right: '130px',

    }
  },


  paragraf: {
    lineHeight: '1.8',
    textAlign: 'justify',
    padding: '90px',
    fontFamily: 'Vazir',


    color: theme.palette.type = '#ffffff',

  }
}))

export default function StickyFooter() {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();


  return (
    <Grid
      className={classes.root}
      container>
      <CssBaseline />
      <Grid item xs={12} sm={6}
      >

        <Typography className={classes.paragraf}>
          کارگيري سيستم هاي مکانيزه مي تواند ضريب اطمينان اجراي صحيح
          و دقيق همه برنامه ها را بالا برده و کمک موثري به اشراف کلي
          مديران بر سازمان نمايد و آنها را در اخذ تصميمات صحيح و مناسب
          ياري دهد در هميـن راستا شرکت داده پـردازي الگوريتـم پارس
          رسالت خود را در زمينه مطالعه، طراحي، مشاوره و اجراي سيستمها
          و روشهاي مديـريتي، راه حلهـاي نرم افزاري و توليد نرم
          افزارهاي سفارشي از مدتها پيش آغاز نموده و هـم اکنون به
          عنـوان پيشـرو و صاحب سبـک در عرضـه انواع نـرم افزارهاي
          راهبردي مطرح است.اين شرکت با بکارگيري مهندسين و کارشناسان
          مجرب در زمينه تحليل و طراحي سيستم ها، برنامه نويسان خبـره و
          پرسنل کـارآمد در کنـار متخصصان و کارشناسان در زمينه هاي
                    تخصصي مختلف به توليد نرم افزارهاي کاربردي مي پردازد</Typography>
      </Grid>

      <Grid item xs={12} >
        <div className={classes.paper}>
          <Link href="#" onClick={preventDefault}>
            <FacebookIcon className={classes.iconItem} style={{ fontSize: 40 }} />
          </Link>
          <Link href="#" onClick={preventDefault}>
            <InstagramIcon className={classes.iconItem} style={{ fontSize: 40 }} />
          </Link>
          <Link href="#" onClick={preventDefault}>
            <TelegramIcon className={classes.iconItem} style={{ fontSize: 40 }} />
          </Link>
        </div>
      </Grid>
      <Grid item xs={12}>
        <div style={{ textAlign: 'center', display: 'block' }} >
          <Copyright />
        </div>
      </Grid>
    </Grid>
  );
}