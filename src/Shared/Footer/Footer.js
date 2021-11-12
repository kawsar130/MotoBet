import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./Footer.css";

const url = "https://i.ibb.co/zmCSF7f/footer.jpg";

const footer = {
    background: `url(${url})`,
    backgroundColor: "rgba(0, 0, 0, 0.80)",
    backgroundBlendMode: "darken, luminosity",
    marginTop: "4em"
};

const Footer = () => {
    return (
        <Box className="footer" sx={footer}>
            <Grid className="grid-container" sx={{ color: "white" }}>
                <Grid container spacing={2} sx={{ p: 5 }}>
                    <Grid item xs={12} md={6}>
                        <Box>
                            <Typography variant="h5" sx={{ mb: 3 }}>
                                MotoBet
                            </Typography>
                            <Typography>
                                MotoBet is a Motorcycle and Motorcycle parts and
                                accessories retailer shop. We provide the best
                                products with a tension-free after sales
                                service. Make a move with us and stay relaxed
                                for the future.
                            </Typography>
                            <Box
                                sx={{
                                    mt: 3,
                                    py: 1,
                                    border: 2,
                                    borderRadius: 3
                                }}
                            >
                                <Typography>Talk to our support:</Typography>
                                <Typography>+01700-000100</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography variant="h5" sx={{ mb: 3 }}>
                            About MotoBet
                        </Typography>
                        <Typography>Our Company</Typography>
                        <Typography>MotoBet Inventory</Typography>
                        <Typography>Our Services</Typography>
                        <Typography>Mission & Vision</Typography>
                        <Typography>Contact Us</Typography>
                        <Typography>Renting Facility</Typography>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography variant="h5" sx={{ mb: 3 }}>
                            Dealer Information
                        </Typography>
                        <Box sx={{ mb: 3 }}>
                            <Typography sx={{ fontWeight: "bold" }}>
                                Sales Hours
                            </Typography>
                            <Typography>Monday-Friday:</Typography>
                            <Typography>09:00AM to 06:00PM</Typography>
                        </Box>
                        <Box>
                            <Typography sx={{ fontWeight: "bold" }}>
                                Service Hours
                            </Typography>
                            <Typography>Monday-Friday:</Typography>
                            <Typography>09:00AM to 06:00PM</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;
