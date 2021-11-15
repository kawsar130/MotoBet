import { Alert, Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const MyReview = () => {
    const [review, setReview] = useState({});
    const [reviewStatus, setReviewStatus] = useState(false);

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newData = { ...review };
        newData[field] = value;
        setReview(newData);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("https://stark-beyond-32780.herokuapp.com/feedback", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(review)
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    setReviewStatus(true);
                }
            });
    };

    const handleAddAnother = () => {
        setReviewStatus(false);
    };

    return (
        <Box
            component="form"
            sx={{
                "& .MuiTextField-root": { m: 1, width: "75%" }
            }}
            noValidate
            autoComplete="off"
        >
            <Typography variant="h4" sx={{ mb: 2 }}>
                Add Review
            </Typography>
            {!reviewStatus ? (
                <Box>
                    <form
                        onSubmit={handleSubmit}
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center"
                        }}
                    >
                        <TextField
                            onBlur={handleOnBlur}
                            name="name"
                            id="filled-basic"
                            label="Your Name"
                            variant="filled"
                            required
                        />
                        <TextField
                            onBlur={handleOnBlur}
                            name="motorcycle"
                            required
                            id="filled-basic"
                            label="Your Motorcycle Name"
                            variant="filled"
                        />
                        <TextField
                            onBlur={handleOnBlur}
                            name="rating"
                            required
                            id="filled-basic"
                            label="Your Rating (0-5)"
                            variant="filled"
                        />

                        <TextField
                            onBlur={handleOnBlur}
                            name="feedback"
                            id="filled-multiline-static"
                            label="Your Feedback"
                            multiline
                            variant="filled"
                            rows={4}
                        />
                        <Button
                            onClick={handleSubmit}
                            variant="contained"
                            color="success"
                        >
                            Submit Review
                        </Button>
                    </form>
                </Box>
            ) : (
                <Box>
                    <Alert
                        style={{ display: "flex", justifyContent: "center" }}
                        sx={{ mb: 3 }}
                        severity="info"
                    >
                        Review submitted successfully ;-)
                    </Alert>
                    <Button
                        onClick={handleAddAnother}
                        variant="contained"
                        color="success"
                    >
                        Submit Another Review
                    </Button>
                </Box>
            )}
        </Box>
    );
};

export default MyReview;
