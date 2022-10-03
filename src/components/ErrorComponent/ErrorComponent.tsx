import { Alert, Snackbar, Stack } from '@mui/material';
import { Labels } from 'app-constants';

const ErrorComponent = () => {
  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={true} autoHideDuration={6000}>
        <Alert severity="error" sx={{ width: '100%' }}>
          {Labels.ErrorApiMsg}
        </Alert>
      </Snackbar>
    </Stack>
  );
};

export default ErrorComponent;
