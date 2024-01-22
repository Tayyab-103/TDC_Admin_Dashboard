/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Avatar, Paper, Typography, useTheme, withStyles } from '@material-ui/core';
import UpgradeIcon from '@material-ui/icons/Upgrade';

const styles = (theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: '16px',
    minHeight: theme.spacing(7),
    minWidth: theme.spacing(7),
    marginRight: theme.spacing(2),
    background: 'linear-gradient(135deg, #868CFF 0%, #4318FF 100%)'
  },
  icon: {
    color: 'white',
    width: theme.spacing(4),
    height: theme.spacing(7)
  },
  content: {
    display: 'flex',
    flexDirection: 'column'
  },
  title: {
    marginBottom: theme.spacing(1),
    fontWeight: 'bold',
    fontSize: theme.typography.pxToRem(16)
  },
  description: {
    fontSize: theme.typography.pxToRem(14),
    color: theme.palette.text.primary
  }
});

function ItemContent(props) {
  const { classes } = props;
  const theme = useTheme();

  return (
    <>
      <Paper className={classes.root}>
        <Avatar className={classes.icon}>
          <UpgradeIcon />
        </Avatar>
      </Paper>
      <div className={classes.content}>
        <Typography className={classes.title}>New Update: {props.info}</Typography>
        <div>
          <Typography className={classes.description}>A new update for your downloaded item is available!</Typography>
        </div>
      </div>
    </>
  );
}

export default withStyles(styles, { withTheme: true })(ItemContent);
