import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Chip, Typography, Box, Button } from '@mui/material';
import { Refresh as RefreshIcon } from '@mui/icons-material';

const QuotesTab = ({ quotes, onRefresh }) => {
  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'pending': return 'warning';
      case 'approved': return 'success';
      case 'rejected': return 'error';
      default: return 'default';
    }
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h5" fontWeight="bold">Quotes</Typography>
        <Button variant="outlined" startIcon={<RefreshIcon />} onClick={onRefresh}>Refresh</Button>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Quote #</strong></TableCell>
              <TableCell><strong>Description</strong></TableCell>
              <TableCell><strong>Amount</strong></TableCell>
              <TableCell><strong>Status</strong></TableCell>
              <TableCell><strong>Valid Until</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {quotes && quotes.length > 0 ? (
              quotes.map((quote) => (
                <TableRow key={quote.sys_id} hover>
                  <TableCell>{quote.number}</TableCell>
                  <TableCell>{quote.description}</TableCell>
                  <TableCell>{quote.amount}</TableCell>
                  <TableCell><Chip label={quote.status} color={getStatusColor(quote.status)} size="small" /></TableCell>
                  <TableCell>{quote.valid_until}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow><TableCell colSpan={5} align="center"><Typography color="text.secondary">No quotes found</Typography></TableCell></TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default QuotesTab;
