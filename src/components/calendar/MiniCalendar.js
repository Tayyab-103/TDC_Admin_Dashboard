/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export default function MiniCalendar(props) {
  const { selectRange, ...rest } = props;
  const [value, onChange] = useState(new Date());

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: 'max-content',
        padding: '20px 15px',
        height: 'max-content',
        ...rest
      }}
    >
      <CardContent>
        <Calendar
          onChange={onChange}
          value={value}
          selectRange={selectRange}
          view={'month'}
          tileContent={<Typography color="brand.500"></Typography>}
          prevLabel={
            <IconButton size="small">
              <ArrowLeftIcon />
            </IconButton>
          }
          nextLabel={
            <IconButton size="small">
              <ArrowRightIcon />
            </IconButton>
          }
        />
      </CardContent>
    </Card>
  );
}
