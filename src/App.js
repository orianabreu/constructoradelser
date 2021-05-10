import React from 'react';
import {ThemeProvider} from "styled-components";
import theme from './theme/theme';
import GlobalStyle from "./theme/global";
import Header from './components/Header/Header';

function App() {
  return (
    <div>
      <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Header />
        </ThemeProvider> 
    </div>  
  );
}

export default App;
