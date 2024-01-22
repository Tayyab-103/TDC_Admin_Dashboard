/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { TextField, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export function SearchBar(props) {
  const { variant, background, placeholder, borderRadius, Filter, ...rest } = props;

  const [search, setSearch] = useState('');
  const handleInputChange = (value) => {
    setSearch(value);
    Filter(value);
  };

  // Material-UI styles
  const searchIconColor = '#757575'; // Adjust color as needed
  const inputBg = background ? background : 'rgba(255, 255, 255, 0.7)'; // Adjust background color as needed
  const inputText = '#333'; // Adjust text color as needed

  return (
    <TextField
      variant="outlined"
      size="small"
      fullWidth
      InputProps={{
        startAdornment: (
          <IconButton
            style={{
              backgroundColor: 'inherit',
              borderRadius: 'inherit'
            }}
          >
            <SearchIcon style={{ color: searchIconColor, width: '15px', height: '15px' }} />
          </IconButton>
        ),
        sx: {
          borderRadius: borderRadius ? borderRadius : '30px',
          backgroundColor: inputBg,
          '& input': {
            color: inputText
          },
          '& ::placeholder': {
            color: 'gray.400',
            fontSize: '14px'
          }
        }
      }}
      placeholder={placeholder ? placeholder : 'Search...'}
      value={search}
      onChange={(e) => {
        handleInputChange(e.target.value);
      }}
      {...rest}
    />
  );
}
