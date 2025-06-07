import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Box,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Schemes = () => {
  const navigate = useNavigate();

  // Mock data for schemes
  const schemes = [
    {
      id: 1,
      title: 'Educational Assistance',
      description: 'Financial support for education of military personnel and their families.',
      category: 'education',
    },
    {
      id: 2,
      title: 'Medical Benefits',
      description: 'Comprehensive healthcare coverage for military families.',
      category: 'medical',
    },
    {
      id: 3,
      title: 'Housing Scheme',
      description: 'Assistance with housing and accommodation for military personnel.',
      category: 'housing',
    },
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welfare Schemes
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Browse and apply for various welfare schemes available for military personnel and their families.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {schemes.map((scheme) => (
          <Grid item xs={12} sm={6} md={4} key={scheme.id}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  {scheme.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {scheme.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => navigate(`/schemes/${scheme.id}`)}
                >
                  Learn More
                </Button>
                <Button
                  size="small"
                  color="primary"
                  variant="contained"
                  onClick={() => navigate(`/schemes/${scheme.id}/apply`)}
                >
                  Apply Now
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Schemes; 