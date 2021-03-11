import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';

function Navigation(props) {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      background: '#0b0412'
      // background: "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/stars.png')"
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      background: '#251b36',
      opacity: '1',
      color: '#513f57',
      height: '100%'
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
              <hr/>
              <p>Greetings and welcome to the constellation drawing music app, a place in the digital void with stellar synth sounds for infinite astro-jams.</p>
              <p>In the spirit of the great mathematically-minded audiophiles from Pythagoras to Keppler, <em>Musica Universalis</em>--a reference to the metaphysical concept also known as the "music of the spheres"--was developed with the goal to further explore the relations between sound and shapes, harmony and space.</p>
              <p>In the very least, the intention here is to invoke and highlight the fundamental human instinct for play and curiosity, and to observe the often strange, emergent visual or aural patterns that arise.</p>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <h1>Ground Control</h1>
              <hr/>
              <br/>
              <Typography id="discrete-slider" gutterBottom>
                Set star quantity
              </Typography>
              <br/>
              <Slider
                defaultValue={42}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={1}
                min={0}
                max={365}
                onChangeCommitted={(e,val) => props.onSetStarQuantity(e, val)}
              />
              <br/>
              <Typography id="discrete-slider" gutterBottom>
                Set line quantity
              </Typography>
              <br/>
              <Slider
                defaultValue={12}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={1}
                min={0}
                max={365}
                onChangeCommitted={(e,val) => props.onSetLineQuantity(e, val)}
              />
              <br/>
              <Typography id="discrete-slider" gutterBottom>
                Set theme
              </Typography>
              <br/>
              <Slider
                defaultValue={1}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={1}
                marks
                min={1}
                max={5}
                onChangeCommitted={(e,val) => props.onSetTheme(e, val)}
              />
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <h1>Links</h1>
              <small>(under construction)</small>
              <hr/>
              <p><a href='https://github.com/cordenbrock/musica-universalis'>source code</a></p>
              <p>gallery</p>
              <p>portfolio</p>
              <h1>Acknowledgements</h1>
              <hr/>
              <p>Also, a cosmic-size shoutout to all my amazing peers in the October-2020 Epicodus cohort and the incredible support from the Epicodus staff who helped maintain my proverbial orbit through the code-o-sphere.</p>
              <p>Lastly, credit for the wisdom of the moon goes to Shawn's illustrious standup sign-off, stay magical y'all</p>
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
            onClose={toggleDrawer('bottom', false)} >
            {drawer('bottom')}
          </Drawer>
        </>
    );
  }
  

export default Navigation;