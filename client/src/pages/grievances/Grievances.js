import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Grid,
  Card,
  CardContent,
  Chip,
} from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Grievances = () => {
  const [open, setOpen] = useState(false);

  // Mock data for grievances
  const [grievances, setGrievances] = useState([
    {
      id: 1,
      title: 'Housing Issue',
      description: 'Delay in allocation of military quarters',
      status: 'pending',
      date: '2025-04-25',
    },
    {
      id: 2,
      title: 'Medical Benefits',
      description: 'Issues with medical claim processing',
      status: 'resolved',
      date: '2025-06-o3',
    },
  ]);

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Title is required'),
      description: Yup.string().required('Description is required'),
    }),
    onSubmit: (values) => {
      const newGrievance = {
        id: grievances.length + 1,
        ...values,
        status: 'pending',
        date: new Date().toISOString().split('T')[0],
      };
      setGrievances([...grievances, newGrievance]);
      setOpen(false);
      formik.resetForm();
    },
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return 'warning';
      case 'resolved':
        return 'success';
      default:
        return 'default';
    }
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Grievance Redressal
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Submit and track your grievances here. We are committed to addressing your concerns promptly.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setOpen(true)}
          sx={{ mb: 4 }}
        >
          Submit New Grievance
        </Button>
      </Box>

      <Grid container spacing={3}>
        {grievances.map((grievance) => (
          <Grid item xs={12} key={grievance.id}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Typography variant="h6">{grievance.title}</Typography>
                  <Chip
                    label={grievance.status}
                    color={getStatusColor(grievance.status)}
                    size="small"
                  />
                </Box>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {grievance.description}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Submitted on: {grievance.date}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Submit New Grievance</DialogTitle>
        <form onSubmit={formik.handleSubmit}>
          <DialogContent>
            <TextField
              fullWidth
              id="title"
              name="title"
              label="Title"
              value={formik.values.title}
              onChange={formik.handleChange}
              error={formik.touched.title && Boolean(formik.errors.title)}
              helperText={formik.touched.title && formik.errors.title}
              margin="normal"
            />
            <TextField
              fullWidth
              id="description"
              name="description"
              label="Description"
              multiline
              rows={4}
              value={formik.values.description}
              onChange={formik.handleChange}
              error={formik.touched.description && Boolean(formik.errors.description)}
              helperText={formik.touched.description && formik.errors.description}
              margin="normal"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </Container>
  );
};

export default Grievances; 