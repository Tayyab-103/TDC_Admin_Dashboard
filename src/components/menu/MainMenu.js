/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import { IconButton, Menu, MenuItem, Typography, Paper, Popper, Grow, ClickAwayListener } from '@mui/material';
import {
  MoreHoriz as MoreHorizIcon,
  Person as PersonIcon,
  CardTravel as CardTravelIcon,
  Lightbulb as LightbulbIcon,
  Settings as SettingsIcon
} from '@mui/icons-material';

export default function Banner(props) {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const handleListKeyDown = (event) => {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  };

  const textColor = 'rgba(0, 0, 0, 0.87)';
  const textHover = { color: 'rgba(0, 0, 0, 0.87)', backgroundColor: 'rgba(0, 0, 0, 0.04)' };
  const iconColor = '#1976D2';
  const bgList = 'white';
  const bgShadow = '14px 17px 40px 4px rgba(112, 144, 176, 0.08)';
  const bgButton = 'rgba(0, 0, 0, 0.08)';
  const bgHover = { backgroundColor: 'rgba(0, 0, 0, 0.12)' };
  const bgFocus = { backgroundColor: 'rgba(0, 0, 0, 0.08)' };

  return (
    <div>
      <IconButton
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        style={{
          backgroundColor: bgButton,
          ...bgHover,
          ...bgFocus,
          width: '37px',
          height: '37px',
          borderRadius: '10px'
        }}
        {...props}
      >
        <MoreHorizIcon style={{ color: iconColor, width: '24px', height: '24px' }} />
      </IconButton>
      <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'
            }}
          >
            <Paper style={{ boxShadow: bgShadow, borderRadius: '20px', padding: '15px' }}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="menu-list-grow"
                  onKeyDown={handleListKeyDown}
                  style={{ backdropFilter: 'blur(63px)', backgroundColor: bgList }}
                >
                  <MenuItem
                    onClick={handleClose}
                    sx={{
                      borderRadius: '8px',
                      ':hover': textHover
                    }}
                  >
                    <PersonIcon style={{ height: '16px', width: '16px', marginRight: '8px' }} />
                    <Typography variant="body2" fontWeight="400">
                      Panel 1
                    </Typography>
                  </MenuItem>
                  {/* Repeat similar structure for other menu items */}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
}
