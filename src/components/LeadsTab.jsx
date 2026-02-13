import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Typography,
  Box,
  Button
} from '@mui/material';
import { Refresh as RefreshIcon } from '@mui/icons-material';

const LeadsTab = ({ leads, onRefresh }) => {
  const getRatingColor = (rating) => {
    switch (rating?.toLowerCase()) {
      case 'hot': return 'error';
      case 'warm': return 'warning';
      case 'cold': return 'info';
      default: return 'default';
    }
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h5" fontWeight="bold">
          Leads
        </Typography>
        <Button variant="outlined" startIcon={<RefreshIcon />} onClick={onRefresh}>
          Refresh
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Lead #</strong></TableCell>
              <TableCell><strong>Name</strong></TableCell>
              <TableCell><strong>Company</strong></TableCell>
              <TableCell><strong>Email</strong></TableCell>
              <TableCell><strong>Phone</strong></TableCell>
              <TableCell><strong>Type</strong></TableCell>
              <TableCell><strong>Rating</strong></TableCell>
              <TableCell><strong>Stage</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {leads && leads.length > 0 ? (
              leads.map((lead) => (
                <TableRow key={lead.sys_id} hover>
                  <TableCell>{lead.number}</TableCell>
                  <TableCell>{lead.first_name + ' ' + lead.last_name}</TableCell>
                  <TableCell>{lead.company}</TableCell>
                  <TableCell>{lead.email}</TableCell>
                  <TableCell>{lead.business_phone}</TableCell>
                  <TableCell>{lead.lead_type}</TableCell>
                  <TableCell>
                    <Chip label={lead.lead_rating} color={getRatingColor(lead.lead_rating)} size="small" />
                  </TableCell>
                  <TableCell>{lead.stage}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={8} align="center">
                  <Typography color="text.secondary">No leads found</Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default LeadsTab;
