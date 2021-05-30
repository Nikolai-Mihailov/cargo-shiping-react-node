import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#fff',
      main: '#203647',
      dark: '#12232E',
      contrastText: '#fff',
    },
    secondary: {
      light: '#4DA8DA',
      main: '#4DA8DA',
      dark: '#EEFBFB',
      contrastText: '#fff',
    },
  },
});

export default theme;