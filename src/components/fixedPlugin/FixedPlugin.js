import React from 'react';
import { IconButton } from '@mui/material';
import { Brightness4 as Brightness4Icon, Brightness7 as Brightness7Icon } from '@mui/icons-material';

export default function FixedPlugin(props) {
  const { ...rest } = props;
  const { colorMode, toggleColorMode } = colorMode();
  const bgButton = 'linear-gradient(135deg, #868CFF 0%, #4318FF 100%)';

  return (
    <IconButton
      {...rest}
      style={{
        height: '60px',
        width: '60px',
        zIndex: 99,
        background: bgButton,
        position: 'fixed',
        left: document.documentElement.dir === 'rtl' ? '35px' : '',
        right: document.documentElement.dir === 'rtl' ? '' : '35px',
        bottom: '30px',
        border: '1px solid',
        borderColor: '#6A53FF',
        borderRadius: '50px',
        display: 'flex',
        padding: '0px',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      onClick={toggleColorMode}
    >
      {colorMode === 'light' ? <Brightness4Icon style={{ color: 'white' }} /> : <Brightness7Icon style={{ color: 'white' }} />}
    </IconButton>
  );
}
