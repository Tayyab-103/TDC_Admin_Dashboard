/* eslint-disable no-unused-vars */
// material-ui
import { Box, Typography } from '@mui/material';

// project import
// import MainCard from 'components/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const MainPage = () => (
  // <MainCard title="Sample Card">
  <Box pt={{ xs: 13, md: 8, xl: 8 }}>
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="80vh"
      textAlign="center"
      padding="2rem"
    >
      <Typography
        variant="h4"
        style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          marginBottom: '1rem'
        }}
      >
        ROI | Rapid Organizational Intelligence
      </Typography>

      <Typography variant="h6" style={{ fontSize: '1.5rem', fontStyle: 'italic' }}>
        Unlocking <span style={{ fontWeight: 'bold' }}>Organizational</span> Brilliance at the{' '}
        <span style={{ fontWeight: 'bold' }}>Speed</span> of Thought
      </Typography>
    </Box>
  </Box>
  // </MainCard>
);

export default MainPage;
