import {
    Alert,
    Button,
    CircularProgress,
    Container,
    Grid,
    Typography
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import OrderModal from "../Orders/OrderModal/OrderModal";

const thumbsUp = "https://i.ibb.co/cvxSQhR/thumbsUp.png";

const MotorcycleDetail = () => {
    const [openOrder, setOpenOrder] = useState(false);
    const [orderSuccess, setOrderSuccess] = useState(false);
    const { motorcycleId } = useParams();
    const [motorcycles, setMotorcycles] = useState([]);
    const { user } = useAuth();

    const initialInfo = {
        customerName: user.displayName,
        email: user.email,
        phone: ""
    };
    const [orderInfo, setOrderInfo] = useState(initialInfo);

    const handleOrderOpen = () => setOpenOrder(true);
    const handleOrderClose = () => setOpenOrder(false);

    useEffect(() => {
        fetch("http://localhost:5000/motorcycles")
            .then((res) => res.json())
            .then((data) => setMotorcycles(data))
            .catch((error) => console.log(error.message));
    }, [motorcycles]);

    const foundMotorcycle = motorcycles.find((x) => x._id === motorcycleId);
    let name,
        price,
        year,
        category,
        brand,
        power,
        displacement,
        description,
        img;

    if (foundMotorcycle) {
        ({
            name,
            price,
            year,
            category,
            brand,
            power,
            displacement,
            description,
            img
        } = foundMotorcycle);
    }

    return (
        <Container sx={{ py: 5, backgroundColor: "lavenderblush" }}>
            <Box>
                <Typography variant="h2" sx={{ fontWeight: "bold" }}>
                    {name}
                </Typography>
            </Box>
            <Box sx={{ mb: 5 }}>
                <img
                    src={img}
                    alt=""
                    style={{ width: "100%", maxWidth: "640px" }}
                />
            </Box>
            <Box>
                <Box sx={{ mb: 5 }}>
                    <Typography variant="h3" sx={{ mb: 2 }}>
                        Motorcycle Overview
                    </Typography>
                    <Typography>{description}</Typography>
                </Box>
                <Box
                    sx={{
                        py: 5,
                        border: 2,
                        borderColor: "lightgrey",
                        borderRadius: 1
                    }}
                >
                    <Typography variant="h4" sx={{ mb: 5 }}>
                        Details Specification
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6} sx={{ py: 5 }}>
                            <Box>
                                <Typography variant="h5">Brand</Typography>
                                <Typography variant="subtitle1">
                                    {brand}
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ py: 5 }}>
                            <Box>
                                <Typography variant="h5">Category</Typography>
                                <Typography variant="subtitle1">
                                    {category}
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ py: 5 }}>
                            <Box>
                                <Typography variant="h5">
                                    Engine Displacement
                                </Typography>
                                <Typography variant="subtitle1">
                                    {displacement} CC
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ py: 5 }}>
                            <Box>
                                <Typography variant="h5">
                                    Engine Power
                                </Typography>
                                <Typography variant="subtitle1">
                                    {power} BHP
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ py: 5 }}>
                            <Box>
                                <Typography variant="h5">
                                    Year Release
                                </Typography>
                                <Typography variant="subtitle1">
                                    {year}
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ py: 5 }}>
                            <Box>
                                <Typography variant="h5">Price</Typography>
                                <Typography variant="subtitle1">
                                    ${price}
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Box sx={{ mt: 5 }}>
                {!orderSuccess ? (
                    <Button onClick={handleOrderOpen} variant="contained">
                        Place Order
                    </Button>
                ) : (
                    <Box>
                        <Typography variant="h5">Congrats!</Typography>
                        <Typography variant="h5">
                            Your Order Has Placed Successfully
                        </Typography>
                        <Typography>
                            Your {name} is on the way to Home! ;-)
                        </Typography>
                        <Box sx={{ mt: 5 }}>
                            <img
                                style={{ width: "100%", maxWidth: "500px" }}
                                src={thumbsUp}
                                alt=""
                            />
                        </Box>
                    </Box>
                )}
            </Box>
            <OrderModal
                handleOrderClose={handleOrderClose}
                openOrder={openOrder}
                foundMotorcycle={foundMotorcycle}
                setOrderSuccess={setOrderSuccess}
                orderInfo={orderInfo}
                setOrderInfo={setOrderInfo}
            ></OrderModal>
        </Container>
    );
};

export default MotorcycleDetail;
