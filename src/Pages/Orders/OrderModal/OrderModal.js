import { Button, Fade, Modal, TextField, Typography } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import { Box } from "@mui/system";
import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "white",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4
};

const OrderModal = ({
    openOrder,
    handleOrderClose,
    foundMotorcycle,
    setOrderSuccess,
    orderInfo,
    setOrderInfo
}) => {
    const { user } = useAuth();

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newOrderData = { ...orderInfo };
        newOrderData[field] = value;
        setOrderInfo(newOrderData);
    };

    const handleOrderSubmit = (e) => {
        // Collect data
        const order = {
            ...orderInfo,
            productName: foundMotorcycle.name,
            productId: foundMotorcycle._Id
        };

        // Send to the server
        fetch("http://localhost:5000/orders", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(order)
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.result.insertedId) {
                    handleOrderClose();
                    setOrderSuccess(true);
                }
            });

        e.preventDefault();
    };

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openOrder}
            onClose={handleOrderClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500
            }}
        >
            <Fade in={openOrder}>
                <Box sx={style}>
                    <Typography
                        id="transition-modal-title"
                        variant="h6"
                        component="h2"
                    >
                        Order: {foundMotorcycle?.name}
                    </Typography>
                    <form onSubmit={handleOrderSubmit}>
                        <TextField
                            disabled
                            sx={{ width: "90%", mb: 1 }}
                            id="outlined-size-small"
                            defaultValue={foundMotorcycle?.name}
                            size="small"
                        />
                        <TextField
                            sx={{ width: "90%", mb: 1 }}
                            id="outlined-size-small"
                            name="customerName"
                            onBlur={handleOnBlur}
                            defaultValue={user.displayName}
                            size="small"
                        />
                        <TextField
                            sx={{ width: "90%", mb: 1 }}
                            id="outlined-size-small"
                            name="email"
                            onBlur={handleOnBlur}
                            defaultValue={user.email}
                            size="small"
                        />
                        <TextField
                            sx={{ width: "90%", mb: 1 }}
                            id="outlined-size-small"
                            onBlur={handleOnBlur}
                            name="phone"
                            defaultValue="Your Phone Number"
                            size="small"
                        />
                        <TextField
                            sx={{ width: "90%", mb: 1 }}
                            id="outlined-size-small"
                            onBlur={handleOnBlur}
                            name="address"
                            defaultValue="Your delivery address"
                            size="small"
                        />

                        <Button
                            sx={{ mt: 1 }}
                            type="submit"
                            variant="contained"
                        >
                            Place Order
                        </Button>
                    </form>
                </Box>
            </Fade>
        </Modal>
    );
};

export default OrderModal;
