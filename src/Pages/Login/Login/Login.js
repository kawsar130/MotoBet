import {
    Alert,
    Button,
    CircularProgress,
    Container,
    Grid,
    TextField,
    Typography
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const loginImg = "https://i.ibb.co/8NYBp1g/login.jpg";

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInWithGoogle, isLoading, authError } =
        useAuth();

    const location = useLocation();
    const history = useHistory();

    // Handle input field change
    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    };

    // Handle submit for login
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        loginUser(loginData.email, loginData.password, location, history);
    };

    // Handle google sign in
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    };

    return (
        <Container sx={{ my: 5 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img src={loginImg} style={{ width: "100%" }} alt="" />
                </Grid>
                <Grid item sx={{ my: 8 }} xs={12} md={6}>
                    <Typography variant="h5" gutterBottom>
                        Login
                    </Typography>
                    {!isLoading && (
                        <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: "75%", m: 1 }}
                                id="standard-basic"
                                label="Your Email"
                                name="email"
                                onBlur={handleOnChange}
                                variant="standard"
                            />
                            <TextField
                                sx={{ width: "75%", m: 1 }}
                                id="standard-password-input"
                                label="Password"
                                type="password"
                                name="password"
                                onBlur={handleOnChange}
                                variant="standard"
                                autoComplete="current-password"
                            />
                            <Button
                                sx={{ width: "75%", m: 1 }}
                                type="submit"
                                variant="contained"
                            >
                                Login
                            </Button>
                            <NavLink
                                style={{ textDecoration: "none" }}
                                to="/register"
                            >
                                <Button variant="text">
                                    New User? Please Register
                                </Button>
                            </NavLink>
                            {authError && (
                                <Alert severity="error">{authError}</Alert>
                            )}
                        </form>
                    )}
                    {!isLoading && (
                        <Box>
                            <Typography variant="h6" sx={{ mt: 5 }}>
                                You can sign-in with Google
                            </Typography>
                            <Button
                                onClick={handleGoogleSignIn}
                                variant="contained"
                                sx={{ mt: 2 }}
                            >
                                Google Sign-In
                            </Button>
                        </Box>
                    )}
                    {isLoading && <CircularProgress />}
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;
