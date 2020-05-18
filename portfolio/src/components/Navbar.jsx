import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { borderRight } from '@material-ui/system';

const useStyles = makeStyles({
    root: {
        // flexGrow: 1,
        // position: 'fixed',
        // top: 0,
        // width: '100%'
    },
    tabsStyles: {
        // bottom: 0,
        // position: 'fixed',
        // background: 'red'
    }
});

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

    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const navStyles = {
        margin: 'auto',
    }

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
                <Tab label="Portolio" to='/portfolio' component={Link} />
                <div style={navStyles}>Jason Thomas</div>
            </Tabs>
        </Paper>
    );
}