import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
// import About from './About';

function Navigation(props) {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      background: '#110012',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      background: '#251b36',
      opacity: '1',
      color: '#513f57',
    },
  }));

    const classes = useStyles();
    const [state, setState] = React.useState({
      bottom: false,
    });

    function valuetext(value) {
      return `${value}`;
    }
  
    const toggleDrawer = (anchor, open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
  
      setState({ ...state, [anchor]: open });
    };
  
    const drawer = (anchor) => (
      <div
        className={clsx(classes.root, {
          [classes.root]: anchor === 'bottom',
        })}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <h1>About</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <h1>Interface Controls</h1>
              <Typography id="discrete-slider" gutterBottom>
                Set star quantity
              </Typography>
              <Slider
                defaultValue={42}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={1}
                marks
                min={5}
                max={42}
                onChangeCommitted={(e,val) => props.onSetStarQuantity(e, val)}
              />
              {console.log()}
              <Typography id="discrete-slider" gutterBottom>
                Set star quantity
              </Typography>
              <Slider
                defaultValue={42}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={1}
                marks
                min={5}
                max={42}
              />
              <Typography id="discrete-slider" gutterBottom>
                Set line quantity
              </Typography>
              <Slider
                defaultValue={42}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={1}
                marks
                min={5}
                max={365}
              />
              <h3>Set scale/mode</h3>
              <h3>Set tones</h3>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <h1>Resources (under construction)</h1>
              <h3>github source code</h3>
              <h3>portfolio link</h3>
              <h3>Gallery</h3>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  
  
    const styledButton = {
      color:'white',
      position: 'fixed',
      width: '100%',
      bottom: '10px',
      margin:'auto',
    }
  
    return (
        <>
          <div>
            <Button style={styledButton} onClick={toggleDrawer('bottom', true)}>|| &nbsp; Musica Universalis &nbsp; ||</Button>
          </div>
          
          <Drawer 
            anchor={'bottom'}
            open={state['bottom']}
            onClose={toggleDrawer('bottom', false)}
            variant={'persistent'} >
            {drawer('bottom')}
          </Drawer>
        </>
    );
  }
  

export default Navigation;