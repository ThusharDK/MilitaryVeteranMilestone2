import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
  Paper,
} from '@mui/material';
import {
  Assignment as SchemesIcon,
  Emergency as EmergencyIcon,
  Store as MarketplaceIcon,
  Feedback as GrievancesIcon,
} from '@mui/icons-material';

const features = [
  {
    title: 'Welfare Schemes',
    description: 'Access and apply for various welfare schemes available for military personnel and their families.',
    icon: <SchemesIcon sx={{ fontSize: 40 }} />,
    path: '/schemes',
  },
  {
    title: 'Emergency Support',
    description: 'Quick access to emergency contacts and support services in times of need.',
    icon: <EmergencyIcon sx={{ fontSize: 40 }} />,
    path: '/emergency',
  },
  {
    title: 'Resource Marketplace',
    description: 'Share and access resources within the military community.',
    icon: <MarketplaceIcon sx={{ fontSize: 40 }} />,
    path: '/marketplace',
  },
  {
    title: 'Grievance Redressal',
    description: 'File and track grievances with transparent resolution process.',
    icon: <GrievancesIcon sx={{ fontSize: 40 }} />,
    path: '/grievances',
  },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4, mb: 8 }}>
        <Paper
          elevation={0}
          sx={{
            p: 4,
            textAlign: 'center',
            background: 'linear-gradient(45deg, #1976d2 30%, #42a5f5 90%)',
            color: 'white',
            borderRadius: 2,
          }}
        >
          <Typography variant="h3" component="h1" gutterBottom>
            Welcome to Military Welfare Portal
          </Typography>
          <Typography variant="h6" sx={{ mb: 4 }}>
            A comprehensive platform for military personnel and their families
          </Typography>
        </Paper>
      </Box>

      <Grid container spacing={4}>
        {features.map((feature) => (
          <Grid item xs={12} sm={6} md={3} key={feature.title}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                },
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    mb: 2,
                    color: 'primary.main',
                  }}
                >
                  {feature.icon}
                </Box>
                <Typography gutterBottom variant="h5" component="h2" align="center">
                  {feature.title}
                </Typography>
                <Typography align="center" color="text.secondary">
                  {feature.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  fullWidth
                  variant="contained"
                  onClick={() => navigate(feature.path)}
                >
                  Access
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 8, mb: 4 }}>
        <Paper sx={{ p: 4 }}>
          <Typography variant="h4" gutterBottom>
            About the Platform
          </Typography>
          <Typography paragraph>
            The Military Welfare Portal is designed to streamline and enhance the welfare management system
            for Indian Armed Forces personnel and their families. Our platform provides easy access to
            various welfare schemes, emergency support, resource sharing, and grievance redressal.
          </Typography>
          <Typography paragraph>
            We are committed to making the welfare process more transparent, efficient, and accessible
            to all military personnel and their families. Our goal is to strengthen the support system
            and build a stronger military community.
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default Home; 