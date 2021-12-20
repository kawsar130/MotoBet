import React from "react";
import {
    AppBar,
    Button,
    Drawer,
    IconButton,
    Toolbar,
    Typography
} from "@mui/material";
import { Box } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material";

import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";

const NavigationBar = () => {
    const { user, logOut } = useAuth();
    const theme = useTheme();
    const useStyle = makeStyles({
        navIcon: {
            [theme.breakpoints.up("md")]: {
                display: "none !important"
            }
        },
        navItemContainer: {
            [theme.breakpoints.down("md")]: {
                display: "none !important"
            }
        },
        navText: {
            color: "gray",
            textDecoration: "none"
        }
    });

    const { navIcon, navItemContainer, navText } = useStyle();

    const [state, setState] = React.useState(false);

    const list = (
        <Box
            sx={{
                width: 250
            }}
            role="presentation"
        >
            <List>
                <ListItem button>
                    <NavLink
                        className={navText}
                        to="/allMotorcycles"
                        style={{ width: "100%" }}
                    >
                        Motorcycles
                    </NavLink>
                </ListItem>

                {user?.email ? (
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column"
                        }}
                    >
                        <ListItem button>
                            <NavLink
                                className={navText}
                                style={{
                                    width: "100%"
                                }}
                                to="/dashboard"
                            >
                                Dashboard
                            </NavLink>
                        </ListItem>
                        <Divider />

                        <Box
                            style={{ display: "inline-block" }}
                            sx={{ ml: 2, mt: 5 }}
                        >
                            <Button variant="outlined" color="inherit">
                                <img
                                    style={{
                                        width: "22px",
                                        height: "22px",
                                        marginRight: "10px",
                                        borderRadius: "50%"
                                    }}
                                    src={user.photoURL}
                                    alt=""
                                />
                                {user.displayName}
                            </Button>
                        </Box>
                        <ListItem button>
                            <Button
                                style={{ width: "50%", background: "#3b1111" }}
                                variant="contained"
                                onClick={logOut}
                                sx={{
                                    color: "white"
                                }}
                            >
                                LogOut
                            </Button>
                        </ListItem>
                    </Box>
                ) : (
                    <ListItem button>
                        <NavLink
                            className={navText}
                            style={{
                                width: "100%"
                            }}
                            to="/login"
                        >
                            Login
                        </NavLink>
                    </ListItem>
                )}
            </List>
        </Box>
    );

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" style={{ background: "#3b1111" }}>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            className={navIcon}
                            onClick={() => setState(true)}
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
                            className={navItemContainer}
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
                                <Button
                                    sx={{
                                        "&:hover": {
                                            backgroundColor:
                                                "rgba(255, 255, 255, 0.4)"
                                        }
                                    }}
                                    color="inherit"
                                >
                                    Motorcycles
                                </Button>
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
                                        <Button
                                            sx={{
                                                "&:hover": {
                                                    backgroundColor:
                                                        "rgba(255, 255, 255, 0.4)"
                                                }
                                            }}
                                            color="inherit"
                                        >
                                            Dashboard
                                        </Button>
                                    </NavLink>
                                    <Button
                                        sx={{
                                            "&:hover": {
                                                backgroundColor:
                                                    "rgba(255, 255, 255, 0.4)"
                                            }
                                        }}
                                        onClick={logOut}
                                        color="inherit"
                                    >
                                        LogOut
                                    </Button>
                                    <Box
                                        style={{
                                            display: "inline-block",
                                            marginLeft: "10px"
                                        }}
                                    >
                                        <Button
                                            variant="outlined"
                                            color="inherit"
                                        >
                                            <img
                                                style={{
                                                    width: "22px",
                                                    height: "22px",
                                                    marginRight: "10px",
                                                    borderRadius: "50%"
                                                }}
                                                src={user.photoURL}
                                                alt=""
                                            />
                                            {user.displayName}
                                        </Button>
                                    </Box>
                                </Box>
                            ) : (
                                <NavLink
                                    style={{
                                        textDecoration: "none",
                                        color: "white"
                                    }}
                                    to="/login"
                                >
                                    <Button
                                        sx={{
                                            "&:hover": {
                                                backgroundColor:
                                                    "rgba(255, 255, 255, 0.4)"
                                            }
                                        }}
                                        color="inherit"
                                    >
                                        Login
                                    </Button>
                                </NavLink>
                            )}
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
            <div>
                <React.Fragment>
                    <Drawer open={state} onClose={() => setState(false)}>
                        {list}
                    </Drawer>
                </React.Fragment>
            </div>
        </>
    );
};

export default NavigationBar;
