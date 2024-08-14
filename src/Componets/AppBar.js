import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Button} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"

const Appbar = ({handleDrawerToggle}) => {
    return ( 
        <AppBar position="static">
            <Toolbar>
                <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}>
                <MenuIcon/>
                </IconButton>
                <Typography variant ="h6">
                    BootCamp
                </Typography>
                <Button color = "inherit" style={{margin:`auto`}}>
            Registrarse
                </Button>
            </Toolbar>
        </AppBar>
    );

}

export default Appbar;