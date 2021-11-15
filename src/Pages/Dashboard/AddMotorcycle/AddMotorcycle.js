import { Alert, Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const AddMotorcycle = () => {
    const [motorcycleData, setMotorcycleData] = useState({});
    const [addStatus, setAddStatus] = useState(false);

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newData = { ...motorcycleData };
        newData[field] = value;
        setMotorcycleData(newData);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("http://localhost:5000/motorcycles", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(motorcycleData)
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    setAddStatus(true);
                }
            });
    };

    const handleAddAnother = () => {
        setAddStatus(false);
    };

    return (
        <Box
            component="form"
            sx={{
                "& .MuiTextField-root": { m: 1, width: "75%" }
            }}
            noValidate
            autoComplete="off"
        >
            <Typography variant="h4" sx={{ mb: 2 }}>
                Add Motorcycle to the collection
            </Typography>
            {!addStatus ? (
                <Box>
                    <form
                        onSubmit={handleSubmit}
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center"
                        }}
                    >
                        <TextField
                            onBlur={handleOnBlur}
                            name="name"
                            required
                            id="filled-basic"
                            label="Motorcycle Name"
                            variant="filled"
                        />
                        <TextField
                            onBlur={handleOnBlur}
                            name="price"
                            required
                            id="filled-basic"
                            label="Price"
                            variant="filled"
                        />
                        <TextField
                            onBlur={handleOnBlur}
                            name="year"
                            required
                            id="filled-basic"
                            label="Year"
                            variant="filled"
                        />
                        <TextField
                            onBlur={handleOnBlur}
                            name="category"
                            required
                            id="filled-basic"
                            label="Category"
                            variant="filled"
                        />
                        <TextField
                            onBlur={handleOnBlur}
                            name="brand"
                            required
                            id="filled-basic"
                            label="Brand"
                            variant="filled"
                        />
                        <TextField
                            onBlur={handleOnBlur}
                            name="power"
                            required
                            id="filled-basic"
                            label="Power"
                            variant="filled"
                        />
                        <TextField
                            onBlur={handleOnBlur}
                            name="displacement"
                            required
                            id="filled-basic"
                            label="Displacement"
                            variant="filled"
                        />
                        <Typography>
                            PNG Format Recommended for Image
                        </Typography>
                        <TextField
                            onBlur={handleOnBlur}
                            name="img"
                            id="filled-textarea"
                            label="Image Link"
                            multiline
                            variant="filled"
                            placeholder="Recommendation> Width: 640px; Height 494px"
                        />
                        <TextField
                            onBlur={handleOnBlur}
                            name="description"
                            id="filled-textarea"
                            label="Description"
                            multiline
                            variant="filled"
                        />
                        <Button
                            onClick={handleSubmit}
                            variant="contained"
                            color="success"
                        >
                            Add Motorcycle
                        </Button>
                    </form>
                </Box>
            ) : (
                <Box>
                    <Alert
                        style={{ display: "flex", justifyContent: "center" }}
                        sx={{ mb: 3 }}
                        severity="info"
                    >
                        Motorcycle Added Successfully to the Collection. Add
                        Another?
                    </Alert>
                    <Button
                        onClick={handleAddAnother}
                        variant="contained"
                        color="success"
                    >
                        Add Another Motorcycle
                    </Button>
                </Box>
            )}
        </Box>
    );
};

export default AddMotorcycle;
