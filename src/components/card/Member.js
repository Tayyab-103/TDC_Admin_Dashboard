/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Avatar, Card, CardContent, IconButton, Tooltip, Typography, Box } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function Default(props) {
  const { avatar, name, job, ...rest } = props;
  const textColor = '#333'; // Replace with your desired color
  const bg = '#fff'; // Replace with your desired color
  const shadow = '0px 18px 40px rgba(112, 144, 176, 0.12)'; // Replace with your desired shadow

  return (
    <Card sx={{ boxShadow: shadow, paddingY: '10px', backgroundColor: bg }} {...rest}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Avatar
            sx={{
              height: { base: '48px', xl: '36px', '2xl': '48px' },
              width: { base: '48px', xl: '36px', '2xl': '48px' },
              marginRight: '20px'
            }}
            src={avatar}
          />
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
            <Typography
              sx={{
                color: textColor,
                fontSize: { base: 'md', xl: 'sm', '3xl': 'md' },
                fontWeight: 700
              }}
            >
              {name}
            </Typography>
            <Typography
              sx={{
                color: 'secondaryGray.600',
                textAlign: 'left',
                fontSize: { base: 'sm', xl: 'xs', '3xl': 'sm' },
                fontWeight: 400
              }}
            >
              {job}
            </Typography>
          </Box>
        </Box>

        <Tooltip title="More Options">
          <IconButton sx={{ marginLeft: 'auto', marginBottom: '0px' }}>
            <MoreVertIcon sx={{ width: '24px', height: '24px', color: textColor }} />
          </IconButton>
        </Tooltip>
      </Box>
    </Card>
  );
}
