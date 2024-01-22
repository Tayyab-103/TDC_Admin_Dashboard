/* eslint-disable no-unused-vars */
import React from 'react';
import { Box, Link, Typography, useTheme, IconButton } from '@mui/material';
import { Brightness4 as Brightness4Icon, Brightness7 as Brightness7Icon } from '@mui/icons-material';

export default function Footer() {
  const theme = useTheme();
  const textColor = theme.palette.mode === 'light' ? 'gray.400' : 'white';

  return (
    <Box
      zIndex="3"
      sx={{
        display: 'flex',
        flexDirection: { base: 'column', xl: 'row' },
        alignItems: { base: 'center', xl: 'start' },
        justifyContent: 'center',
        paddingX: { base: '30px', md: '50px' },
        paddingBottom: '30px'
      }}
    >
      <Typography color={textColor} textAlign={{ base: 'center', xl: 'start' }} marginBottom={{ base: '20px', xl: '0px' }}>
        &copy; {1900 + new Date().getYear()}
        <span style={{ fontWeight: 500, marginLeft: '4px' }}>TDC. All Rights Reserved.</span>
      </Typography>
      {/* <Box display="flex">
        <Box
          marginRight={{ base: '20px', md: '44px' }}
        >
          <Link
            fontWeight="500"
            color={textColor}
            href="mailto:hello@simmmple.com"
          >
            Support
          </Link>
        </Box>
        <Box
          marginRight={{ base: '20px', md: '44px' }}
        >
          <Link
            fontWeight="500"
            color={textColor}
            href="https://www.simmmple.com/licenses?ref=horizon-chakra-free"
          >
            License
          </Link>
        </Box>
        <Box
          marginRight={{ base: '20px', md: '44px' }}
        >
          <Link
            fontWeight="500"
            color={textColor}
            href="https://simmmple.com/terms-of-service?ref=horizon-chakra-free"
          >
            Terms of Use
          </Link>
        </Box>
        <Box>
          <Link
            fontWeight="500"
            color={textColor}
            href="https://www.blog.simmmple.com/?ref=horizon-chakra-free"
          >
            Blog
          </Link>
        </Box>
      </Box> */}
    </Box>
  );
}
