import React from 'react';
import {ThemeProvider} from "styled-components";
import theme from './theme/theme';
import GlobalStyle from "./theme/global";
import Header from './components/Header/Header';
import Home from './sections/Home/Home';

function App() {
  return (
    <div>
      <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Header />
          <Home />
        </ThemeProvider> 
    </div>  
  );
}

export default App;
