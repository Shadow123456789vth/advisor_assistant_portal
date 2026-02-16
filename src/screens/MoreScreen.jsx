import React from 'react';
import { Container, Typography, List, ListItem, ListItemIcon, ListItemText, ListItemButton, Divider, Card, CardContent, Box, Chip } from '@mui/material';
import { Person, Notifications, Settings, Help, Logout, Assessment, PlayCircleOutline, Stars } from '@mui/icons-material';

const MoreScreen = ({ userData, onNavigateToDemo }) => {
  const menuItems = [
    { icon: <Person />, text: 'Profile', subtitle: userData.role },
    { icon: <Assessment />, text: 'Reports & Analytics' },
    { icon: <Notifications />, text: 'Notifications' },
    { icon: <Settings />, text: 'Settings' },
    { icon: <Help />, text: 'Help & Support' },
  ];

  return (
    <Container maxWidth="md" sx={{ pb: 10, pt: 2 }}>
      <Typography variant="h5" fontWeight="bold" sx={{ mb: 3 }}>More</Typography>

      {/* Smart Engagement Feature */}
      <Card
        sx={{
          mb: 3,
          background: 'linear-gradient(135deg, #1976d2 0%, #00897b 100%)',
          color: 'white',
          cursor: 'pointer',
          transition: 'transform 0.2s',
          '&:hover': {
            transform: 'translateY(-4px)',
          }
        }}
        onClick={onNavigateToDemo}
      >
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Stars sx={{ fontSize: 32, mr: 1.5 }} />
            <Box sx={{ flex: 1 }}>
              <Typography variant="h6" fontWeight="bold">
                Smart Engagement
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                AI-powered customer outreach assistant
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>

      <List>
        {menuItems.map((item, index) => (
          <React.Fragment key={index}>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText
                primary={item.text}
                secondary={item.subtitle}
              />
            </ListItemButton>
            {index < menuItems.length - 1 && <Divider />}
          </React.Fragment>
        ))}
        <Divider sx={{ my: 2 }} />
        <ListItemButton sx={{ color: 'error.main' }}>
          <ListItemIcon><Logout color="error" /></ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItemButton>
      </List>
    </Container>
  );
};

export default MoreScreen;
