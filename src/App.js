import React, { Component } from 'react';
import AppBar from './containers/AppBar/AppBar';
import Layout from './containers/Layout/Layout';
import './App.css';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1f1f1f'
    },
    secondary: {
      main: '#FFFFFF'
    }
  },
  typography: {
    display4: {
      fontFamily: 'FreightText, Georgia, Times New Roman, Times, serif',
      fontWeight: 'normal',
      fontSize: /* '4.6rem' */50,
      lineHeight: 1.12,
      color: '#1f1f1f'
    },
    display3: {
      fontFamily: 'FreightText, Georgia, Times New Roman, Times, serif',
      fontWeight: 'normal',
      fontSize: 30,
      color: '#1f1f1f'
    },
    headline: {
      color: 'rgba(0, 0, 0, 0.54)'
    },
    body1: {
      fontSize: 16,
      fontStyle: 'italic',
      color: '#1f1f1f',
    }
  },
  overrides: {
    MuiBadge: { 
      badge: { 
        backgroundColor: 'red',
        color: 'white'
      },
    }
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <AppBar />
          <Layout />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
