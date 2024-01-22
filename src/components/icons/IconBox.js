/* eslint-disable react/prop-types */
import React from 'react';
import { Box } from '@mui/material';

export default function IconBox(props) {
  const { icon, ...rest } = props;

  return (
    <Box display="flex" alignItems="center" justifyContent="center" borderRadius="50%" {...rest}>
      {icon}
    </Box>
  );
}
