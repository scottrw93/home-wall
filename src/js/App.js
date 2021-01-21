import '../css/App.css';

import HomeWallContainer from './containers/HomeWallContainer';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import blue from '@material-ui/core/colors/blue';
import pink from '@material-ui/core/colors/pink';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: pink,
  },
});

function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <HomeWallContainer />
      </MuiThemeProvider>
      ,
    </div>
  );
}

export default App;
