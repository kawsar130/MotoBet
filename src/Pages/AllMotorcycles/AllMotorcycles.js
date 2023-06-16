import { CircularProgress, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar';
import Motorcycle from '../Motorcycle/Motorcycle';

const AllMotorcycles = () => {
  const [motorcycles, setMotorcycles] = useState([]);
  const [update, setUpdate] = useState(false);
  useEffect(() => {
    fetch('https://motobet-server.onrender.com/motorcycles')
      .then((res) => res.json())
      .then((data) => {
        setMotorcycles(data);
        if (update) {
          setUpdate(false);
        } else {
          setUpdate(true);
        }
      })
      .catch((error) => console.log(error.message));
  }, []);
  return (
    <Box>
      <NavigationBar></NavigationBar>
      <Box sx={{ mb: 5 }}>
        <h1>Our Motorcycle Collection</h1>
        {!motorcycles.length ? (
          <div style={{ height: '50vh' }}>
            <Typography>Loading..</Typography>
            <CircularProgress />
          </div>
        ) : (
          <Container>
            <Grid container spacing={3}>
              {motorcycles.map((motorcycle) => (
                <Grid item xs={12} sm={6} md={4}>
                  <Motorcycle
                    key={motorcycle._id}
                    motorcycle={motorcycle}
                  ></Motorcycle>
                </Grid>
              ))}
            </Grid>
          </Container>
        )}
      </Box>
    </Box>
  );
};

export default AllMotorcycles;
