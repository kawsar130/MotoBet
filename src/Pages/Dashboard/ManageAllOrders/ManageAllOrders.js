import { Alert, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Order from "../Order/Order";

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    const [deleteStatus, setDeleteStatus] = useState("");
    const [updateStatus, setUpdateStatus] = useState("");
    const [update, setUpdate] = useState(false);

    const { admin } = useAuth();

    useEffect(() => {
        const url = "https://stark-beyond-32780.herokuapp.com/orders";
        fetch(url)
            .then((res) => res.json())
            .then((data) => setOrders(data))
            .catch((error) => console.log(error.message));
    }, [update]);

    const handleDelete = (id) => {
        const confirm = window.confirm("Are you sure you want to update this?");
        if (confirm) {
            fetch(
                `https://stark-beyond-32780.herokuapp.com/deleteOrder/${id}`,
                {
                    method: "DELETE",
                    headers: { "Content-Type": "application/json" }
                }
            )
                .then((res) => res.json())
                .then((result) => {
                    result.deletedCount === 1
                        ? setDeleteStatus("Order deleted successfully.")
                        : setDeleteStatus("Order could not be deleted!");
                    setUpdateStatus("");
                    if (update) {
                        setUpdate(false);
                    } else {
                        setUpdate(true);
                    }
                })
                .catch((err) => console.error(err));
        }
    };
    const handleUpdate = (id) => {
        const orderStatus = { status: "Shipped" };

        fetch(`https://stark-beyond-32780.herokuapp.com/updateOrder/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(orderStatus)
        })
            .then((res) => res.json())
            .then((result) => {
                result.modifiedCount === 1
                    ? setUpdateStatus("Delivery Status updated to 'Shipped'.")
                    : setUpdateStatus("Delivery Status could not be updated!");
                setDeleteStatus("");
                if (update) {
                    setUpdate(false);
                } else {
                    setUpdate(true);
                }
            })
            .catch((err) => console.error(err));
    };

    return (
        <div>
            <h2>Manage All Orders</h2>
            <Typography>Orders Found Total: {orders.length}</Typography>
            {deleteStatus && (
                <Alert
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        marginBottom: "10px"
                    }}
                    severity="warning"
                >
                    {deleteStatus}
                </Alert>
            )}
            {updateStatus && (
                <Alert
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        marginBottom: "10px"
                    }}
                    severity="info"
                >
                    {updateStatus}
                </Alert>
            )}
            {!orders.length && !admin && (
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
            {!orders.length && admin && (
                <Alert
                    style={{ display: "flex", justifyContent: "center" }}
                    severity="info"
                >
                    No Order Found! Keep EYE on Marketing Department!
                </Alert>
            )}
            {orders &&
                orders.map((order) => (
                    <Order
                        key={order._id}
                        order={order}
                        handleDelete={handleDelete}
                        handleUpdate={handleUpdate}
                    ></Order>
                ))}
        </div>
    );
};

export default ManageAllOrders;
