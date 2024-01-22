/* eslint-disable react/prop-types */
// import { Box, useStyleConfig } from "@chakra-ui/react";
// function Card(props) {
//   const { variant, children, ...rest } = props;
//   const styles = useStyleConfig("Card", { variant });

//   return (
//     <Box __css={styles} {...rest}>
//       {children}
//     </Box>
//   );
// }

// export default Card;

import React from 'react';
import { Box } from '@mui/system';

function Card(props) {
  const { children, ...rest } = props;

  return <Box {...rest}>{children}</Box>;
}

export default Card;
