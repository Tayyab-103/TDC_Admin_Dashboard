/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Card, CardContent, Typography, Box, IconButton, Tooltip } from '@mui/material';

export default function Default(props) {
  const { startContent, endContent, name, growth, value } = props;
  const textColor = 'rgba(0, 0, 0, 0.87)'; // Replace with your desired color
  const textColorSecondary = 'rgba(0, 0, 0, 0.54)'; // Replace with your desired color

  return (
    <Card sx={{ paddingY: '15px' }}>
      <Box
        sx={{
          display: 'flex',
          marginY: 'auto',
          height: '100%',
          alignItems: { xs: 'center', xl: 'flex-start' },
          justifyContent: { xs: 'center', xl: 'center' }
        }}
      >
        {startContent}

        <CardContent sx={{ marginLeft: startContent ? '18px' : '0px' }}>
          <Typography variant="body2" color={textColorSecondary} fontSize={{ xs: 'sm' }}>
            {name}
          </Typography>
          <Typography variant="h5" color={textColor} fontSize={{ xs: '2xl' }}>
            {value}
          </Typography>
          {growth && (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography color="green" fontSize="xs" fontWeight="700" marginRight="5px">
                {growth}
              </Typography>
              <Typography color={textColorSecondary} fontSize="xs" fontWeight="400">
                since last month
              </Typography>
            </Box>
          )}
        </CardContent>

        <Box sx={{ marginLeft: 'auto', width: 'max-content' }}>{endContent}</Box>
      </Box>
    </Card>
  );
}
