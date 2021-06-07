import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import Link from '@material-ui/core/Link';
import InstagramIcon from '@material-ui/icons/Instagram';
import TelegramIcon from '@material-ui/icons/Telegram';
import FacebookIcon from '@material-ui/icons/Facebook';
import Grid from '@material-ui/core/Grid';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: 'none',
    
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
 
  listitem:{
    textDecoration: 'none',
color:'black',
padding:'7px',
fontSize: '16px',
margin:'1px',
borderRadius: '15px',
transition: 'all 0.4s ease-in-out',


'&:hover': {
  background: "#db6400",
  borderRadius: '20px',
  paddingLeft:'90px',
  color:'#ffffff',



},


  }
}));

export default function PersistentDrawerRight() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const preventDefault = (event) => event.preventDefault();


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
     
        <Toolbar>
         
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(open && classes.hide)}
            style={{fontSize:'105px',color:'#fb743e',position:'relative',bottom:20}}
          >
            <MenuIcon style={{fontSize:'40px'}}/>
          </IconButton>
        </Toolbar>
      
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List className={classes.list}>

            <ListItem button >
            <a href="/" className={classes.listitem}>
              صفحه ی اصلی
            </a>
            </ListItem>
            <hr style={{marginTop:'-4px',marginBottom:'-4px'}} />

            <ListItem >
            <a href="#about" className={classes.listitem}>
             درباره ی ما
            </a>
            </ListItem>
            <hr style={{marginTop:'-4px',marginBottom:'-4px'}}/>

            <ListItem >
            <a href="#Products" className={classes.listitem}>
          محصولات 
            </a>
            </ListItem>
            <hr style={{marginTop:'-4px',marginBottom:'-4px'}}/>

            <ListItem>
            <a href="#Services" className={classes.listitem}>
              خدمات
            </a>
            </ListItem>
            <hr style={{marginTop:'-4px',marginBottom:'-4px'}}/>

            <ListItem >
            <a href="#DemoRequest" className={classes.listitem}>
            درخواست دمو
            </a>
            </ListItem>
            <hr style={{marginTop:'-4px',marginBottom:'-4px'}}/>

              <ListItem >
            <a href="#JoinUs" className={classes.listitem}>
            ارسال رزومه
            </a>
            </ListItem>
            <hr style={{marginTop:'-4px',marginBottom:'-4px'}}/>

            <ListItem >
            <a href="#ContactUs" className={classes.listitem}>
              تماس
            </a>
            </ListItem>
          
        </List>
       
        <Divider />
        <Grid  container
  direction="row"
  justify="center"
  alignItems="center"
>
        <div className={classes.Icon}>
          <Link href="#" onClick={preventDefault}>
            <FacebookIcon  style={{ fontSize: 40 , marginTop:'55px',color:"#eb5e0b"}} />
          </Link>
          <Link href="#" onClick={preventDefault}>
            <InstagramIcon  style={{ fontSize: 40,color:"#eb5e0b" }} />
          </Link>
          <Link href="#" onClick={preventDefault}>
            <TelegramIcon  style={{ fontSize: 40,color:"#eb5e0b" }} />
          </Link>
        </div>
      </Grid>
        
      </Drawer>
    </div>
  );
}
