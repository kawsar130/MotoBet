import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import useAuth from '../../hooks/useAuth';
import OrderModal from '../Orders/OrderModal/OrderModal';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar';
import './MotorcycleDetail.css';

const thumbsUp = 'https://i.ibb.co/cvxSQhR/thumbsUp.png';

const MotorcycleDetail = () => {
  const [openOrder, setOpenOrder] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const { motorcycleId } = useParams();
  const [motorcycles, setMotorcycles] = useState([]);
  const { user } = useAuth();

  const initialInfo = {
    customerName: user.displayName,
    email: user.email,
    phone: ''
  };
  const [orderInfo, setOrderInfo] = useState(initialInfo);

  const handleOrderOpen = () => setOpenOrder(true);
  const handleOrderClose = () => setOpenOrder(false);

  useEffect(() => {
    fetch('https://motobet-server.onrender.com/motorcycles')
      .then((res) => res.json())
      .then((data) => setMotorcycles(data))
      .catch((error) => console.log(error.message));
  }, []);

  const foundMotorcycle = motorcycles.find((x) => x._id === motorcycleId);
  let name, price, year, category, brand, power, displacement, description, img;

  if (foundMotorcycle) {
    ({
      name,
      price,
      year,
      category,
      brand,
      power,
      displacement,
      description,
      img
    } = foundMotorcycle);
  }

  return (
    <Box>
      <NavigationBar></NavigationBar>
      <Container sx={{ py: 5, backgroundColor: 'lavenderblush' }}>
        <Box>
          <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
            {name}
          </Typography>
        </Box>
        <Box sx={{ mb: 5 }}>
          <img src={img} alt="" style={{ width: '100%', maxWidth: '640px' }} />
        </Box>
        <Box>
          <Box sx={{ mb: 5 }}>
            <Typography variant="h3" sx={{ mb: 2 }}>
              Motorcycle Overview
            </Typography>
            <Typography>{description}</Typography>
          </Box>
          <Box
            sx={{
              py: 5
            }}
          >
            <Typography variant="h4" sx={{ mb: 5 }}>
              Details Specification
            </Typography>
            <Grid container spacing={1}>
              <Grid
                item
                xs={12}
                md={6}
                sx={{ py: 5 }}
                className="spec-box-container"
              >
                <Box className="spec-box">
                  <Typography variant="subtitle1">Brand</Typography>
                  <Typography variant="h5">{brand}</Typography>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                sx={{ py: 5 }}
                className="spec-box-container"
              >
                <Box className="spec-box">
                  <Typography variant="subtitle1">Category</Typography>
                  <Typography variant="h5">{category}</Typography>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                sx={{ py: 5 }}
                className="spec-box-container"
              >
                <Box className="spec-box">
                  <Typography variant="subtitle1">
                    Engine Displacement
                  </Typography>
                  <Typography variant="h5">{displacement} CC</Typography>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                sx={{ py: 5 }}
                className="spec-box-container"
              >
                <Box className="spec-box">
                  <Typography variant="subtitle1">Power</Typography>
                  <Typography variant="h5">{power} BHP</Typography>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                sx={{ py: 5 }}
                className="spec-box-container"
              >
                <Box className="spec-box">
                  <Typography variant="subtitle1">Year Released</Typography>
                  <Typography variant="h5">{year}</Typography>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                sx={{ py: 5 }}
                className="spec-box-container"
              >
                <Box className="spec-box">
                  <Typography variant="subtitle1">Price</Typography>
                  <Typography variant="h5">${price}</Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box>
          {!orderSuccess ? (
            <Button
              onClick={handleOrderOpen}
              variant="contained"
              color="success"
              size="large"
            >
              Place Order
            </Button>
          ) : (
            <Box>
              <Typography variant="h5">Congrats!</Typography>
              <Typography variant="h5">
                Your Order Has Placed Successfully
              </Typography>
              <Typography>Your {name} is on the way to Home! ;-)</Typography>
              <Box sx={{ mt: 5 }}>
                <img
                  style={{ width: '100%', maxWidth: '500px' }}
                  src={thumbsUp}
                  alt=""
                />
              </Box>
            </Box>
          )}
        </Box>
        <OrderModal
          handleOrderClose={handleOrderClose}
          openOrder={openOrder}
          foundMotorcycle={foundMotorcycle}
          setOrderSuccess={setOrderSuccess}
          orderInfo={orderInfo}
          setOrderInfo={setOrderInfo}
        ></OrderModal>
      </Container>
    </Box>
  );
};

export default MotorcycleDetail;
