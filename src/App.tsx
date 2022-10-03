import Game from './components/Game/game';
import Start from './components/Start/start';
import './assets/styles.scss';

import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <>
        <div className="main">
          <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/game" element={<Game />} />
          </Routes>
          <div className="main__floor"></div>
        </div>
      </>
    </QueryClientProvider>
  );
};

export default App;
