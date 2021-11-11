import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import overview1 from "../../../Images/Icons/about-1.svg";
import overview2 from "../../../Images/Icons/about-2.svg";
import overview3 from "../../../Images/Icons/about-3.svg";
import overview4 from "../../../Images/Icons/about-4.svg";

// https://freepngimg.com/download/web_design/24931-2-right-arrow-transparent.png

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
                    <Grid container sx={{ mt: 4, gap: 3 }}>
                        <Grid style={{ display: "flex" }}>
                            <Grid>
                                <img src={overview1} alt="" />
                            </Grid>
                            <Grid sx={{ pl: 2 }}>
                                <Typography variant="h6">
                                    Cutting Edge Tech
                                </Typography>
                                <Typography>
                                    We ensure the latest and greatest technology
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid style={{ display: "flex" }}>
                            <Grid>
                                <img src={overview2} alt="" />
                            </Grid>
                            <Grid sx={{ pl: 2 }}>
                                <Typography variant="h6">
                                    Perfect Styling
                                </Typography>
                                <Typography>
                                    Don't be bored. Styling every single thing
                                    is a part of life.
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid style={{ display: "flex" }}>
                            <Grid>
                                <img src={overview3} alt="" />
                            </Grid>
                            <Grid sx={{ pl: 2 }}>
                                <Typography variant="h6">
                                    Distinctive Beauty
                                </Typography>
                                <Typography>
                                    We never compromise the beauty with
                                    performance.
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid style={{ display: "flex" }}>
                            <Grid>
                                <img src={overview4} alt="" />
                            </Grid>
                            <Grid sx={{ pl: 2 }}>
                                <Typography variant="h6">
                                    Radiance Polishing
                                </Typography>
                                <Typography>
                                    Get the highest quality polishing with all
                                    our products.
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
