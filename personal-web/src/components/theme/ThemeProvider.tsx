import React from 'react';
import {
    ThemeProvider as Provider,
    createTheme,
    responsiveFontSizes,
} from '@material-ui/core/styles';

const headingFont = 'Arial';
const bodyFont = 'Arial';

let theme = createTheme({

});

theme = responsiveFontSizes(theme);

const ThemeProvider = ({ children }) => {
    return <Provider theme={theme}>{children}</Provider>
};

export default ThemeProvider