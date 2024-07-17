import { Stack } from '@mui/material';
import React from 'react';
import Progress from './Progress';

const PageProgress = () => {
  return (
    <Stack sx={{ position: 'absolute', left: '50%', top: '50%' }}>
      <Progress />
    </Stack>
  );
};

export default PageProgress;
