import * as React from "react";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import Orders from "../Orders/Orders";
import useAuth from "../../../hooks/useAuth";
import AddMotorcycle from "../AddMotorcycle/AddMotorcycle";

const orderImg = "https://i.ibb.co/RYpzf46/order.png";

const DashboardHome = () => {
    const { admin } = useAuth();
    return (
        <Box>
            {admin ? (
                <AddMotorcycle></AddMotorcycle>
            ) : (
                <Grid container spacing={2}>
                    <Grid item xs={12} md={9}>
                        <Box>
                            <Orders></Orders>
                        </Box>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={3}
                        style={{ display: "flex", alignItems: "center" }}
                    >
                        <img style={{ width: "100%" }} src={orderImg} alt="" />
                    </Grid>
                </Grid>
            )}
        </Box>
    );
};

export default DashboardHome;
