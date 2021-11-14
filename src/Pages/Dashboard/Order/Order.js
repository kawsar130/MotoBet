import { Alert, Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import useAuth from "../../../hooks/useAuth";

const Order = ({ order, handleDelete, handleUpdate }) => {
    const { admin } = useAuth();
    const { productName, customerName, phone, address, productData, status } =
        order;
    const { brand, year, displacement, img } = productData;
    return (
        <Box
            sx={{
                border: 1,
                borderColor: "lightgrey",
                backgroundColor: "lavenderblush",
                borderRadius: 1,
                mb: 2,
                py: 2
            }}
        >
            <Grid
                container
                spacing={2}
                style={{ display: "flex", alignItems: "center" }}
            >
                <Grid item xs={12} md={2} sx={{ textAlign: "left" }}>
                    <Box>
                        <img style={{ width: "100%" }} src={img} alt="" />
                    </Box>
                </Grid>
                <Grid item xs={12} md={4} sx={{ textAlign: "left" }}>
                    <Box sx={{ ml: 5 }}>
                        <Typography sx={{ fontWeight: "bold" }}>
                            Product Detail
                        </Typography>
                        <Typography>Product: {productName}</Typography>
                        <Typography>Brand: {brand}</Typography>
                        <Typography>Year: {year}</Typography>
                        <Typography>Displacement: {displacement} CC</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4} sx={{ textAlign: "left" }}>
                    <Box sx={{ ml: 5 }}>
                        <Typography sx={{ fontWeight: "bold" }}>
                            Delivery Information
                        </Typography>
                        <Typography>Customer Name: {customerName}</Typography>
                        <Typography>Address: {address}</Typography>
                        <Typography>Contact: {phone}</Typography>
                        {status ? (
                            <Alert severity="success">{status}</Alert>
                        ) : (
                            <Alert severity="error">"Pending"</Alert>
                        )}
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={2}
                    sx={{
                        textAlign: "left",
                        display: "flex",
                        justifyContent: "center"
                    }}
                >
                    <Button
                        onClick={() => handleDelete(order._id)}
                        variant="contained"
                        color="error"
                        sx={{ mr: 1 }}
                    >
                        Delete
                    </Button>
                    {admin && !status && (
                        <Button
                            onClick={() => handleUpdate(order._id)}
                            variant="contained"
                            color="success"
                            sx={{ ml: 1 }}
                        >
                            Update
                        </Button>
                    )}
                </Grid>
            </Grid>
        </Box>
    );
};

export default Order;
