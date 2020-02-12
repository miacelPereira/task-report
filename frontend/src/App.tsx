import React from 'react';
import Routes from './routes';
import { GlobalStyle } from './styles/global';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <Routes />
    <header>
      <h1>Hello World</h1>
    </header>
  </>
);

export default App;
