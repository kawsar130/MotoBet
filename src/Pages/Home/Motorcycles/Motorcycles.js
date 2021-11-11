import { CircularProgress, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Motorcycle from "../../Motorcycle/Motorcycle";

const Motorcycles = () => {
    const [motorcycles, setMotorcycles] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/motorcycles")
            .then((res) => res.json())
            .then((data) => setMotorcycles(data));
    }, [motorcycles]);
    return (
        <div>
            <h2>Our Popular Motorcycles</h2>
            {!motorcycles.length ? (
                <div style={{ height: "50vh" }}>
                    <Typography>Loading..</Typography>
                    <CircularProgress />
                </div>
            ) : (
                <div>
                    {motorcycles.map((motorcycle) => (
                        <Motorcycle
                            key={motorcycle._id}
                            motorcycle={motorcycle}
                        ></Motorcycle>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Motorcycles;
