import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function ColorButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button style = {{marginLeft : "720px"}} variant="contained" color="success">
        Devam et
      </Button>
    </Stack>
  );
}