import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Card,
  CardContent,
  Typography,
  Paper,
  Chip,
  Button,
  Stack,
  Fade,
  IconButton,
  alpha,
} from '@mui/material';
import {
  TrendingUp,
  CheckCircle,
  Warning,
  Lightbulb,
  Cake,
  ArrowForward,
  Close,
  ShowChart,
  Security,
} from '@mui/icons-material';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as ChartTooltip,
  ResponsiveContainer,
} from 'recharts';

const colors = {
  orange: '#F6921E',
  lightGreen: '#8BC53F',
  lightBlue: '#00ADEE',
  blue: '#1B75BB',
  paleAqua: '#F2F7F6',
};

const IllustrationWorkflowScreen = ({
  onClose,
  onNavigateToEngagement,
  clientData = {
    name: 'John Smith',
    age: 63,
    currentValue: 485000,
  },
  illustrationParams = {
    customerName: 'John Smith',
    age: 65,
    monthlyWithdrawal: 2000,
  }
}) => {
  // Use dynamic customer name from params, fallback to clientData
  const customerName = illustrationParams.customerName || clientData.name;
  const [currentStep, setCurrentStep] = useState(0);

  // Progressive step reveal
  useEffect(() => {
    if (currentStep === 0) {
      const timer = setTimeout(() => setCurrentStep(1), 1000);
      return () => clearTimeout(timer);
    }
    if (currentStep > 0 && currentStep < 4) {
      const timer = setTimeout(() => setCurrentStep(prev => prev + 1), 2000);
      return () => clearTimeout(timer);
    }
  }, [currentStep]);

  // Generate chart data
  const generateChartData = () => {
    const data = [];
    let value = clientData.currentValue;
    const annualWithdrawal = illustrationParams.monthlyWithdrawal * 12;

    for (let age = clientData.age; age <= 95; age++) {
      data.push({
        age,
        value: Math.round(value),
        withdrawal: age >= illustrationParams.age ? annualWithdrawal : 0,
      });

      if (age >= illustrationParams.age) {
        value = value * 1.06 - annualWithdrawal;
      } else {
        value = value * 1.06;
      }
      if (value < 0) value = 0;
    }
    return data;
  };

  const chartData = generateChartData();
  const projectedAt85 = chartData.find(d => d.age === 85)?.value || 0;

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: colors.paleAqua, pb: 4 }}>
      {/* Simple Header */}
      <Paper
        elevation={0}
        sx={{
          background: `linear-gradient(135deg, ${colors.blue} 0%, ${colors.lightBlue} 100%)`,
          color: '#fff',
          p: 2,
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box>
              <Typography variant="h6" fontWeight={700}>
                Income Planning Illustration
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                {customerName} • Age {illustrationParams.age} Withdrawals
              </Typography>
            </Box>
            <IconButton onClick={onClose} sx={{ color: '#fff' }}>
              <Close />
            </IconButton>
          </Box>
        </Container>
      </Paper>

      <Container maxWidth="lg" sx={{ mt: 3 }}>
        {/* Step 1: Illustration Chart */}
        <Fade in={currentStep >= 1} timeout={800}>
          <Card elevation={0} sx={{ mb: 3, borderRadius: 3 }}>
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <ShowChart sx={{ fontSize: 28, color: colors.blue, mr: 1.5 }} />
                <Typography variant="h6" fontWeight={700}>
                  Policy Projection
                </Typography>
              </Box>

              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Projected account value with ${illustrationParams.monthlyWithdrawal.toLocaleString()}/month withdrawals starting at age {illustrationParams.age}
              </Typography>

              {/* Chart */}
              <Box sx={{ bgcolor: '#fff', borderRadius: 2, p: 2 }}>
                <ResponsiveContainer width="100%" height={280}>
                  <AreaChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                    <XAxis
                      dataKey="age"
                      stroke="#666"
                      style={{ fontSize: '12px' }}
                    />
                    <YAxis
                      stroke="#666"
                      style={{ fontSize: '12px' }}
                      tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                    />
                    <ChartTooltip
                      formatter={(value) => [`$${value.toLocaleString()}`, 'Account Value']}
                      contentStyle={{ borderRadius: '8px', border: `1px solid ${colors.lightBlue}` }}
                    />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke={colors.blue}
                      fill={colors.lightBlue}
                      fillOpacity={0.2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </Box>

              {/* Key Metrics */}
              <Stack direction="row" spacing={2} sx={{ mt: 3, flexWrap: 'wrap' }}>
                <Box sx={{ flex: 1, minWidth: 150 }}>
                  <Typography variant="caption" color="text.secondary">Current Value</Typography>
                  <Typography variant="h6" fontWeight={700} color={colors.blue}>
                    ${clientData.currentValue.toLocaleString()}
                  </Typography>
                </Box>
                <Box sx={{ flex: 1, minWidth: 150 }}>
                  <Typography variant="caption" color="text.secondary">Monthly Income</Typography>
                  <Typography variant="h6" fontWeight={700} color={colors.lightGreen}>
                    ${illustrationParams.monthlyWithdrawal.toLocaleString()}
                  </Typography>
                </Box>
                <Box sx={{ flex: 1, minWidth: 150 }}>
                  <Typography variant="caption" color="text.secondary">Projected at 85</Typography>
                  <Typography variant="h6" fontWeight={700} color={colors.orange}>
                    ${projectedAt85.toLocaleString()}
                  </Typography>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </Fade>

        {/* Step 2: Intelligent Insights */}
        <Fade in={currentStep >= 2} timeout={800}>
          <Card elevation={0} sx={{ mb: 3, borderRadius: 3 }}>
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Lightbulb sx={{ fontSize: 28, color: colors.orange, mr: 1.5 }} />
                <Typography variant="h6" fontWeight={700}>
                  Intelligent Analysis
                </Typography>
              </Box>

              <Stack spacing={2}>
                {/* Income Sustainability */}
                <Paper elevation={0} sx={{ p: 2, bgcolor: alpha(colors.lightGreen, 0.1), borderLeft: `4px solid ${colors.lightGreen}` }}>
                  <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
                    <CheckCircle sx={{ color: colors.lightGreen, fontSize: 20 }} />
                    <Typography variant="subtitle2" fontWeight={700}>
                      Income Sustainable
                    </Typography>
                  </Stack>
                  <Typography variant="body2" color="text.secondary">
                    Current policy supports ${(illustrationParams.monthlyWithdrawal * 12).toLocaleString()}/year in withdrawals through age 85+ with healthy account balance.
                  </Typography>
                </Paper>

                {/* Alternative Strategy */}
                <Paper elevation={0} sx={{ p: 2, bgcolor: alpha(colors.lightBlue, 0.1), borderLeft: `4px solid ${colors.lightBlue}` }}>
                  <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
                    <TrendingUp sx={{ color: colors.lightBlue, fontSize: 20 }} />
                    <Typography variant="subtitle2" fontWeight={700}>
                      Distribution Strategy
                    </Typography>
                  </Stack>
                  <Typography variant="body2" color="text.secondary">
                    Alternative: Delay withdrawals to age 67 could increase monthly income by 15% while maintaining sustainability.
                  </Typography>
                </Paper>
              </Stack>
            </CardContent>
          </Card>
        </Fade>

        {/* Step 3: Compliance Check */}
        <Fade in={currentStep >= 3} timeout={800}>
          <Card elevation={0} sx={{ mb: 3, borderRadius: 3 }}>
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Security sx={{ fontSize: 28, color: colors.lightGreen, mr: 1.5 }} />
                  <Typography variant="h6" fontWeight={700}>
                    Suitability Check
                  </Typography>
                </Box>
                <Chip
                  icon={<CheckCircle />}
                  label="Approved"
                  size="small"
                  sx={{ bgcolor: colors.lightGreen, color: '#fff', fontWeight: 600 }}
                />
              </Box>

              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Withdrawal strategy aligns with client's stated retirement objectives and risk tolerance. Regulator-ready documentation prepared.
              </Typography>

              <Paper elevation={0} sx={{ p: 2, bgcolor: '#fff', border: '1px solid #e0e0e0', borderRadius: 2 }}>
                <Typography variant="caption" color="text.secondary" fontWeight={600} sx={{ display: 'block', mb: 0.5 }}>
                  COMPLIANCE SUMMARY
                </Typography>
                <Typography variant="body2">
                  ✓ Income needs verified • ✓ Risk profile matched • ✓ Alternative strategies documented
                </Typography>
              </Paper>
            </CardContent>
          </Card>
        </Fade>

        {/* Step 4: Life-Stage Milestone - Birthday Approaching */}
        <Fade in={currentStep >= 4} timeout={800}>
          <Card
            elevation={0}
            sx={{
              mb: 3,
              borderRadius: 3,
              border: `2px solid ${colors.orange}`,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: `0 8px 24px ${alpha(colors.orange, 0.2)}`,
              }
            }}
            onClick={() => {
              if (onNavigateToEngagement) {
                onNavigateToEngagement(customerName);
              }
            }}
          >
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                <Box sx={{ flex: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Cake sx={{ fontSize: 28, color: colors.orange, mr: 1.5 }} />
                    <Box>
                      <Typography variant="h6" fontWeight={700}>
                        Upcoming Milestone Detected
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {customerName} turns {illustrationParams.age} in 2 weeks
                      </Typography>
                    </Box>
                  </Box>

                  <Paper elevation={0} sx={{ p: 2, bgcolor: alpha(colors.orange, 0.1), borderRadius: 2, mb: 2 }}>
                    <Typography variant="body2" color="text.secondary">
                      <strong>Recommended Action:</strong> Send personalized birthday outreach with coverage adequacy review. This milestone is an ideal opportunity for proactive engagement and retention.
                    </Typography>
                  </Paper>

                  <Button
                    variant="contained"
                    endIcon={<ArrowForward />}
                    sx={{
                      bgcolor: colors.orange,
                      color: '#fff',
                      fontWeight: 700,
                      '&:hover': { bgcolor: alpha(colors.orange, 0.9) }
                    }}
                  >
                    Create Personalized Outreach
                  </Button>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Fade>
      </Container>
    </Box>
  );
};

export default IllustrationWorkflowScreen;
