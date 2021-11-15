import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const ManageSingleProduct = ({ motorcycle, handleDelete }) => {
    const {
        _id,
        name,
        price,
        year,
        category,
        brand,
        power,
        displacement,
        img
    } = motorcycle;
    return (
        <Box
            sx={{
                mb: 5,
                border: 1,
                borderColor: "lightgrey",
                borderRadius: 1
            }}
        >
            <Box
                style={{
                    display: "flex",
                    justifyContent: "space-around",
                    backgroundColor: "rgba(153, 11, 11, 0.04)"
                }}
            >
                <Typography variant="h6" sx={{ p: 2 }}>
                    {name}
                </Typography>
                <Typography
                    variant="h6"
                    sx={{ color: "red", fontWeight: "bold", p: 2 }}
                >
                    ${price}
                </Typography>
            </Box>
            <Box
                sx={{
                    backgroundColor: "gainsboro",
                    height: "280px"
                }}
            >
                <img
                    style={{ width: "100%", height: "100%" }}
                    src={img}
                    alt=""
                />
            </Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    py: 2,
                    backgroundColor: "rgba(153, 11, 11, 0.05)"
                }}
            >
                <Box sx={{ borderLeft: 2, borderColor: "lightgrey", px: 2 }}>
                    <Typography variant="button" sx={{ color: "grey" }}>
                        YEAR
                    </Typography>
                    <Typography variant="body2">{year}</Typography>
                </Box>
                <Box
                    sx={{
                        borderLeft: 2,
                        borderRight: 2,
                        borderColor: "lightgrey",
                        px: 2
                    }}
                >
                    <Typography variant="button" sx={{ color: "grey" }}>
                        TYPE
                    </Typography>
                    <Typography variant="body2">{category}</Typography>
                </Box>
                <Box sx={{ borderRight: 2, borderColor: "lightgrey", px: 2 }}>
                    <Typography variant="button" sx={{ color: "grey" }}>
                        BRAND
                    </Typography>
                    <Typography variant="body2">{brand}</Typography>
                </Box>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    backgroundColor: "rgba(153, 11, 11, 0.05)",
                    textAlign: "left",
                    py: 2,
                    borderTop: 2,
                    borderColor: "lightgrey"
                }}
            >
                <Box sx={{ px: 4 }}>
                    <Typography variant="button">Engine Power</Typography>
                    <Typography variant="body2">{power} HP</Typography>
                </Box>
                <Box sx={{ px: 4 }}>
                    <Typography variant="button">Displacement</Typography>
                    <Typography variant="body2">{displacement} CC</Typography>
                </Box>
            </Box>

            <Button
                onClick={() => handleDelete(_id)}
                variant="contained"
                color="error"
                sx={{ width: "100%" }}
            >
                Delete
            </Button>
        </Box>
    );
};

export default ManageSingleProduct;
