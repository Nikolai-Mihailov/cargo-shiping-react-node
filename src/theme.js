import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ffff',
      main: '#fefefe',
      dark: '#0054b6',
      contrastText: '#fff',
    },
    secondary: {
      light: '#fff',
      main: '#5680E9',
      dark: '#EEFBFB',
      contrastText: '#fff',
    },
  },
});

export default theme;