import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const theme = createTheme({
    status: {
        //   danger: orange[500],
    },
    palette:{
        primary:{
            light:'#111111',
            main:'#111111',
            dark:'#111111',
        }
    }
});

export default theme