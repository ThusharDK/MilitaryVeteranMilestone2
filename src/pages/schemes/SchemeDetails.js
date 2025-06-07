import React from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  Grid,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useParams, useNavigate } from 'react-router-dom';

const SchemeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock data for scheme details
  const schemeDetails = {
    id: parseInt(id),
    title: 'Educational Assistance',
    description: 'Financial support for education of military personnel and their families.',
    eligibility: [
      'Active military personnel',
      'Retired military personnel',
      'Spouses and children of military personnel',
    ],
    benefits: [
      'Tuition fee reimbursement up to 100%',
      'Book and stationery allowance',
      'Special coaching for competitive exams',
    ],
    documents: [
      'Service ID proof',
      'Educational certificates',
      'Fee receipts',
      'Bank account details',
    ],
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {schemeDetails.title}
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          {schemeDetails.description}
        </Typography>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3, mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              Eligibility Criteria
            </Typography>
            <List>
              {schemeDetails.eligibility.map((item, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <CheckCircleIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </Paper>

          <Paper sx={{ p: 3, mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              Benefits
            </Typography>
            <List>
              {schemeDetails.benefits.map((item, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <CheckCircleIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </Paper>

          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Required Documents
            </Typography>
            <List>
              {schemeDetails.documents.map((item, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <CheckCircleIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, position: 'sticky', top: 20 }}>
            <Typography variant="h6" gutterBottom>
              Ready to Apply?
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Make sure you have all the required documents ready before proceeding with the application.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => navigate(`/schemes/${id}/apply`)}
              sx={{ mb: 2 }}
            >
              Apply Now
            </Button>
            <Button
              variant="outlined"
              color="primary"
              fullWidth
              onClick={() => navigate('/schemes')}
            >
              Back to Schemes
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SchemeDetails; 