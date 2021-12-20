import React from "react";
import { Button, Typography } from "@mui/material";
import "./Banner.css";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="banner-container">
            <Box className="banner-text" sx={{ mr: 5 }}>
                <h1 className="banner-header-text">
                    Your Passion, Our Profession
                </h1>

                <Typography className="banner-subtext" sx={{ color: "white" }}>
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
                                backgroundColor: "rgba(255, 255, 255, 0.4)"
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
