import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import { Grid, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Info() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    bottom: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.root, {
        [classes.fullList]: anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Grid container spacing={5}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <h1>About</h1>
            <h3>lorem description</h3>
            <h3>github source code</h3>
            <h3>portfolio link</h3>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <h1>interface controls</h1>
            <h3>Set star quantity</h3>
            <h3>Set scale/mode</h3>
            <h3>Set tones</h3>
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
        
        <Drawer anchor={'bottom'} open={state['bottom']} onClose={toggleDrawer('bottom', false)}>
          {list('bottom')}
        </Drawer>
      </>
  );
}
