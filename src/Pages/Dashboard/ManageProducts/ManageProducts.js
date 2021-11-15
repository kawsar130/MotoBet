import {
    Alert,
    CircularProgress,
    Container,
    Grid,
    Typography
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import ManageSingleProduct from "./ManageSingleProduct/ManageSingleProduct";

const ManageProducts = () => {
    const [motorcycles, setMotorcycles] = useState([]);
    const [deleteStatus, setDeleteStatus] = useState("");
    const [update, setUpdate] = useState(false);

    useEffect(() => {
        const url = "https://stark-beyond-32780.herokuapp.com/motorcycles";
        fetch(url)
            .then((res) => res.json())
            .then((data) => setMotorcycles(data))
            .catch((error) => console.log(error.message));
    }, [update]);

    const handleDelete = (id) => {
        const confirm = window.confirm("Are you sure you want to delete this?");
        if (confirm) {
            fetch(
                `https://stark-beyond-32780.herokuapp.com/deleteMotorcycle/${id}`,
                {
                    method: "DELETE",
                    headers: { "Content-Type": "application/json" }
                }
            )
                .then((res) => res.json())
                .then((result) => {
                    result.deletedCount === 1
                        ? setDeleteStatus("Product Deleted Successfully.")
                        : setDeleteStatus("Product could not be deleted!");
                    if (update) {
                        setUpdate(false);
                    } else {
                        setUpdate(true);
                    }
                })
                .catch((err) => console.error(err));
        }
    };

    return (
        <div>
            <h2>Manage All Products</h2>
            {deleteStatus && (
                <Alert
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        marginBottom: "10px"
                    }}
                    severity="info"
                >
                    {deleteStatus}
                </Alert>
            )}
            {!motorcycles.length && (
                <Alert
                    style={{ display: "flex", justifyContent: "center" }}
                    severity="info"
                >
                    Not product found! Add some products from
                    <strong>
                        <Link
                            style={{
                                textDecoration: "none"
                            }}
                            to="/allMotorcycles"
                        >
                            {" "}
                            Here
                        </Link>
                    </strong>
                </Alert>
            )}
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
                                <ManageSingleProduct
                                    key={motorcycle._id}
                                    motorcycle={motorcycle}
                                    handleDelete={handleDelete}
                                ></ManageSingleProduct>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            )}
        </div>
    );
};

export default ManageProducts;
