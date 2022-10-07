import './assets/styles.scss';

import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Game from 'components/CardGame/CardGame';
import Start from 'components/Start/Start';
import { Box, Grid } from '@mui/material';

const FontTheme = createTheme({
  typography: {
    fontFamily: `"Press Start 2P"`,
  },
});

const queryClient = new QueryClient();

const App = () => {
  return (
    <ThemeProvider theme={FontTheme}>
      <QueryClientProvider client={queryClient}>
        <Box>
          <Grid container className="main">
            <Routes>
              <Route path="/" element={<Start />} />
              <Route path="/game" element={<Game />} />
            </Routes>
          </Grid>
        </Box>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
