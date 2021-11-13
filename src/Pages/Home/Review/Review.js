import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import ClientFeedback from "./ClientFeedback/ClientFeedback";

const reviewImg = "https://i.ibb.co/PggKkPF/feedback.png";

const Review = () => {
    const [feedback, setFeedback] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/feedback")
            .then((res) => res.json())
            .then((data) => setFeedback(data))
            .catch((error) => console.log(error.message));
    }, []);

    return (
        <Container>
            <Typography variant="h6" color="red">
                TAKING RIDES TO NEXT LEVEL
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                WHY PEOPLE ARE TALKING ABOUT US
            </Typography>
            <Grid container spacing={2} sx={{ mt: 3 }}>
                <Grid item xs={12} md={4}>
                    <Box>
                        <img style={{ width: "100%" }} src={reviewImg} alt="" />
                    </Box>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Box>
                        <Container>
                            <Grid container spacing={3}>
                                {feedback.map((review) => (
                                    <Grid item xs={12} sm={6} md={6}>
                                        <ClientFeedback
                                            key={review._id}
                                            review={review}
                                        ></ClientFeedback>
                                    </Grid>
                                ))}
                            </Grid>
                        </Container>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Review;
