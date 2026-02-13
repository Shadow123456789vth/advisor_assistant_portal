import React from 'react';
import { Container, Typography, Box, Card, CardContent, Avatar, IconButton, Chip } from '@mui/material';
import { Phone, Message, Event } from '@mui/icons-material';

const CustomersScreen = () => {
  const customers = [
    { id: 1, name: 'John Smith', status: 'Active', policies: 3, lastContact: '2 days ago' },
    { id: 2, name: 'Sarah Johnson', status: 'Prospect', policies: 0, lastContact: '1 week ago' },
    { id: 3, name: 'Michael Chen', status: 'Active', policies: 2, lastContact: 'Today' },
  ];

  return (
    <Container maxWidth="md" sx={{ pb: 10, pt: 2 }}>
      <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>Customers</Typography>

      {customers.map(customer => (
        <Card key={customer.id} sx={{ mb: 2 }}>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Avatar sx={{ mr: 2, bgcolor: 'primary.main' }}>
                {customer.name.charAt(0)}
              </Avatar>
              <Box sx={{ flex: 1 }}>
                <Typography variant="subtitle1" fontWeight="600">{customer.name}</Typography>
                <Typography variant="caption" color="text.secondary">
                  {customer.policies} policies • Last contact: {customer.lastContact}
                </Typography>
              </Box>
              <Chip label={customer.status} size="small" color={customer.status === 'Active' ? 'success' : 'warning'} />
            </Box>
            <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
              <IconButton size="small" color="primary"><Phone /></IconButton>
              <IconButton size="small" color="primary"><Message /></IconButton>
              <IconButton size="small" color="primary"><Event /></IconButton>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default CustomersScreen;
