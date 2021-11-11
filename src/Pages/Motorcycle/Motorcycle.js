import React from "react";

const Motorcycle = ({ motorcycle }) => {
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
        <div>
            <h2>
                {name} {displacement}CC
            </h2>
        </div>
    );
};

export default Motorcycle;
