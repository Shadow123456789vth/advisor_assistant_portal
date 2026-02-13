import React from 'react';
import { Container, Typography, Box, Card, CardContent, Chip } from '@mui/material';
import { Event, VideoCall, Person } from '@mui/icons-material';

const CalendarScreen = () => {
  const appointments = [
    { id: 1, time: '2:30 PM', title: 'Client Meeting - John Smith', type: 'in-person', duration: '30 min' },
    { id: 2, time: '4:00 PM', title: 'Policy Review - Sarah Johnson', type: 'video', duration: '45 min' },
  ];

  return (
    <Container maxWidth="md" sx={{ pb: 10, pt: 2 }}>
      <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>Today's Appointments</Typography>

      {appointments.map(apt => (
        <Card key={apt.id} sx={{ mb: 2 }}>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'start' }}>
              {apt.type === 'video' ? <VideoCall color="primary" sx={{ mr: 2 }} /> : <Person color="primary" sx={{ mr: 2 }} />}
              <Box sx={{ flex: 1 }}>
                <Typography variant="h6" fontWeight="600">{apt.time}</Typography>
                <Typography variant="body2">{apt.title}</Typography>
                <Chip label={apt.duration} size="small" sx={{ mt: 1 }} />
              </Box>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default CalendarScreen;
