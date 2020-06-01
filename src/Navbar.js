import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import clsx from 'clsx'
import Avatar from '@material-ui/core/Avatar'
import sizes from './sizes'
import { useHistory } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
    root: {
        height: 72,
        display: 'flex',
        justifyContent: 'space-between',
        padding: "0px 120px",
        [sizes.down("md")]: {
            paddingLeft: "3%",
            paddingRight: "3%",
        },
        boxShadow: "none",
        flexGrow: 1,
        flexDirection: 'row',
        marginBottom: 16,
        backgroundColor: '#DB5461'
    },
    logo: {
        alignSelf: 'center',
        display: 'flex',
    },
    name: {
        fontFamily: 'Poppins, sans-serif',
        fontSize: '18px',
        fontWeight: 'bold',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 'normal',
        letterSpacing: '-0.75px',
        color: '#061935',
        paddingLeft: 8,
        alignSelf: 'center',
        display: 'flex',
    },
    tabs: {
        alignSelf: 'flex-end',
        [sizes.down("md")]: {
            display: 'none'
        }
    },
    tab: {
        height: '20px',
        fontFamily: 'Roboto',
        textTransform: 'none',
        fontSize: '15px',
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 1.33,
        letterSpacing: '-0.15px',
        textAlign: 'center',
        color: '#061935',
        paddingLeft: 25,
        paddingRight: 25,
        minWidth: 0
    },
    wrapper: {
        paddingBottom: 26,
        width: ''
    },
    avatarContainer: {
        alignSelf: 'center'
    },
    avatar: {
        width: 40,
        height: 40,
        backgroundColor: theme.palette.primary.main
    }
}));

export default function Navbar() {
    const classes = useStyles();
    let history = useHistory()
    const [value, setValue] = React.useState(history.location.pathname.substr(1) === '' ? 'tasks' : history.location.pathname.substr(1));

    console.log(history)

    const handleChange = (event, newValue) => {
        setValue(newValue);
        history.push(`/${newValue}`)

    };
    return (
        <AppBar className={classes.root} position="static" color="transparent">
            <div style={{ display: 'flex' }}>
                <div className={classes.logo}>
                    <span style={{ fontSize: 32 }}>  👨🏿‍🍳😋 </span>
                </div>
            </div>
            <div className={classes.avatarContainer}>
                <div className={classes.name}>
                    blackrestaurantsfresno
                </div>
            </div>
        </AppBar >
    )
}

