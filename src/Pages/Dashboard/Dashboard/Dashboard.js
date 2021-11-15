import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";

import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

import { NavLink } from "react-router-dom";

import { Switch, Route, useRouteMatch } from "react-router-dom";
import DashboardHome from "../DashboardHome/DashboardHome";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import Payment from "../Payment/Payment";
import AddMotorcycle from "../AddMotorcycle/AddMotorcycle";
import MyReview from "../MyReview/MyReview";
import useAuth from "../../../hooks/useAuth";
import AdminRoute from "../../Login/AdminRoute/AdminRoute";
import ManageAllOrders from "../ManageAllOrders/ManageAllOrders";
import ManageProducts from "../ManageProducts/ManageProducts";

const drawerWidth = 240;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { admin, logOut } = useAuth();
    let { path, url } = useRouteMatch();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />

            <Divider />

            <List>
                {admin ? (
                    <Box style={{ display: "flex", flexDirection: "column" }}>
                        <NavLink
                            style={{
                                textDecoration: "none",
                                color: "grey"
                            }}
                            to={`${url}/manageAllOrders`}
                        >
                            <Button color="inherit">Manage All Orders</Button>
                        </NavLink>
                        <NavLink
                            style={{
                                textDecoration: "none",
                                color: "grey"
                            }}
                            to={`${url}/addMotorcycle`}
                        >
                            <Button color="inherit">Add Motorcycle</Button>
                        </NavLink>
                        <NavLink
                            style={{
                                textDecoration: "none",
                                color: "grey"
                            }}
                            to={`${url}/manageProducts`}
                        >
                            <Button color="inherit">Manage Products</Button>
                        </NavLink>
                        <NavLink
                            style={{
                                textDecoration: "none",
                                color: "grey"
                            }}
                            to={`${url}/makeAdmin`}
                        >
                            <Button color="inherit">Make Admin</Button>
                        </NavLink>
                        <NavLink
                            style={{
                                textDecoration: "none",
                                color: "grey"
                            }}
                            to="/home"
                        >
                            <Button color="inherit">Home Page</Button>
                        </NavLink>
                    </Box>
                ) : (
                    <Box style={{ display: "flex", flexDirection: "column" }}>
                        <NavLink
                            style={{
                                textDecoration: "none",
                                color: "grey"
                            }}
                            to={`${url}`}
                        >
                            <Button color="inherit">My orders</Button>
                        </NavLink>
                        <NavLink
                            style={{
                                textDecoration: "none",
                                color: "grey"
                            }}
                            to={`${url}/myReview`}
                        >
                            <Button color="inherit">Reviews</Button>
                        </NavLink>
                        <NavLink
                            style={{
                                textDecoration: "none",
                                color: "grey"
                            }}
                            to={`${url}/payment`}
                        >
                            <Button color="inherit">Payment</Button>
                        </NavLink>
                        <NavLink
                            style={{
                                textDecoration: "none",
                                color: "grey"
                            }}
                            to="/home"
                        >
                            <Button color="inherit">Home Page</Button>
                        </NavLink>
                        <NavLink
                            style={{
                                textDecoration: "none",
                                color: "grey"
                            }}
                            to="/allMotorcycles"
                        >
                            <Button color="inherit">All Motorcycles</Button>
                        </NavLink>
                    </Box>
                )}
                <Box sx={{ mt: 1 }}>
                    <Button onClick={logOut} variant="outlined" color="error">
                        LogOut
                    </Button>
                </Box>
            </List>
        </div>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    backgroundColor: "#3b1111"
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: "none" } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth
                        }
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: "none", sm: "block" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth
                        }
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    width: { sm: `calc(100% - ${drawerWidth}px)` }
                }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addMotorcycle`}>
                        <AddMotorcycle></AddMotorcycle>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageAllOrders`}>
                        <ManageAllOrders></ManageAllOrders>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageProducts`}>
                        <ManageProducts></ManageProducts>
                    </AdminRoute>

                    <Route path={`${path}/payment`}>
                        <Payment></Payment>
                    </Route>

                    <Route path={`${path}/myReview`}>
                        <MyReview></MyReview>
                    </Route>
                </Switch>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func
};

export default Dashboard;
