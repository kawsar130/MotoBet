import React from "react";
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const NavBar = () => {
    const { user, logOut } = useAuth();
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
                    <NavLink
                        style={{
                            textDecoration: "none",
                            color: "white"
                        }}
                        to="/"
                    >
                        <Typography
                            variant="h4"
                            component="div"
                            sx={{ flexGrow: 1 }}
                        >
                            MotoBet
                        </Typography>
                    </NavLink>
                    <Box
                        style={{
                            display: "flex",
                            justifyContent: "flex-end",
                            width: "100%"
                        }}
                    >
                        <NavLink
                            style={{
                                textDecoration: "none",
                                color: "white"
                            }}
                            to="/allMotorcycles"
                        >
                            <Button color="inherit">Motorcycles</Button>
                        </NavLink>
                        {user?.email ? (
                            <Box>
                                <NavLink
                                    style={{
                                        textDecoration: "none",
                                        color: "white"
                                    }}
                                    to="/dashboard"
                                >
                                    <Button color="inherit">Dashboard</Button>
                                </NavLink>
                                <Button onClick={logOut} color="inherit">
                                    LogOut
                                </Button>
                            </Box>
                        ) : (
                            <NavLink
                                style={{
                                    textDecoration: "none",
                                    color: "white"
                                }}
                                to="/login"
                            >
                                <Button color="inherit">Login</Button>
                            </NavLink>
                        )}
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default NavBar;
