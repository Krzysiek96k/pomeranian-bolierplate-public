import * as React from 'react';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Fingerprint from '@mui/icons-material/Fingerprint';

import './styles.css';

export const Material = () => {
  return (
    <Stack direction="row" spacing={1}>
      <IconButton aria-label="fingerprint" color="secondary">
        <Fingerprint className="red" />
      </IconButton>
      <IconButton aria-label="fingerprint" color="success">
        <Fingerprint className="blue" />
      </IconButton>
    </Stack>
  );
};
