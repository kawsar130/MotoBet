import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
  const [email, setEmail] = useState('');
  const [adminSuccess, setAdminSuccess] = useState(false);
  const [adminFailed, setAdminFailed] = useState(false);
  const { token } = useAuth();

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };

  const handleAdminSubmit = (e) => {
    const user = { email };
    e.preventDefault();
    fetch('https://motobet-server.onrender.com/users/admin', {
      method: 'PUT',
      headers: {
        authorization: `Bearer ${token}`,
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount === 1) {
          console.log(data);

          setAdminSuccess(true);
          setAdminFailed(false);
        } else {
          setAdminSuccess(false);
          setAdminFailed(true);
        }
      });
  };
  return (
    <div>
      <h2>Make an Admin</h2>
      <form onSubmit={handleAdminSubmit}>
        <TextField
          onBlur={handleOnBlur}
          label="Email"
          type="email"
          variant="standard"
          placeholder="Email"
          sx={{ width: '50%' }}
        />
        <Button type="submit" variant="contained">
          Make Admin
        </Button>
      </form>
      {adminSuccess && (
        <Alert sx={{ width: '50%', mx: 'auto', mt: 3 }} severity="success">
          Admin added Successfully
        </Alert>
      )}
      {adminFailed && (
        <Alert sx={{ width: '50%', mx: 'auto', mt: 3 }} severity="error">
          Making Admin failed! Try again.
        </Alert>
      )}
    </div>
  );
};

export default MakeAdmin;
