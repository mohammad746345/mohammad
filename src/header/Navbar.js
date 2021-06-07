import React from 'react'
import About from "../about/about";
import Products from '../products/Products';
import DemoRequest from '../sals/demoRequest'
import Services from '../services/Services';
import JoinUs from '../joinUs/joinUs';
import Carousell from "../home/carousell"
import ScrollspyNav from "react-scrollspy-nav";
import Grow from '@material-ui/core/Grow';
import DehazeIcon from '@material-ui/icons/Dehaze';
import Sidebar from './SideBar';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';

import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Zoom from '@material-ui/core/Zoom';

import './Navbar.css';

import StickyFooter from '../footer/Footer'
import { makeStyles } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PanelAdmin from "./panelAdmin"


const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(1),
    zIndex: 1
  },




}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,

  window: PropTypes.func,
};
















export default function Nav() {
  return (
    <Router>

      <Link to="/"></Link>

      <Link to="/P"></Link>




      <Switch>

        <Route path="/P">
          <PanelAdmin />
        </Route>
        <Route exact path="/">
          <NavBar />
        </Route>



      </Switch>
    </Router>
  );
}



function NavBar(props) {

  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div style={{ fontFamily: 'Vazir' }}>
      <ScrollspyNav
        scrollTargetIds={["section_1", "section_2", "section_3"]}
        offset={100}
        activeNavClass="is-active"
        scrollDuration="1000"
        headerBackground="true"
      >
        <Container maxWidth="lg">


          <AppBar style={{ display: 'grid', height: '120px', position: 'fixed', backgroundColor: 'white' }}>
            <span className='iconbutton'>
              <Button
                onClick={handleChange}> <DehazeIcon style={{ fontSize: 50, color: '#fb743e' }} />

              </Button>
            </span>

            <ul className='nav'>
              <Grow in={checked}>
                <li className='nav-item'
                >
                  <a href="/" className="nav-link">
                    صفحه ی اصلی
              </a>
                </li>
              </Grow>
              <Grow
                in={checked}
                style={{ transformOrigin: '0 0 0' }}
                {...(checked ? { timeout: 1000 } : {})}
              >
                <li className='nav-item'
                >
                  <a href="#about" className="nav-link">
                    درباره ما
              </a>
                </li>
              </Grow>

              <Grow
                in={checked}
                style={{ transformOrigin: '0 0 0' }}
                {...(checked ? { timeout: 1500 } : {})}
              >
                <li className='nav-item'
                >
                  <a href="#Products" className="nav-link">
                    محصولات
              </a>
                </li>
              </Grow>
              <Grow
                in={checked}
                style={{ transformOrigin: '0 0 0' }}
                {...(checked ? { timeout: 2000 } : {})}
              >
                <li className='nav-item'
                >
                  <a href="#Services" className="nav-link">
                    خدمات
              </a>
                </li>
              </Grow>
              <Grow
                in={checked}
                style={{ transformOrigin: '0 0 0' }}
                {...(checked ? { timeout: 2500 } : {})}
              >
                <li className='nav-item'
                >
                  <a href="#DemoRequest" className="nav-link">
                    درخواست دمو
              </a>
                </li>
              </Grow>
              <Grow
                in={checked}
                style={{ transformOrigin: '0 0 0' }}
                {...(checked ? { timeout: 3000 } : {})}
              >
                <li className='nav-item'
                >
                  <a href="#JoinUs" className="nav-link">
                    ارسال رزومه
              </a>
                </li>
              </Grow>
              <Grow
                in={checked}
                style={{ transformOrigin: '0 0 0' }}
                {...(checked ? { timeout: 3500 } : {})}
              >
                <li className='nav-item'
                >
                  <a href="#ContactUs" className="nav-link">
                    تماس
              </a>
                </li>
              </Grow>
            </ul>


            <div className='sidebar'>
              <Sidebar />
            </div>
          </AppBar>

        </Container>
        <Toolbar id="back-to-top-anchor" />

        <ScrollTop {...props}>
          <Fab size="large" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </ScrollspyNav>

      <div>
        <div id="/"><Carousell /></div>
        <div id="about"><About /></div>
        <div id="Products"><Products /></div>
        <div id="Services"><Services /></div>

        <div id="DemoRequest"><DemoRequest /></div>
        <div id="JoinUs"><JoinUs /></div>
        <div id="StickyFooter"><StickyFooter /></div>

      </div>
    </div>

  );
}


