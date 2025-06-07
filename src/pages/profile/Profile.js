import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  Grid,
  TextField,
  Button,
  Avatar,
  Divider,
} from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  // Mock user data
  const initialValues = {
    name: 'Thushar D K',
    serviceNumber: '25042005',
    rank: 'Major',
    unit: '1st Battalion',
    email: 'thushar@gmail.com',
    phone: '+91 1029384756',
    address: 'Military Quarters, New Delhi',
  };

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      serviceNumber: Yup.string().required('Service number is required'),
      rank: Yup.string().required('Rank is required'),
      unit: Yup.string().required('Unit is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      phone: Yup.string().required('Phone number is required'),
      address: Yup.string().required('Address is required'),
    }),
    onSubmit: (values) => {
      // Handle profile update
      console.log('Updated profile:', values);
      setIsEditing(false);
    },
  });

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Profile
        </Typography>
      </Box>

      <Paper sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
          <Avatar
            sx={{ width: 100, height: 100, mr: 3 }}
            alt={formik.values.name}
            src="/static/images/avatar/1.jpg"
          />
          <Box>
            <Typography variant="h5">{formik.values.name}</Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {formik.values.rank} | {formik.values.unit}
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ mb: 4 }} />

        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="name"
                name="name"
                label="Full Name"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
                disabled={!isEditing}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="serviceNumber"
                name="serviceNumber"
                label="Service Number"
                value={formik.values.serviceNumber}
                onChange={formik.handleChange}
                error={formik.touched.serviceNumber && Boolean(formik.errors.serviceNumber)}
                helperText={formik.touched.serviceNumber && formik.errors.serviceNumber}
                disabled={!isEditing}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="rank"
                name="rank"
                label="Rank"
                value={formik.values.rank}
                onChange={formik.handleChange}
                error={formik.touched.rank && Boolean(formik.errors.rank)}
                helperText={formik.touched.rank && formik.errors.rank}
                disabled={!isEditing}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="unit"
                name="unit"
                label="Unit"
                value={formik.values.unit}
                onChange={formik.handleChange}
                error={formik.touched.unit && Boolean(formik.errors.unit)}
                helperText={formik.touched.unit && formik.errors.unit}
                disabled={!isEditing}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="email"
                name="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                disabled={!isEditing}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="phone"
                name="phone"
                label="Phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                error={formik.touched.phone && Boolean(formik.errors.phone)}
                helperText={formik.touched.phone && formik.errors.phone}
                disabled={!isEditing}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="address"
                name="address"
                label="Address"
                value={formik.values.address}
                onChange={formik.handleChange}
                error={formik.touched.address && Boolean(formik.errors.address)}
                helperText={formik.touched.address && formik.errors.address}
                disabled={!isEditing}
              />
            </Grid>
          </Grid>

          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
            {isEditing ? (
              <>
                <Button
                  variant="outlined"
                  onClick={() => {
                    setIsEditing(false);
                    formik.resetForm();
                  }}
                >
                  Cancel
                </Button>
                <Button type="submit" variant="contained" color="primary">
                  Save Changes
                </Button>
              </>
            ) : (
              <Button
                variant="contained"
                color="primary"
                onClick={() => setIsEditing(true)}
              >
                Edit Profile
              </Button>
            )}
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default Profile; 