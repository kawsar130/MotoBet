import {
    Button,
    CircularProgress,
    Container,
    Grid,
    Typography
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Motorcycle from "../../Motorcycle/Motorcycle";

const Motorcycles = () => {
    const [motorcycles, setMotorcycles] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/motorcycles?cap=6")
            .then((res) => res.json())
            .then((data) => setMotorcycles(data))
            .catch((error) => console.log(error.message));
    }, []);
    return (
        <Box sx={{ mb: 10 }}>
            <h1>Our Popular Motorcycles</h1>
            {!motorcycles.length ? (
                <div style={{ height: "50vh" }}>
                    <Typography>Loading..</Typography>
                    <CircularProgress />
                </div>
            ) : (
                <Container>
                    <Grid container spacing={3}>
                        {motorcycles.map((motorcycle) => (
                            <Grid item xs={12} sm={6} md={6} lg={4}>
                                <Motorcycle
                                    key={motorcycle._id}
                                    motorcycle={motorcycle}
                                ></Motorcycle>
                            </Grid>
                        ))}
                    </Grid>
                    <Link
                        to="/allMotorcycles"
                        style={{ textDecoration: "none" }}
                    >
                        <Button
                            variant="contained"
                            color="success"
                            size="large"
                            sx={{ height: "60px" }}
                        >
                            Show All Motorcycles
                        </Button>
                    </Link>
                </Container>
            )}
        </Box>
    );
};

export default Motorcycles;
