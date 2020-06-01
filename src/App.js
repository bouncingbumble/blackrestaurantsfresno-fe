import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import 'typeface-roboto'
import Home from './Home';
import Navbar from './Navbar';
import { makeStyles } from '@material-ui/core/styles';
import sizes from './sizes'
import { Route, Switch, Redirect } from 'react-router-dom'

const theme = createMuiTheme({
    breakpoints: {
        keys: [
            "xs",
            "sm",
            "md",
            "lg",
            "xl",
        ],
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1440,
            xl: 1920
        },
    },
    palette: {
        common: {
            black: '#061935',
            white: '#ffffff',
        },
        type: "light",
        primary: {
            main: '#DB5461',
        },
        secondary: {
            main: '#62BEC1',
        },
        error: {
            main: '#ff5555',
        },
        warning: {
            main: '#ffc040',
        },
        info: {
            light: '#64b5f6',
            main: '#2196f3',
            dark: '#1976d2',
            contrastText: '#fff'
        },
        success: {
            main: '#0ad16b',
        },
        grey: {
            50: '#fafafa',
            100: '#f7f9fc', //light
            200: '#e5ecf6', //medium
            300: '#9badc9', //dark
            400: '#bdbdbd',
            500: '#9e9e9e',
            600: '#757575',
            700: '#616161',
            800: '#424242',
            900: '#212121',
            A100: '#d5d5d5',
            A200: '#aaaaaa',
            A400: '#303030',
            A700: '#616161',
        },
        text: {
            primary: 'rgba(0, 0, 0, 0.87)',
            secondary: 'rgba(0, 0, 0, 0.54)',
            disabled: 'rgba(0, 0, 0, 0.38)',
            hint: 'rgba(0, 0, 0, 0.38)',
            divider: 'rgba(0, 0, 0, 0.12)',
        },

        background: {
            paper: '#fff',
            default: '#fafafa'
        },
        action: {
            active: 'rgba(0, 0, 0, 0.54)',
            hover: 'rgba(0, 0, 0, 0.04)',
            hoverOpacity: '0.04',
            selected: 'rgba(0, 0, 0, 0.08)',
            selectedOpacity: '0.08',
            disabled: 'rgba(0, 0, 0, 0.26)',
            disabledBackground: 'rgba(0, 0, 0, 0.12)',
            disabledOpacity: '0.38',
            focus: 'rgba(0, 0, 0, 0.12)',
            focusOpacity: '0.12',
            activatedOpacity: '0.12',
        },
    },
    typography: {
        htmlFontSize: 16,
        fontFamily: '"Roboto", "Helvetica", "Arial", "sans-serif"',
        fontSize: 14,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
        h1: {
            fontFamily: '"Roboto", "Helvetica", "Arial", "sans-serif"',
            fontSize: '48px',
            fontWeight: 'bold',
            fontStretch: 'normal',
            fontStyle: 'normal',
            lineHeight: 'normal',
            letterSpacing: '-0.58px',
        },
        h2: {
            fontFamily: '"Roboto", "Helvetica", "Arial", "sans-serif"',
            fontSize: '40px',
            fontWeight: 'normal',
            fontStretch: 'normal',
            fontStyle: 'normal',
            lineHeight: 'normal',
            letterSpacing: '-0.48px',
        },
        h3: {
            fontFamily: '"Roboto", "Helvetica", "Arial", "sans-serif"',
            fontWeight: 'normal',
            fontStretch: 'normal',
            fontStyle: 'normal',
            lineHeight: 'normal',
            fontSize: '28px',
            letterSpacing: '0.13px'
        },
        h4: {
            fontFamily: 'Roboto',
            fontSize: '17px',
            fontWeight: 'bold',
            fontStretch: 'normal',
            fontStyle: 'normal',
            lineHeight: 1,
            letterSpacing: '-0.24px',
            color: 'black'
        },
        h5: {
            fontFamily: '"Roboto", "Helvetica", "Arial", "sans-serif"',
            fontSize: "15px",
            fontWeight: 'bold',
            fontStretch: 'normal',
            fontStyle: 'normal',
            lineHeight: 1,
            letterSpacing: "0.1px"
        },
        h6: {


        },
        subtitle1: {
            fontFamily: '"Roboto", "Helvetica", "Arial", "sans-serif"',
            fontSize: '12px',
            fontWeight: 'normal',
            fontStretch: 'normal',
            fontStyle: 'normal',
            lineHeight: 1.33,
            letterSpacing: 'normal'
        },
        subtitle2: {

        },
        body1: {
            fontFamily: '"Roboto", "Helvetica", "Arial", "sans-serif"',
            fontWeight: 'normal',
            fontStretch: 'normal',
            fontStyle: 'normal',
            fontSize: '16px',
            lineHeight: 1,
            letterSpacing: "-0.2px"
        },
        body2: {
            fontFamily: '"Roboto", "Helvetica", "Arial", "sans-serif"',
            fontSize: '15px',
            fontWeight: 'normal',
            fontStretch: 'normal',
            fontStyle: 'normal',
            lineHeight: 1,
            letterSpacing: '-0.15px',
        },
        button: {
            fontFamily: '"Roboto", "Helvetica", "Arial", "sans-serif"',
            fontWeight: 500,
            fontSize: "0.875rem",
            lineHeight: 1,
            letterSpacing: "0.02857em",
            textTransform: "uppercase",
        },
        caption: {

        },
        overline: {

        },
        shape: {
            borderRadius: 4
        }
    },
    overrides: {
        MuiButton: {
            containedPrimary: {
                width: '175px',
                minWidth: '175px',
                height: '56px',
                borderRadius: '8px',
                textTransform: 'capitalize',
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '17px',
                fontWeight: '600',
                fontStretch: 'normal',
                fontStyle: 'normal',
                lineHeight: '1.59',
                letterSpacing: '-0.24px',
                textAlign: 'center',
                color: '#ffffff',
            },
        },
        MuiOutlinedInput: {
            notchedOutline: {
                borderColor: '#E5ECF6'
            }
        },
        MuiChip: {
            root: {
                marginLeft: 8,
                fontFamily: '"Roboto", "Helvetica", "Arial", "sans-serif"',
                fontSize: '11px',
                fontWeight: 'bold',
                fontStretch: 'normal',
                fontStyle: 'normal',
                letterSpacing: '0.06px',
                color: '#FFFFFF',
                height: '24px',
                borderRadius: '8px',
            },
            deleteIcon: {
                width: '13px',
                height: '13px',
                opacity: '0.5',
                color: '#FFFFFF'
            }
        }
    },
})

const useStyles = makeStyles((theme) => ({
    root: {
        paddingLeft: 61,
        paddingRight: 61,
        [sizes.down("md")]: {
            paddingRight: '3%',
            paddingLeft: '3%'
        },
    }
}))

function App() {
    const classes = useStyles()
    return (
        <>
            <div className="auth"></div>
            <ThemeProvider theme={theme}>
                <div className="App">
                    <Navbar></Navbar>
                    <Container className={classes.root} maxWidth="lg">
                        <Route render={({ location }) => (
                            <Switch location={location}>
                                <Route
                                    exact path="/"
                                    render={routeProps =>
                                        <Home />
                                    }
                                />
                                <Route
                                    render={routeProps => (
                                        <Redirect
                                            to={{
                                                pathname: "tasks",
                                            }}
                                        />
                                    )
                                    }
                                />

                            </Switch>
                        )}>

                        </Route>
                    </Container>
                </div>
            </ThemeProvider>
        </>
    );
}

export default App;
