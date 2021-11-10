import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import overview1 from "../../../Images/Icons/about-1.svg";
import overview2 from "../../../Images/Icons/about-2.svg";
import overview3 from "../../../Images/Icons/about-3.svg";
import overview4 from "../../../Images/Icons/about-4.svg";

const OverView = () => {
    return (
        <Container sx={{ flexGrow: 1, mt: 20 }}>
            <Grid container spacing={2} style={{ display: "flex" }}>
                <Grid item xs={12} md={5}>
                    <img
                        style={{ height: "80%" }}
                        src="https://i.ibb.co/02BTnWG/overview.jpg"
                        alt=""
                    />
                </Grid>
                <Grid sx={{ textAlign: "left" }} item xs={12} md={7}>
                    <Box>
                        <Typography
                            variant="h6"
                            sx={{ fontWeight: "bold", color: "#8f1010" }}
                        >
                            TAKING RIDES TO A NEWER LEVEL!
                        </Typography>
                        <Typography
                            variant="h3"
                            sx={{ fontWeight: "bold" }}
                            style={{ color: "#4a1010" }}
                        >
                            GET PERFORMANCE THAT LEAVES OTHERS BEHIND
                        </Typography>
                        <Typography sx={{ color: "#757272", pt: 2 }}>
                            We always prefer the bike that lasts longer, perform
                            sharper and makes the ride enjoyable. That is why we
                            never compromise with the quality. No matter what
                            brand and model you are going to choose from us, you
                            can stay tension free with product quality,
                            durability and PERFORMANCE!
                        </Typography>
                    </Box>
                    <Grid container sx={{ py: 5, gap: 5 }}>
                        <Grid style={{ display: "flex" }}>
                            <Grid>
                                <img src={overview1} alt="" />
                            </Grid>
                            <Grid sx={{ pl: 2 }}>
                                <Typography variant="h6">
                                    Cutting Edge Tech
                                </Typography>
                                <Typography>
                                    We ensure the latest technology
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid style={{ display: "flex" }}>
                            <Grid>
                                <img src={overview2} alt="" />
                            </Grid>
                            <Grid sx={{ pl: 2 }}>
                                <Typography variant="h6">
                                    Cutting Edge Tech
                                </Typography>
                                <Typography>
                                    We ensure the latest technology
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid style={{ display: "flex" }}>
                            <Grid>
                                <img src={overview3} alt="" />
                            </Grid>
                            <Grid sx={{ pl: 2 }}>
                                <Typography variant="h6">
                                    Cutting Edge Tech
                                </Typography>
                                <Typography>
                                    We ensure the latest technology
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid style={{ display: "flex" }}>
                            <Grid>
                                <img src={overview4} alt="" />
                            </Grid>
                            <Grid sx={{ pl: 2 }}>
                                <Typography variant="h6">
                                    Cutting Edge Tech
                                </Typography>
                                <Typography>
                                    We ensure the latest technology
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default OverView;