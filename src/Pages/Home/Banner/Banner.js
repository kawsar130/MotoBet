import React from "react";
import { Button, Container, Typography } from "@mui/material";
import "./Banner.css";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="banner-container">
            <Box className="banner-text" sx={{ mr: 5 }}>
                <Typography
                    variant="h1"
                    sx={{ fontWeight: "bold", color: "white" }}
                >
                    Your Passion, Our Profession
                </Typography>

                <Typography variant="h5" sx={{ color: "white" }}>
                    Let's make a extraordinary move with us.
                </Typography>
                <Link to="/allMotorcycles" style={{ textDecoration: "none" }}>
                    <Button
                        size="large"
                        sx={{
                            mt: 4,
                            color: "white",
                            border: 2,
                            "&:hover": {
                                backgroundColor: "#7a1f1f"
                            }
                        }}
                    >
                        Explore Our Products
                    </Button>
                </Link>
            </Box>
        </div>
    );
};

export default Banner;
