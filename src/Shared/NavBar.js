import React from "react";
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";

const NavBar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ background: "#3b1111" }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h4"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        MotoBet
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default NavBar;
