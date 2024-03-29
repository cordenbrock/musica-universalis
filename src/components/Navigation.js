import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import NavigationButton from "./NavigationButton";

function Navigation(props) {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      background: '#0b0412'
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
  const [state, setState] = useState({
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
            <hr />
            <p>Greetings and welcome to the constellation drawing music app, a place in the digital void with stellar synth sounds for infinite astro-jams.</p>
            <p>In the spirit of the great mathematically-minded audiophiles from Pythagoras to Keppler, <em>Musica Universalis</em>--a reference to the metaphysical concept also known as the "music of the spheres"--was developed with the goal to further explore the relations between sound and shapes, harmony and space.</p>
            <p>In the very least, the intention here is to invoke and highlight the fundamental human instinct for play and curiosity, and to tap into the often strange, emergent visual or aural patterns that arise.</p>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <h1>Ground Control</h1>
            <hr />
            <br />
            <Typography id="discrete-slider" gutterBottom>
              Set star quantity
            </Typography>
            <br />
            <Slider
              defaultValue={42}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={1}
              min={0}
              max={365}
              onChangeCommitted={(e, val) => props.onSetStarQuantity(e, val)}
            />
            <br />
            <Typography id="discrete-slider" gutterBottom>
              Set line quantity
            </Typography>
            <br />
            <Slider
              defaultValue={12}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={1}
              min={0}
              max={365}
              onChangeCommitted={(e, val) => props.onSetLineQuantity(e, val)}
            />
            <br />
            <Typography id="discrete-slider" gutterBottom>
              Set theme
            </Typography>
            <br />
            <Slider
              defaultValue={1}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={1}
              marks
              min={1}
              max={5}
              onChangeCommitted={(e, val) => props.onSetTheme(e, val)}
            />
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <h1>Links</h1>
            <hr />
            <div>
              <h4>GitHub</h4>
              <a href='https://github.com/cordenbrock/musica-universalis' style={{ textDecorationLine: 'none' }}>Source Code</a>
            </div>
            <br />
            <div>
              <h4>Support</h4>
              <a href="https://www.buymeacoffee.com/corynordenbrock" rel="noreferrer" target="_blank">
                <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style={{ width: '50%', height: 'auto' }} />
              </a>
            </div>
            <br />

            <h1>Acknowledgements</h1>
            <hr />
            <p>A cosmic-size shoutout to all my amazing peers in the October-2020 Epicodus cohort and the incredible support from the Epicodus staff who helped maintain my proverbial orbit through the code-o-sphere.</p>
            <p>Lastly, credit for the wisdom of the moon goes to Shawn's illustrious standup sign-off, stay magical y'all.</p>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );

  return (
    <>
      <div>
        <NavigationButton onClick={toggleDrawer('bottom', true)}>|| &nbsp; Musica Universalis &nbsp; ||</NavigationButton>
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