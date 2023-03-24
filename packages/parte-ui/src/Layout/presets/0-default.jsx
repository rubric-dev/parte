import React from 'react';
import Box from '../Box';

export default (
  <Box
    uxpId="Box-1"
    justifyContent="Center"
    direction="row"
    style={{ minWidth: 'fit-content' }}
    gap={10}
  >
    <Box
      uxpId="example-1"
      style={{ backgroundColor: 'red', flex: 1, width: '100%' }}
    />
    <Box
      uxpId="example-2"
      style={{ backgroundColor: 'green', flex: 1, width: '100%' }}
    />
  </Box>
);
