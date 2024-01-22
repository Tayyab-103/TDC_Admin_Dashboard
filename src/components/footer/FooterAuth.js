import React from 'react';
import { Box, Link, List, ListItem, Typography, useTheme } from '@mui/material';

export default function Footer() {
  const theme = useTheme();
  const textColor = theme.palette.mode === 'light' ? 'gray.400' : 'white';
  const linkColor = theme.palette.mode === 'light' ? { base: 'gray.400', lg: 'white' } : 'white';

  return (
    <Box
      zIndex="3"
      sx={{
        display: 'flex',
        flexDirection: { base: 'column', lg: 'row' },
        alignItems: { base: 'center', xl: 'start' },
        justifyContent: 'space-between',
        paddingX: { base: '30px', md: '0px' },
        paddingBottom: '30px'
      }}
    >
      <Typography color={textColor} textAlign={{ base: 'center', xl: 'start' }} marginBottom={{ base: '20px', lg: '0px' }}>
        &copy; {1900 + new Date().getYear()}
        <span style={{ fontWeight: 500, marginLeft: '4px' }}>
          Material UI. All Rights Reserved. Made with love by
          <Link mx="3px" color={textColor} href="https://www.simmmple.com?ref=horizon-chakra-free" target="_blank" fontWeight="700">
            Simple!
          </Link>
        </span>
      </Typography>
      <List sx={{ display: 'flex' }}>
        <ListItem marginRight={{ base: '20px', md: '44px' }}>
          <Link fontWeight="500" color={linkColor} href="mailto:hello@simmmple.com?ref=horizon-chakra-free">
            Support
          </Link>
        </ListItem>
        <ListItem marginRight={{ base: '20px', md: '44px' }}>
          <Link fontWeight="500" color={linkColor} href="https://www.simmmple.com/licenses?ref=horizon-chakra-free">
            License
          </Link>
        </ListItem>
        <ListItem marginRight={{ base: '20px', md: '44px' }}>
          <Link fontWeight="500" color={linkColor} href="https://simmmple.com/terms-of-service?ref=horizon-chakra-free">
            Terms of Use
          </Link>
        </ListItem>
        <ListItem>
          <Link fontWeight="500" color={linkColor} href="https://www.blog.simmmple.com/?ref=horizon-chakra-free">
            Blog
          </Link>
        </ListItem>
      </List>
    </Box>
  );
}
