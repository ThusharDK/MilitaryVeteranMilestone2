import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const Emergency = () => {
  const emergencyContacts = [
    {
      title: 'Military Hospital',
      phone: '1800-XXX-XXXX',
      location: 'Delhi Cantonment, New Delhi',
      timing: '24/7 Emergency Services',
    },
    {
      title: 'Military Police',
      phone: '1800-XXX-XXXX',
      location: 'Headquarters, New Delhi',
      timing: '24/7 Emergency Response',
    },
    {
      title: 'Crisis Hotline',
      phone: '1800-XXX-XXXX',
      location: 'National Crisis Center',
      timing: '24/7 Counseling Services',
    },
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Emergency Contacts
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Immediate assistance and support available 24/7 for military personnel and their families.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {emergencyContacts.map((contact, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  {contact.title}
                </Typography>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <PhoneIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary="Phone"
                      secondary={
                        <Button
                          variant="text"
                          color="primary"
                          href={`tel:${contact.phone}`}
                        >
                          {contact.phone}
                        </Button>
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <LocationOnIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="Location" secondary={contact.location} />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <AccessTimeIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="Availability" secondary={contact.timing} />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 4, p: 3, bgcolor: 'error.light', borderRadius: 1 }}>
        <Typography variant="h6" color="error" gutterBottom>
          Important Notice
        </Typography>
        <Typography variant="body2" color="error">
          In case of life-threatening emergencies, please call the nearest emergency number
          immediately. This page is for non-life-threatening situations and general support.
        </Typography>
      </Box>
    </Container>
  );
};

export default Emergency; 