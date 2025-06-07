import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Box,
  Alert,
  Link,
  MenuItem,
  Grid,
} from '@mui/material';
import { register, clearError } from '../../store/slices/authSlice';

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password should be of minimum 6 characters length')
    .required('Password is required'),
  role: Yup.string().required('Role is required'),
  contactNumber: Yup.string().required('Contact number is required'),
  serviceNumber: Yup.string().when('role', {
    is: 'officer',
    then: Yup.string().required('Service number is required'),
  }),
  rank: Yup.string().when('role', {
    is: 'officer',
    then: Yup.string().required('Rank is required'),
  }),
  unit: Yup.string().when('role', {
    is: 'officer',
    then: Yup.string().required('Unit is required'),
  }),
});

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);
  const [role, setRole] = useState('');

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      role: '',
      contactNumber: '',
      serviceNumber: '',
      rank: '',
      unit: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const result = await dispatch(register(values));
      if (!result.error) {
        navigate('/');
      }
    },
  });

  React.useEffect(() => {
    return () => {
      dispatch(clearError());
    };
  }, [dispatch]);

  const handleRoleChange = (event) => {
    setRole(event.target.value);
    formik.setFieldValue('role', event.target.value);
  };

  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          {error && (
            <Alert severity="error" sx={{ width: '100%', mt: 2 }}>
              {error}
            </Alert>
          )}
          <Box
            component="form"
            onSubmit={formik.handleSubmit}
            sx={{ mt: 3, width: '100%' }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="name"
                  name="name"
                  label="Full Name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="email"
                  name="email"
                  label="Email Address"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={formik.touched.password && Boolean(formik.errors.password)}
                  helperText={formik.touched.password && formik.errors.password}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  select
                  id="role"
                  name="role"
                  label="Role"
                  value={formik.values.role}
                  onChange={handleRoleChange}
                  error={formik.touched.role && Boolean(formik.errors.role)}
                  helperText={formik.touched.role && formik.errors.role}
                >
                  <MenuItem value="officer">Officer</MenuItem>
                  <MenuItem value="family_member">Family Member</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="contactNumber"
                  name="contactNumber"
                  label="Contact Number"
                  value={formik.values.contactNumber}
                  onChange={formik.handleChange}
                  error={formik.touched.contactNumber && Boolean(formik.errors.contactNumber)}
                  helperText={formik.touched.contactNumber && formik.errors.contactNumber}
                />
              </Grid>
              {role === 'officer' && (
                <>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      id="serviceNumber"
                      name="serviceNumber"
                      label="Service Number"
                      value={formik.values.serviceNumber}
                      onChange={formik.handleChange}
                      error={formik.touched.serviceNumber && Boolean(formik.errors.serviceNumber)}
                      helperText={formik.touched.serviceNumber && formik.errors.serviceNumber}
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
                    />
                  </Grid>
                </>
              )}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={loading}
            >
              {loading ? 'Signing up...' : 'Sign Up'}
            </Button>
            <Box sx={{ textAlign: 'center' }}>
              <Link
                component="button"
                variant="body2"
                onClick={() => navigate('/login')}
              >
                Already have an account? Sign in
              </Link>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default Register; 