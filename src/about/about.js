
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CheckIcon from '@material-ui/icons/Check';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
  root: {
position:'relative' ,
top:170,
left:20
 },
  paper: {
    textAlign: 'right',
    
    
  },
  paperh1:{
    textAlign: 'center',
fontSize:'25px',
color:'#fb743e'
  },
  paperp:{
    fontSize:'16px',
    textAlign:'justify',
    lineHeight:'1.8',
    color:"black",
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <div className={classes.paper}>
            <h2 className={classes.paperh1}>
              الگوریتم پارس در یک نگاه
            </h2>
            <ul >
                <p className={classes.paperp}>
                  بکارگيري سيستم هاي مکانيـزه مي تواند ضـريب اطمينـان اجراي صحيح
                  و دقيق همـه برنامه ها را بالا بـرده و کمک موثري بـه اشـراف کلي
                  مديـران بر سازمان نمايد و آنها را در اخـذ تصميمـات صحيـح و
                  منـاسب يـاري دهـد در هميـن راستا شرکت داده پردازي الگوريتم
                  پارس رسالت خود را در زمينه مطالعه، طراحي، مشاوره و اجراي
                  سيستمها و روشهاي مديريتي، راه حلهاي نرم افزاري و توليد نرم
                  افزارهاي سفارشي از مدتها پيش آغاز نموده و هم اکنون به عنوان
                  پيشرو و صاحب سبـک در عرضـه انواع نـرم افزارهاي راهبردي مطرح
                  است. ايـن شـرکت بـا بکارگيــري مهنـدسيـن و کارشنـاسـان مجـرب
                  در زمينـه تحليـــل و طــراحي سيستــم هـا، بـرنامه نويسـان
                  خبـره و پرسنل کارآمد در کنار متخصصان و کارشناسان در زمينــه
                  هاي تخصصي مختلف به توليد نرم افزارهاي کاربردي مي پردازد
                </p>
            </ul>
          </div>
          
        </Grid>
        <Grid item sm={12} md={6}>
              <div className={classes.paper}>
                <h2 style={{marginRight:'40px',fontSize:'20px',color:'#fb743e'}}>اهداف</h2>

                <ul>
                  <p className={classes.paperp}>
                    <span
                      style={{ color: "#f5831a" }}
                    >
                      <CheckIcon />
                    </span>
                    حضور در عرصه رقابت جهانی در حوزه فعالیتهای شرکت
                  </p>
                  <p className={classes.paperp}>
                    <span
                      style={{ color: "#f5831a" }}
                    >
                      <CheckIcon />
                    </span>
                    افزایش سرعت و کیفیت خدمات به مشتریان
                  </p>
                  <p className={classes.paperp}>
                    <span
                      style={{ color: "#f5831a" }}
                    >
                      <CheckIcon />
                    </span>
                    افزایش رضایتمندی ذینفعان
                  </p>
                  <p className={classes.paperp}>
                    <span
                      style={{ color: "#f5831a" }}
                    >
                      <CheckIcon />
                    </span>
                    ارتقاء سهم بازار
                  </p>
                  <p className={classes.paperp}>
                    <span
                      style={{ color: "#f5831a" }}
                    >
                      <CheckIcon />
                    </span>
                    توسعه تحقیق و پژوهش
                  </p>
                </ul>
              </div>
        </Grid>
        <Grid item sm={12} md={6}>
          <div className={classes.paper}>
                <h2 style={{marginRight:'35px',fontSize:'20px',color:'#fb743e'}}>ماموریت</h2>
                <p className={classes.paperp} style={{marginRight:'30px'}}>
                  ماموریت شرکت داده پردازی الگوریتم پارس کمک به سازمانها و شرکت
                  ها در جهت رسیدن به اهداف مورد نظر و بالا بردن سطح بهره وری می
                  باشد. این مهم از طریق مشاوره های تخصصی و آموزش و معماری
                  سازمانی و ارائه سیستم ها و راه حل های نرم افزاری پس از شناخت
                  کامل نیازهای واقعی مشتریان انجام می پذیرد
                </p>
              </div>
        </Grid>
      </Grid>
    </Container>
  );
}