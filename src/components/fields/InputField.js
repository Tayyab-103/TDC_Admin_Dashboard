/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { FormControl, InputLabel, Input, FormHelperText, makeStyles } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginBottom: (props) => (props.mb ? theme.spacing(props.mb) : theme.spacing(3)),
    width: '100%'
  },
  inputLabel: {
    display: 'flex',
    marginLeft: theme.spacing(1),
    fontSize: theme.typography.pxToRem(14),
    fontWeight: 'bold',
    color: theme.palette.secondary.dark,
    '&:hover': {
      cursor: 'pointer'
    }
  },
  input: {
    fontWeight: 500,
    height: '44px',
    maxHeight: '44px'
  },
  formHelperText: {
    fontSize: theme.typography.pxToRem(12),
    fontWeight: '400',
    color: theme.palette.secondary[600]
  }
}));

export default function Default(props) {
  const classes = useStyles(props);
  const { id, label, extra, placeholder, type, mb, ...rest } = props;

  return (
    <FormControl className={classes.formControl}>
      <InputLabel className={classes.inputLabel} htmlFor={id}>
        {label}
      </InputLabel>
      <Input {...rest} type={type} id={id} className={classes.input} placeholder={placeholder} />
      {extra && <FormHelperText className={classes.formHelperText}>{extra}</FormHelperText>}
    </FormControl>
  );
}
