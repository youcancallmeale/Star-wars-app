import { Box } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const Loading = () => {
  return (
    <Box sx={{ minWidth: 400, maxWidth: 400, margin: 'auto' }}>
      <Stack spacing={1}>
        <Skeleton
          variant="text"
          animation="wave"
          width={100}
          height={30}
          sx={{ fontSize: '1rem', bgcolor: 'grey.900' }}
        />
        <Skeleton
          variant="text"
          animation="wave"
          height={80}
          sx={{ fontSize: '1rem', bgcolor: 'grey.900' }}
        />
        <Skeleton
          variant="text"
          animation="wave"
          height={30}
          width={300}
          sx={{ fontSize: '1rem', bgcolor: 'grey.900' }}
        />
        <Skeleton
          variant="text"
          animation="wave"
          height={30}
          width={280}
          sx={{ fontSize: '1rem', bgcolor: 'grey.900' }}
        />
        <Skeleton
          variant="text"
          animation="wave"
          height={30}
          width={200}
          sx={{ fontSize: '1rem', bgcolor: 'grey.900' }}
        />
      </Stack>
    </Box>
  );
};

export default Loading;
