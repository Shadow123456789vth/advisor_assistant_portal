import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Chip, Typography, Box, Button } from '@mui/material';
import { Refresh as RefreshIcon } from '@mui/icons-material';

const OpportunitiesTab = ({ opportunities, onRefresh }) => {
  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h5" fontWeight="bold">Opportunities</Typography>
        <Button variant="outlined" startIcon={<RefreshIcon />} onClick={onRefresh}>Refresh</Button>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Opportunity #</strong></TableCell>
              <TableCell><strong>Consumer</strong></TableCell>
              <TableCell><strong>Description</strong></TableCell>
              <TableCell><strong>Amount</strong></TableCell>
              <TableCell><strong>Industry</strong></TableCell>
              <TableCell><strong>Rating</strong></TableCell>
              <TableCell><strong>Stage</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {opportunities && opportunities.length > 0 ? (
              opportunities.map((opp) => (
                <TableRow key={opp.sys_id} hover>
                  <TableCell>{opp.number}</TableCell>
                  <TableCell>{opp.consumer}</TableCell>
                  <TableCell>{opp.short_description}</TableCell>
                  <TableCell>{opp.amount}</TableCell>
                  <TableCell>{opp.industry}</TableCell>
                  <TableCell><Chip label={opp.rating} color="primary" size="small" /></TableCell>
                  <TableCell><Chip label={opp.stage} color="success" size="small" /></TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow><TableCell colSpan={7} align="center"><Typography color="text.secondary">No opportunities found</Typography></TableCell></TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default OpportunitiesTab;
