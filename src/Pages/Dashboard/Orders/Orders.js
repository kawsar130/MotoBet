import { Alert, AlertTitle } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Order from "../Order/Order";

const Orders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    const [deleteStatus, setDeleteStatus] = useState("");

    useEffect(() => {
        const url = `http://localhost:5000/orders?email=${user.email}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setOrders(data))
            .catch((error) => console.log(error.message));
    }, [orders]);

    const handleDelete = (id) => {
        const confirm = window.confirm("Are you sure you want to cancel this?");
        if (confirm) {
            fetch(`http://localhost:5000/deleteOrder/${id}`, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" }
            })
                .then((res) => res.json())
                .then((result) => {
                    result.deletedCount === 1
                        ? setDeleteStatus("Order Cancelled Successfully.")
                        : setDeleteStatus("Order could not be cancelled!");
                })
                .catch((err) => console.error(err));
        }
    };

    return (
        <div>
            <h2>Your Order Summary</h2>
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
            {!orders.length && (
                <Alert
                    style={{ display: "flex", justifyContent: "center" }}
                    severity="info"
                >
                    You did not place any order yet! Let's Check out our best
                    <strong>
                        <Link
                            style={{
                                textDecoration: "none"
                            }}
                            to="/allMotorcycles"
                        >
                            {" "}
                            COLLECTION!
                        </Link>
                    </strong>
                </Alert>
            )}
            {orders &&
                orders.map((order) => (
                    <Order
                        key={order._id}
                        order={order}
                        handleDelete={handleDelete}
                    ></Order>
                ))}
        </div>
    );
};

export default Orders;
