import React from 'react';
import { List, ListItem, ListItemText, Paper, Typography, Box } from '@mui/material';

const RecentTab = ({ recentItems }) => {
  return (
    <Box>
      <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>Recent Activity</Typography>
      <Paper>
        {recentItems && recentItems.length > 0 ? (
          <List>
            {recentItems.map((item, index) => (
              <ListItem key={index} divider={index < recentItems.length - 1}>
                <ListItemText
                  primary={item.name || 'Recent Item'}
                  secondary={item.sys_updated_on || 'No date available'}
                />
              </ListItem>
            ))}
          </List>
        ) : (
          <Box sx={{ p: 4, textAlign: 'center' }}>
            <Typography color="text.secondary">No recent activity found</Typography>
          </Box>
        )}
      </Paper>
    </Box>
  );
};

export default RecentTab;
