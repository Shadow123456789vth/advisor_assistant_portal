import React from 'react';
import { Container, Typography, List, ListItem, ListItemIcon, ListItemText, ListItemButton, Divider } from '@mui/material';
import { Person, Notifications, Settings, Help, Logout, Assessment } from '@mui/icons-material';

const MoreScreen = ({ userData }) => {
  const menuItems = [
    { icon: <Person />, text: 'Profile', subtitle: userData.role },
    { icon: <Assessment />, text: 'Reports & Analytics' },
    { icon: <Notifications />, text: 'Notifications' },
    { icon: <Settings />, text: 'Settings' },
    { icon: <Help />, text: 'Help & Support' },
  ];

  return (
    <Container maxWidth="md" sx={{ pb: 10, pt: 2 }}>
      <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>More</Typography>

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
