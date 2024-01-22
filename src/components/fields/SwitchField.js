/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { FormControlLabel, Switch as MuiSwitch, Typography } from '@mui/material';

export default function Default(props) {
  const { id, label, isChecked, onChange, desc, textWidth, reversed, fontSize, ...rest } = props;
  const [checked, setChecked] = useState(isChecked);

  const handleChange = () => {
    setChecked(!checked);
    if (onChange) {
      onChange(!checked);
    }
  };

  return (
    <FormControlLabel
      control={<MuiSwitch id={id} color="primary" checked={checked} onChange={handleChange} {...rest} />}
      labelPlacement={reversed ? 'start' : 'end'}
      label={
        <div style={{ maxWidth: textWidth ? textWidth : '75%' }}>
          <Typography variant="body1" fontWeight="bold" color="textPrimary">
            {label}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {desc}
          </Typography>
        </div>
      }
    />
  );
}
