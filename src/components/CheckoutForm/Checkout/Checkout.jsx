import React from 'react';
import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  CircularProgress,
  Divider,
  Button
} from '@material-ui/core';

const Checkout = () => {
  return (
    <>
      <div className={classes.toolbar}></div>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant='h4' align='center'>
            Checkout
          </Typography>
          <Stepper activeStep={0} className={classes.stepper}></Stepper>
        </Paper>
      </main>
    </>
  );
};

export default Checkout;
