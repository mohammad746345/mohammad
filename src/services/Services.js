import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Bounce from 'react-reveal/Bounce';
import Container from '@material-ui/core/Container';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import { orange } from '@material-ui/core/colors';
import EventSeatIcon from '@material-ui/icons/EventSeat';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import DevicesRoundedIcon from '@material-ui/icons/DevicesRounded';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: 'relative',
    top: 180
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'justify',
    position: 'relative',
    bottom: 70,
    fontSize: '16px',
    lineHeight: "1.8",
    left: 30,
    textIndent: '25px',
    '@media (max-width: 1024px)': {
      right: 10
    }



  },
  paperLeft: {
    padding: theme.spacing(1),
    textAlign: 'justify',
    position: 'relative',
    bottom: 60,
    fontSize: '16px',
    lineHeight: "1.8",
    right: 30,
    textIndent: '25px',
    '@media (max-width: 1024px)': {
      right: 10
    }
  },

  pp: {
    padding: theme.spacing(1),
    textAlign: 'justify',
    position: 'relative',
    bottom: 20,
    fontSize: '16px',
    lineHeight: "1.8",
    right: 30,
    textIndent: '25px',
    '@media (max-width: 1024px)': {
      bottom: 10,
      right: 0,
      marginLeft: '20px'

    },

  },
  h1: {
    textAlign: 'center',
    fontSize: '35px',
    color: '#fb743e',
    position: 'relative',

  }
}));
export default function Services() {
  const classes = useStyles();

  return (
    <Container maxWidth="md">

      <div className={classes.root}>
        <h1 className={classes.h1}>خدمات</h1>
        <Grid container>

          <Grid item sm={12} lg={6}>
            <div>
              <Bounce bottom cascade>
                <div className={classes.paper}>
                  <h3><span><CastForEducationIcon style={{ position: 'relative', left: 60, top: 20, color: orange[800], fontSize: 50 }} /></span><span style={{ position: 'relative', left: 50 }}>اموزش</span></h3>
                  <p className={classes.pp}>
                    ما همواره در تلاش هستیم تا بهره وری مشتریان از نرم افزار به
                    بالاترین حد ممکن برسد و نرم افزار در محیط مشتری به صورت
                    عملیاتی و کاربردی درآید. از این رو تمرکز ویژه ای به فرآیند
                    استقرار محصولات خود داشته ایم و کارشناسان ما پس از نصب نرم
                    افزار در محیط مشتری، با برنامه ریزی دقیق مراحل لازم را برای
                    استقرار نرم افزار در محل مشتری دنبال می کنند.
                  </p>
                </div>
              </Bounce>
            </div>
          </Grid>
          <Grid item sm={12} lg={6}>
            <Bounce bottom cascade>

              <div className={classes.paperLeft}>
                <h3><span><EventSeatIcon style={{ position: 'relative', top: 15, color: orange[800], fontSize: 50 }} /></span><span style={{ marginRight: '10px' }}>استقرار</span></h3>
                <p className={classes.pp}>
                  ما بر این باوریم که آموزش نقطه آغاز بهره وری است. داشتن
                  کاربرانی ماهر و آموزش دیده به شما امکان می دهد که بیشترین
                  سود را از سرمایه گذاری خود در خرید محصولات ما ببرید. با توجه
                  به نکته فوق، آموزشهای این شرکت در دو سطح کاربری و مدیریتی و
                  در چند مرحله با فواصل زمانی مناسب برگزار گردیده تا آموزشها
                  اثربخش بوده و افراد آموزش دیده بتوانند پس از پایان آموزش
                  استفاده و بهره برداری از نرم افزار را مستقلاً دنبال نمایند.
                  </p>
              </div>
              <div>

              </div>


            </Bounce>
          </Grid>


          <Grid item sm={12} lg={6}>
            <Bounce bottom cascade>

              <div className={classes.paper}>
                <h3><span><ContactPhoneIcon style={{ position: 'relative', left: 60, top: 20, color: orange[800], fontSize: 50 }} /></span><span style={{ position: 'relative', left: 50 }}></span><span style={{ position: 'relative', left: 50 }}>پشتیبانی</span></h3>

                <p className={classes.pp} style={{ fontFamily: 'Vazir' }}>
                  بی شک مهم ترین ارکان تشکیل دهنده یک شرکت نرم افزاری، بخش
                  خدمات پس از فروش می باشد. با توجه به اهمیت این موضوع و به
                  منظور ارائه بهترین سرویس، در این بخش از افراد متخصص و متعهدی
                  بهره گرفته شده است تا بتوانند با بکارگیری توان فنی و که به
                  طرق زیر امکان پذیر است
                  </p>
                <p className={classes.pp}>


                  <b>پاسخگویی تلفنی:</b> کارشناسان شرکت با راهنمایی و گفتگوی تلفنی،
                    شما را در رفع اشکالات فنی محصول راهنمایی می کنند.
                  </p>
                <p className={classes.pp}>

                  <b>  رفع اشکالات بصورت غیر حضوری:</b> کارشناسان فنی شرکت از طریق
                    امکانات شبکه مانند سرویس Remote اقدام به رفع اشکال بوجود
                    آمده می کنند.
                  </p>
                <p className={classes.pp}>


                  <b> مراجعه حضوری:</b> در موارد ضروری و با انجام هماهنگی های لازم،
                    کارشناسان با مراجعه به محل کاربر نسبت به رفع مشکل بوجود آمده
                    اقدام می نمایند. انش علمی خود پاسخگوی نیازهای شما مشتریان
                    گرامی باشد{" "}
                </p>
              </div>
            </Bounce>
          </Grid>
          <Grid item sm={12} lg={6}>
            <Bounce bottom cascade>

              <div className={classes.paperLeft}>
                <h3><span><DevicesRoundedIcon style={{ position: 'relative', top: 20, color: orange[800], fontSize: 50 }} /></span><span style={{ position: 'relative', left: 50 }}></span><span style={{ position: 'relative' }}>تولید نرم افزارهای سفارشی</span></h3>

                <p className={classes.pp}>
                  ما بر این باوریم که آموزش نقطه آغاز بهره وری است. داشتن
                  کاربرانی ماهر و آموزش دیده به شما امکان می دهد که بیشترین
                  سود را از سرمایه گذاری خود در خرید محصولات ما ببرید. با توجه
                  به نکته فوق، آموزشهای این شرکت در دو سطح کاربری و مدیریتی و
                  در چند مرحله با فواصل زمانی مناسب برگزار گردیده تا آموزشها
                  اثربخش بوده و افراد آموزش دیده بتوانند پس از پایان آموزش
                  استفاده و بهره برداری از نرم افزار را مستقلاً دنبال نمایند.
                  </p>
              </div>
            </Bounce>
          </Grid>





        </Grid>
      </div>
    </Container>
  );
}

