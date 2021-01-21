import '../css/App.css';

import HomeWallContainer from './containers/HomeWallContainer';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import blue from '@material-ui/core/colors/blue';
import blueGrey from '@material-ui/core/colors/blueGrey';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: blueGrey,
  },
});

function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <HomeWallContainer />
      </MuiThemeProvider>
    </div>
  );
}

export default App;
