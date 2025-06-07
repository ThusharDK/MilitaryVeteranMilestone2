import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  TextField,
  InputAdornment,
  Chip,
  Tabs,
  Tab,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Marketplace = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Mock data for marketplace items
  const items = [
    {
      id: 1,
      title: 'Military Boots',
      description: 'High-quality combat boots for military personnel',
      price: '₹2,500',
      category: 'equipment',
      image: 'https://m.media-amazon.com/images/I/81S6MOINIEL._AC_UY1000_.jpg',
    },
    {
      id: 2,
      title: 'Tactical Backpack',
      description: 'Durable backpack with multiple compartments',
      price: '₹1,800',
      category: 'equipment',
      image: 'https://m.media-amazon.com/images/I/819ojF7IxEL._AC_UY1100_.jpg',
    },
    {
      id: 3,
      title: 'Military Fitness Guide',
      description: 'Comprehensive guide for physical training',
      price: '₹500',
      category: 'books',
      image: 'https://darebee.com/images/programs/military-fit/web/day23.jpg',
    },
    {
        id: 4,
        title: 'Military Cloth',
        description: 'Military Uniforms',
        price: '₹1000',
        category: 'clothing',
        image: 'https://treyondworld.com/wp-content/uploads/2024/11/indian-army-new-uniform.webp',
      },
  ];

  const categories = [
    { value: 'all', label: 'All Items' },
    { value: 'equipment', label: 'Equipment' },
    { value: 'books', label: 'Books' },
    { value: 'clothing', label: 'Clothing' },
  ];

  const filteredItems = items.filter(
    (item) =>
      (selectedCategory === 'all' || item.category === selectedCategory) &&
      (item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Military Marketplace
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Browse and purchase military equipment, books, and other items at exclusive prices for military personnel.
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search items..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <Tabs
        value={selectedCategory}
        onChange={(e, newValue) => setSelectedCategory(newValue)}
        sx={{ mb: 4 }}
      >
        {categories.map((category) => (
          <Tab
            key={category.value}
            value={category.value}
            label={category.label}
          />
        ))}
      </Tabs>

      <Grid container spacing={4}>
        {filteredItems.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={item.image}
                alt={item.title}
              />
              <CardContent>
                <Typography variant="h6" component="h2" gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {item.description}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="h6" color="primary">
                    {item.price}
                  </Typography>
                  <Chip
                    label={item.category}
                    size="small"
                    color="primary"
                    variant="outlined"
                  />
                </Box>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  View Details
                </Button>
                <Button size="small" color="primary" variant="contained">
                  Add to Cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Marketplace; 