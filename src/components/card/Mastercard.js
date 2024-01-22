/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Box, Card, CardContent, Typography, Flex, Icon, Spacer } from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { RiMastercardFill } from 'react-icons/ri';

export default function Banner(props) {
  const { exp, cvv, number, ...rest } = props;

  return (
    <Card
      sx={{
        backgroundImage: "url('path/to/your/image.jpg')", // Replace with your image path
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        alignSelf: 'center',
        width: { base: '100%', md: '60%', xl: '99%' },
        backgroundPosition: '10%',
        marginX: 'auto',
        padding: '20px'
      }}
      {...rest}
    >
      <Flex sx={{ flexDirection: 'column', color: 'white', height: '100%', width: '100%' }}>
        <Flex sx={{ justifyContent: 'space-between', alignItems: 'center', marginBottom: '37px' }}>
          <Typography sx={{ fontSize: '2xl', fontWeight: 'bold' }}>Glassy.</Typography>
          <Icon component={RiMastercardFill} sx={{ width: '48px', height: 'auto', color: 'gray.400' }} />
        </Flex>
        <Spacer />
        <Flex sx={{ flexDirection: 'column' }}>
          <Box>
            <Typography sx={{ fontSize: { sm: 'xl', lg: 'lg', xl: 'xl' }, fontWeight: 'bold' }}>{number}</Typography>
          </Box>
          <Flex sx={{ marginTop: '14px' }}>
            <Flex sx={{ flexDirection: 'column', marginRight: '34px' }}>
              <Typography sx={{ fontSize: 'xs' }}>VALID THRU</Typography>
              <Typography sx={{ fontSize: 'sm', fontWeight: 500 }}>{exp}</Typography>
            </Flex>
            <Flex sx={{ flexDirection: 'column' }}>
              <Typography sx={{ fontSize: 'xs' }}>CVV</Typography>
              <Typography sx={{ fontSize: 'sm', fontWeight: 500 }}>{cvv}</Typography>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
}
