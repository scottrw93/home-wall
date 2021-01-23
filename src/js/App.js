import React from 'react';

import '../css/App.css';

import HomeWallsContainer from './containers/HomeWallsContainer';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import blue from '@material-ui/core/colors/blue';
import blueGrey from '@material-ui/core/colors/blueGrey';
import { READ } from './auth/Scopes';
import { UserContext } from './context/UserContext';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: blueGrey,
  },
});

const App = () => {
  const [login, onLoginSuccess] = React.useState({
    signedIn: false,
    scopes: [READ],
  });

  return (
    <UserContext.Provider value={login}>
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <HomeWallsContainer onLoginChange={onLoginSuccess} />
        </MuiThemeProvider>
      </div>
    </UserContext.Provider>
  );
};

export default App;
