import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';



export default function Navbar() {
    useEffect(() => {
        const href = window.location.pathname;
        switch (href) {
            case '/contact':
                return setValue(1);
            case '/portfolio':
                return setValue(2);
            default:
                return setValue(0);
        }
    });

    const useStyles = makeStyles({
        root: {
            // marginTop: 'auto',
            // flexGrow: 1,
            // position: 'fixed',
            // top: 0,
            // width: '100%'
        },
        tabsStyles: {
            // height: '5em',
            // bottom: 0,
            // position: 'fixed',
            background: '#edf2f7'
            // paddingTop: '1.25em'
        },
        navStyles: {
            color: 'rgba(0,0,0,0.54)',
            margin: 'auto',
            height: '2em',
            paddingTop: '0.4em'
        }
    });

    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Paper className={classes.root}>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                className={classes.tabsStyles}
            >
                
                <Tab label="Home" to='/home' component={Link} />
                <Tab label="Contact" to='/contact' component={Link} />
                <Tab label="Portfolio" to='/portfolio' component={Link} />
                <h1 className={classes.navStyles}>Jason Thomas</h1>
            </Tabs>
        </Paper>
    );
}