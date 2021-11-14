import { CircularProgress, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import NavBar from "../../Shared/NavBar/NavBar";
import Motorcycle from "../Motorcycle/Motorcycle";

const AllMotorcycles = () => {
    const [motorcycles, setMotorcycles] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/motorcycles")
            .then((res) => res.json())
            .then((data) => setMotorcycles(data))
            .catch((error) => console.log(error.message));
    }, [motorcycles]);
    return (
        <Box>
            <NavBar></NavBar>
            <Box sx={{ mb: 5 }}>
                <h1>Our Motorcycle Collection</h1>
                {!motorcycles.length ? (
                    <div style={{ height: "50vh" }}>
                        <Typography>Loading..</Typography>
                        <CircularProgress />
                    </div>
                ) : (
                    <Container>
                        <Grid container spacing={3}>
                            {motorcycles.map((motorcycle) => (
                                <Grid item xs={12} sm={6} md={4}>
                                    <Motorcycle
                                        key={motorcycle._id}
                                        motorcycle={motorcycle}
                                    ></Motorcycle>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                )}
            </Box>
        </Box>
    );
};

export default AllMotorcycles;
