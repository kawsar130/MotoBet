import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const ClientFeedback = ({ review }) => {
    const { name, motorcycle, feedback, rating } = review;
    return (
        <Box
            sx={{
                border: 1,
                borderColor: "lightgrey",
                backgroundColor: "azure",
                borderRadius: 1
            }}
        >
            <Box
                sx={{
                    height: "120px",
                    overflow: "hidden",
                    p: 3,
                    borderBottom: 2,
                    borderColor: "lightgrey",
                    textAlign: "left"
                }}
            >
                <Typography variant="body2" sx={{ fontStyle: "italic" }}>
                    “{feedback}”
                </Typography>
            </Box>
            <Box
                sx={{
                    height: "100%",
                    p: 1,

                    backgroundColor: "lightcyan"
                }}
            >
                <Typography variant="subtitle2">
                    {name} - {motorcycle} Riders
                </Typography>

                <Typography variant="body2">Rating: {rating}</Typography>
            </Box>
        </Box>
    );
};

export default ClientFeedback;
