import React from 'react';
import { Container, Typography, Box, Card, CardContent, Chip, IconButton } from '@mui/material';
import { Add, CheckCircle, Schedule, Flag } from '@mui/icons-material';

const TasksScreen = () => {
  const tasks = [
    { id: 1, title: 'Follow up with John Smith', priority: 'high', status: 'pending', dueDate: 'Today' },
    { id: 2, title: 'Prepare quote for Sarah Johnson', priority: 'medium', status: 'in_progress', dueDate: 'Tomorrow' },
    { id: 3, title: 'Review policy documents', priority: 'low', status: 'pending', dueDate: 'This week' },
  ];

  return (
    <Container maxWidth="md" sx={{ pb: 10, pt: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h5" fontWeight="bold">My Tasks</Typography>
        <IconButton color="primary" sx={{ bgcolor: 'primary.main', color: 'white', '&:hover': { bgcolor: 'primary.dark' } }}>
          <Add />
        </IconButton>
      </Box>

      {tasks.map(task => (
        <Card key={task.id} sx={{ mb: 2 }}>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'start' }}>
              <IconButton size="small" sx={{ mt: -0.5 }}>
                <CheckCircle />
              </IconButton>
              <Box sx={{ flex: 1, ml: 1 }}>
                <Typography variant="subtitle1" fontWeight="600">{task.title}</Typography>
                <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
                  <Chip
                    label={task.priority}
                    size="small"
                    color={task.priority === 'high' ? 'error' : task.priority === 'medium' ? 'warning' : 'default'}
                  />
                  <Chip label={task.dueDate} size="small" icon={<Schedule />} />
                </Box>
              </Box>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default TasksScreen;
