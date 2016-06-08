import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from '../containers/app';

const UiApp = () => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <App />
  </MuiThemeProvider>
);
export default UiApp;
