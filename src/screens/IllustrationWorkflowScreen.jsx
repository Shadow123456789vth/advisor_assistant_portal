import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Card,
  CardContent,
  Typography,
  Paper,
  Chip,
  LinearProgress,
  Button,
  Stack,
  Divider,
  alpha,
  Fade,
  Grow,
  IconButton,
  Tooltip,
} from '@mui/material';
import {
  TrendingUp,
  CheckCircle,
  Warning,
  Lightbulb,
  Security,
  AutoAwesome,
  Cake,
  ArrowForward,
  AccountBalance,
  ShowChart,
  Assessment,
  Verified,
  CalendarToday,
  LocalPhone,
  Email,
  CardGiftcard,
  Close,
} from '@mui/icons-material';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as ChartTooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

const colors = {
  orange: '#F6921E',
  yellow: '#E8DE23',
  lightGreen: '#8BC53F',
  green: '#37A526',
  lightBlue: '#00ADEE',
  blue: '#1B75BB',
  red: '#D02E2E',
  paleAqua: '#F2F7F6',
};

const IllustrationWorkflowScreen = ({
  onClose,
  onNavigateToEngagement,
  clientData = {
    name: 'John Smith',
    age: 63,
    policyNumber: 'POL-2018-8745',
    retirementAge: 65,
    currentValue: 485000,
  },
  illustrationParams = {
    age: 65,
    monthlyWithdrawal: 2000,
  }
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isGenerating, setIsGenerating] = useState(true);

  // Simulate progressive loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsGenerating(false);
      setCurrentStep(1);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (currentStep > 0 && currentStep < 7) {
      const timer = setTimeout(() => {
        setCurrentStep(prev => prev + 1);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [currentStep]);

  // Generate illustration data
  const generateProjectionData = () => {
    const startAge = clientData.age;
    const data = [];
    let accountValue = clientData.currentValue;
    const growthRate = 0.06;
    const annualWithdrawal = illustrationParams.monthlyWithdrawal * 12;

    for (let age = startAge; age <= 95; age++) {
      const deathBenefit = accountValue * 1.5;
      const csvValue = accountValue * 0.92;

      data.push({
        age,
        accountValue: Math.round(accountValue),
        deathBenefit: Math.round(deathBenefit),
        csvValue: Math.round(csvValue),
        withdrawal: age >= illustrationParams.age ? annualWithdrawal : 0,
      });

      if (age >= illustrationParams.age) {
        accountValue = accountValue * (1 + growthRate) - annualWithdrawal;
      } else {
        accountValue = accountValue * (1 + growthRate);
      }

      if (accountValue < 0) accountValue = 0;
    }

    return data;
  };

  const projectionData = generateProjectionData();
  const sustainabilityScore = 87; // Based on projection analysis
  const incomeGapAge = 82; // Age when income gap appears

  // Loading State
  if (isGenerating) {
    return (
      <Box sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: `linear-gradient(180deg, ${colors.paleAqua} 0%, ${alpha(colors.lightBlue, 0.1)} 100%)`,
      }}>
        <Container maxWidth="md">
          <Card elevation={0} sx={{ p: 4, borderRadius: 4 }}>
            <Box sx={{ textAlign: 'center' }}>
              <AutoAwesome sx={{ fontSize: 64, color: colors.lightBlue, mb: 2 }} />
              <Typography variant="h5" gutterBottom fontWeight={700}>
                Generating Illustration and Insights...
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                Analyzing policy projections, sustainability metrics, and life-stage opportunities
              </Typography>
              <LinearProgress sx={{ borderRadius: 2, height: 8 }} />
              <Stack direction="row" spacing={2} sx={{ mt: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Chip icon={<Assessment />} label="Policy Projections" size="small" />
                <Chip icon={<TrendingUp />} label="Income Analysis" size="small" />
                <Chip icon={<Security />} label="Compliance Check" size="small" />
                <Chip icon={<Lightbulb />} label="Life-Stage Detection" size="small" />
              </Stack>
            </Box>
          </Card>
        </Container>
      </Box>
    );
  }

  return (
    <Box sx={{
      minHeight: '100vh',
      background: `linear-gradient(180deg, ${colors.paleAqua} 0%, ${alpha(colors.lightBlue, 0.1)} 100%)`,
      pb: 4,
    }}>
      {/* Header */}
      <Paper
        elevation={0}
        sx={{
          background: `linear-gradient(135deg, ${colors.blue} 0%, ${colors.lightBlue} 100%)`,
          color: 'white',
          p: 3,
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box>
              <Typography variant="h4" fontWeight={700} gutterBottom>
                Policy Illustration & Advisory Insights
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.95 }}>
                {clientData.name} • Policy {clientData.policyNumber} • Age {illustrationParams.age} Withdrawals
              </Typography>
            </Box>
            <IconButton onClick={onClose} sx={{ color: 'white' }}>
              <Close />
            </IconButton>
          </Box>
        </Container>
      </Paper>

      <Container maxWidth="lg" sx={{ mt: 4 }}>
        {/* Step 1: Illustration Panel */}
        <Fade in={currentStep >= 1} timeout={600}>
          <Card elevation={0} sx={{ mb: 3, borderRadius: 3 }}>
            <CardContent sx={{ p: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <ShowChart sx={{ fontSize: 32, color: colors.blue, mr: 2 }} />
                <Box>
                  <Typography variant="h5" fontWeight={700}>
                    Policy Projection Analysis
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ${illustrationParams.monthlyWithdrawal.toLocaleString()}/month starting age {illustrationParams.age}
                  </Typography>
                </Box>
              </Box>

              {/* Account Value & Income Chart */}
              <Paper elevation={0} sx={{ p: 3, background: colors.paleAqua, borderRadius: 2, mb: 3 }}>
                <Typography variant="h6" gutterBottom fontWeight={600}>
                  Account Value & Death Benefit Projection
                </Typography>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={projectionData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="age" label={{ value: 'Age', position: 'insideBottom', offset: -5 }} />
                    <YAxis label={{ value: 'Value ($)', angle: -90, position: 'insideLeft' }} />
                    <ChartTooltip formatter={(value) => `$${value.toLocaleString()}`} />
                    <Legend />
                    <Area
                      type="monotone"
                      dataKey="accountValue"
                      stroke={colors.blue}
                      fill={colors.lightBlue}
                      fillOpacity={0.3}
                      name="Account Value"
                    />
                    <Area
                      type="monotone"
                      dataKey="deathBenefit"
                      stroke={colors.green}
                      fill={colors.lightGreen}
                      fillOpacity={0.2}
                      name="Death Benefit"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </Paper>

              {/* Key Metrics */}
              <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap' }}>
                <Paper elevation={0} sx={{ p: 2, flex: 1, minWidth: 200, border: `2px solid ${colors.blue}` }}>
                  <Typography variant="caption" color="text.secondary">Current Value</Typography>
                  <Typography variant="h5" fontWeight={700} color={colors.blue}>
                    ${clientData.currentValue.toLocaleString()}
                  </Typography>
                </Paper>
                <Paper elevation={0} sx={{ p: 2, flex: 1, minWidth: 200, border: `2px solid ${colors.green}` }}>
                  <Typography variant="caption" color="text.secondary">Annual Income</Typography>
                  <Typography variant="h5" fontWeight={700} color={colors.green}>
                    ${(illustrationParams.monthlyWithdrawal * 12).toLocaleString()}
                  </Typography>
                </Paper>
                <Paper elevation={0} sx={{ p: 2, flex: 1, minWidth: 200, border: `2px solid ${colors.orange}` }}>
                  <Typography variant="caption" color="text.secondary">Projected at Age 85</Typography>
                  <Typography variant="h5" fontWeight={700} color={colors.orange}>
                    ${projectionData.find(d => d.age === 85)?.accountValue.toLocaleString() || 'N/A'}
                  </Typography>
                </Paper>
              </Stack>
            </CardContent>
          </Card>
        </Fade>

        {/* Step 2: Intelligent Financial Insights */}
        <Fade in={currentStep >= 2} timeout={600}>
          <Box sx={{ mb: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Lightbulb sx={{ fontSize: 28, color: colors.orange, mr: 1 }} />
              <Typography variant="h5" fontWeight={700}>
                Intelligent Financial Insights
              </Typography>
              <Chip
                label="AI-Powered Analysis"
                size="small"
                sx={{ ml: 2, bgcolor: alpha(colors.orange, 0.1), color: colors.orange, fontWeight: 600 }}
              />
            </Box>

            <Stack spacing={2}>
              {/* Income Sustainability Insight */}
              <Grow in={currentStep >= 2} timeout={600}>
                <Card elevation={0} sx={{ border: `2px solid ${colors.green}`, borderRadius: 3 }}>
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: 2 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <AccountBalance sx={{ fontSize: 32, color: colors.green, mr: 2 }} />
                        <Box>
                          <Typography variant="h6" fontWeight={700}>
                            Income Sustainability Analysis
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Based on current projections and withdrawal strategy
                          </Typography>
                        </Box>
                      </Box>
                      <Chip
                        label={`${sustainabilityScore}% Score`}
                        sx={{
                          bgcolor: alpha(colors.green, 0.15),
                          color: colors.green,
                          fontWeight: 700,
                          fontSize: '1rem',
                        }}
                      />
                    </Box>

                    <Paper elevation={0} sx={{ p: 2, background: alpha(colors.yellow, 0.1), borderRadius: 2 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <Warning sx={{ color: colors.orange, mr: 1 }} />
                        <Typography variant="subtitle2" fontWeight={600}>
                          Potential Income Gap Identified
                        </Typography>
                      </Box>
                      <Typography variant="body2" color="text.secondary">
                        Current withdrawal strategy sustainable until approximately age {incomeGapAge}.
                        Account value decreases significantly after age 80, creating potential income risk.
                      </Typography>
                    </Paper>

                    <Box sx={{ mt: 2 }}>
                      <Typography variant="caption" color="text.secondary" sx={{ mb: 1, display: 'block' }}>
                        Sustainability Timeline
                      </Typography>
                      <LinearProgress
                        variant="determinate"
                        value={sustainabilityScore}
                        sx={{
                          height: 12,
                          borderRadius: 2,
                          bgcolor: alpha(colors.red, 0.1),
                          '& .MuiLinearProgress-bar': {
                            background: `linear-gradient(90deg, ${colors.green} 0%, ${colors.yellow} 80%, ${colors.orange} 100%)`,
                            borderRadius: 2,
                          }
                        }}
                      />
                    </Box>
                  </CardContent>
                </Card>
              </Grow>

              {/* Distribution Strategy Modeling */}
              <Grow in={currentStep >= 3} timeout={600}>
                <Card elevation={0} sx={{ border: `2px solid ${colors.lightBlue}`, borderRadius: 3 }}>
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <TrendingUp sx={{ fontSize: 32, color: colors.lightBlue, mr: 2 }} />
                      <Box>
                        <Typography variant="h6" fontWeight={700}>
                          Distribution Strategy Optimization
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Alternative withdrawal approaches to extend sustainability
                        </Typography>
                      </Box>
                    </Box>

                    <Stack spacing={2}>
                      <Paper elevation={0} sx={{ p: 2, border: `1px solid ${colors.lightBlue}`, borderRadius: 2 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                          <Typography variant="subtitle2" fontWeight={600}>
                            Reduced Early Withdrawals
                          </Typography>
                          <Chip label="+8 years" size="small" sx={{ bgcolor: alpha(colors.green, 0.1), color: colors.green }} />
                        </Box>
                        <Typography variant="body2" color="text.secondary">
                          Start with $1,600/month ages 65-70, increase to $2,200 at age 71+
                        </Typography>
                      </Paper>

                      <Paper elevation={0} sx={{ p: 2, border: `1px solid ${colors.lightBlue}`, borderRadius: 2 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                          <Typography variant="subtitle2" fontWeight={600}>
                            Stepped Distribution Strategy
                          </Typography>
                          <Chip label="+5 years" size="small" sx={{ bgcolor: alpha(colors.green, 0.1), color: colors.green }} />
                        </Box>
                        <Typography variant="body2" color="text.secondary">
                          Adjust withdrawals based on market performance and account value milestones
                        </Typography>
                      </Paper>
                    </Stack>
                  </CardContent>
                </Card>
              </Grow>

              {/* Suitability & Compliance */}
              <Grow in={currentStep >= 4} timeout={600}>
                <Card
                  elevation={0}
                  sx={{
                    border: `2px solid ${colors.green}`,
                    background: `linear-gradient(135deg, ${alpha(colors.green, 0.05)} 0%, ${alpha(colors.lightGreen, 0.02)} 100%)`,
                    borderRadius: 3,
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Security sx={{ fontSize: 32, color: colors.green, mr: 2 }} />
                        <Box>
                          <Typography variant="h6" fontWeight={700}>
                            Suitability & Compliance Verification
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Automated regulatory alignment check
                          </Typography>
                        </Box>
                      </Box>
                      <Chip
                        icon={<Verified />}
                        label="Approved"
                        sx={{
                          bgcolor: colors.green,
                          color: 'white',
                          fontWeight: 700
                        }}
                      />
                    </Box>

                    <Stack spacing={1.5}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <CheckCircle sx={{ color: colors.green, mr: 1.5, fontSize: 20 }} />
                        <Typography variant="body2">
                          Client age and risk profile suitable for proposed distribution
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <CheckCircle sx={{ color: colors.green, mr: 1.5, fontSize: 20 }} />
                        <Typography variant="body2">
                          Withdrawal rate within industry best practices (4-5% range)
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <CheckCircle sx={{ color: colors.green, mr: 1.5, fontSize: 20 }} />
                        <Typography variant="body2">
                          Illustration assumptions comply with state regulations
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <CheckCircle sx={{ color: colors.green, mr: 1.5, fontSize: 20 }} />
                        <Typography variant="body2">
                          Proper disclosure documentation generated
                        </Typography>
                      </Box>
                    </Stack>

                    <Divider sx={{ my: 2 }} />

                    <Paper elevation={0} sx={{ p: 2, bgcolor: 'white', borderRadius: 2 }}>
                      <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
                        REGULATOR-READY SUMMARY
                      </Typography>
                      <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
                        "This illustration demonstrates a sustainable income distribution strategy for {clientData.name},
                        age {clientData.age}, with projected monthly withdrawals of ${illustrationParams.monthlyWithdrawal.toLocaleString()}
                        beginning at age {illustrationParams.age}. The strategy aligns with the client's stated retirement
                        income objectives and risk tolerance as documented in the client profile. Projected sustainability
                        extends to approximately age {incomeGapAge}, with recommendations provided for optimization strategies."
                      </Typography>
                    </Paper>
                  </CardContent>
                </Card>
              </Grow>
            </Stack>
          </Box>
        </Fade>

        {/* Step 3: Proactive Growth Insight Banner */}
        <Fade in={currentStep >= 5} timeout={600}>
          <Paper
            elevation={0}
            sx={{
              mb: 3,
              p: 3,
              background: `linear-gradient(135deg, ${alpha(colors.orange, 0.15)} 0%, ${alpha(colors.yellow, 0.1)} 100%)`,
              border: `2px solid ${colors.orange}`,
              borderRadius: 3,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <AutoAwesome sx={{ fontSize: 40, color: colors.orange, mr: 2 }} />
              <Box sx={{ flex: 1 }}>
                <Typography variant="h6" fontWeight={700} color={colors.orange} gutterBottom>
                  Advisory Insight Generated
                </Typography>
                <Typography variant="body1">
                  This illustration highlights a potential income gap and opportunities to optimize distribution strategy.
                  Consider discussing alternative withdrawal approaches and additional life-stage planning opportunities detected below.
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Fade>

        {/* Step 4: Life-Stage Intelligence Detection */}
        <Fade in={currentStep >= 6} timeout={600}>
          <Card
            elevation={0}
            sx={{
              mb: 3,
              border: `3px solid ${colors.blue}`,
              borderRadius: 4,
              background: `linear-gradient(135deg, ${alpha(colors.blue, 0.05)} 0%, ${alpha(colors.lightBlue, 0.02)} 100%)`,
            }}
          >
            <CardContent sx={{ p: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Cake sx={{ fontSize: 40, color: colors.blue, mr: 2 }} />
                <Box>
                  <Typography variant="h5" fontWeight={700} color={colors.blue}>
                    Life-Stage Opportunity Detected
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Milestone approaching • Coverage adequacy review recommended
                  </Typography>
                </Box>
                <Chip
                  icon={<AutoAwesome />}
                  label="Engagement Opportunity"
                  sx={{
                    ml: 'auto',
                    bgcolor: colors.blue,
                    color: 'white',
                    fontWeight: 700,
                    fontSize: '0.875rem',
                  }}
                />
              </Box>

              <Stack spacing={2}>
                <Paper elevation={0} sx={{ p: 3, border: `2px solid ${colors.lightBlue}`, borderRadius: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <CalendarToday sx={{ color: colors.lightBlue, mr: 2 }} />
                    <Box>
                      <Typography variant="h6" fontWeight={700}>
                        Upcoming Milestone: 65th Birthday
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {clientData.name} turns 65 in 8 weeks
                      </Typography>
                    </Box>
                  </Box>
                  <Typography variant="body2">
                    Significant retirement milestone provides natural opportunity for coverage review and relationship strengthening.
                  </Typography>
                </Paper>

                <Paper elevation={0} sx={{ p: 3, border: `2px solid ${colors.green}`, borderRadius: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Assessment sx={{ color: colors.green, mr: 2 }} />
                    <Typography variant="h6" fontWeight={700}>
                      Coverage Adequacy Indicators
                    </Typography>
                  </Box>
                  <Stack spacing={1}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <CheckCircle sx={{ color: colors.green, mr: 1, fontSize: 20 }} />
                      <Typography variant="body2">Death benefit aligned with retirement income objectives</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <CheckCircle sx={{ color: colors.green, mr: 1, fontSize: 20 }} />
                      <Typography variant="body2">Cash value provides flexibility for life-stage transitions</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Warning sx={{ color: colors.orange, mr: 1, fontSize: 20 }} />
                      <Typography variant="body2">
                        Consider supplemental coverage discussion given income gap projection
                      </Typography>
                    </Box>
                  </Stack>
                </Paper>
              </Stack>
            </CardContent>
          </Card>
        </Fade>

        {/* Step 5 & 6: Personalized Engagement Generation */}
        <Fade in={currentStep >= 7} timeout={600}>
          <Card
            elevation={0}
            sx={{
              mb: 3,
              borderRadius: 4,
              overflow: 'hidden',
              border: `3px solid ${colors.lightBlue}`,
            }}
          >
            {/* Header */}
            <Box
              sx={{
                background: `linear-gradient(135deg, ${colors.lightBlue} 0%, ${colors.blue} 100%)`,
                color: 'white',
                p: 3,
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box>
                  <Typography variant="h5" fontWeight={700} gutterBottom>
                    🎉 Birthday Engagement Opportunity
                  </Typography>
                  <Typography variant="body1" sx={{ opacity: 0.95 }}>
                    {clientData.name} turns {illustrationParams.age} • Milestone Coverage Review
                  </Typography>
                </Box>
                <Chip
                  label="Ready to Send"
                  icon={<Verified />}
                  sx={{
                    bgcolor: alpha('white', 0.2),
                    color: 'white',
                    fontWeight: 700,
                    fontSize: '0.875rem',
                  }}
                />
              </Box>
            </Box>

            <CardContent sx={{ p: 4 }}>
              {/* Engagement Recommendation */}
              <Paper elevation={0} sx={{ p: 3, mb: 3, background: colors.paleAqua, borderRadius: 2 }}>
                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                  RECOMMENDED ENGAGEMENT STRATEGY
                </Typography>
                <Stack spacing={1.5}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Email sx={{ color: colors.blue, mr: 2 }} />
                    <Box>
                      <Typography variant="body2" fontWeight={600}>Preferred Channel: Email + Phone Follow-up</Typography>
                      <Typography variant="caption" color="text.secondary">
                        Client prefers email first contact, phone for milestone discussions
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <AccountBalance sx={{ color: colors.green, mr: 2 }} />
                    <Box>
                      <Typography variant="body2" fontWeight={600}>Tone: Advisor-Led, Personal & Professional</Typography>
                      <Typography variant="caption" color="text.secondary">
                        Client responds well to personalized, relationship-focused outreach
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <CalendarToday sx={{ color: colors.orange, mr: 2 }} />
                    <Box>
                      <Typography variant="body2" fontWeight={600}>Optimal Timing: 2 weeks before birthday</Typography>
                      <Typography variant="caption" color="text.secondary">
                        Engagement data shows best response rate in this window
                      </Typography>
                    </Box>
                  </Box>
                </Stack>
              </Paper>

              {/* Message Preview */}
              <Paper elevation={0} sx={{ p: 3, border: `2px solid ${colors.green}`, borderRadius: 2, mb: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'between', mb: 2 }}>
                  <Typography variant="subtitle2" fontWeight={700} color={colors.green}>
                    PERSONALIZED MESSAGE PREVIEW
                  </Typography>
                  <Chip label="Compliance Approved" size="small" sx={{ ml: 2, bgcolor: alpha(colors.green, 0.1), color: colors.green }} />
                </Box>
                <Divider sx={{ my: 2 }} />
                <Typography variant="body1" sx={{ fontStyle: 'italic', lineHeight: 1.8 }}>
                  Dear {clientData.name},
                  <br /><br />
                  As you approach this important milestone of turning {illustrationParams.age}, I wanted to take a moment
                  to reach out and ensure your coverage and income strategy continue to support your goals.
                  <br /><br />
                  I've been reviewing your policy and wanted to discuss some opportunities to optimize your retirement
                  income distribution and ensure you're positioned for long-term financial security.
                  <br /><br />
                  Would you have time for a brief conversation in the coming weeks? I'd love to walk through
                  some personalized strategies tailored to this next chapter.
                  <br /><br />
                  Wishing you an excellent year ahead.
                  <br /><br />
                  Best regards,<br />
                  [Your Name]
                </Typography>
              </Paper>

              {/* Action Buttons */}
              <Stack spacing={2}>
                <Button
                  variant="contained"
                  size="large"
                  fullWidth
                  onClick={() => onNavigateToEngagement(clientData.name)}
                  endIcon={<ArrowForward />}
                  sx={{
                    background: `linear-gradient(135deg, ${colors.lightBlue} 0%, ${colors.blue} 100%)`,
                    py: 2,
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    boxShadow: `0 4px 16px ${alpha(colors.lightBlue, 0.4)}`,
                    '&:hover': {
                      boxShadow: `0 6px 20px ${alpha(colors.lightBlue, 0.5)}`,
                    },
                  }}
                >
                  Launch Personalized Birthday Engagement
                </Button>

                <Stack direction="row" spacing={2}>
                  <Button
                    variant="outlined"
                    fullWidth
                    startIcon={<Email />}
                    sx={{ borderColor: colors.blue, color: colors.blue }}
                  >
                    Send Email Now
                  </Button>
                  <Button
                    variant="outlined"
                    fullWidth
                    startIcon={<LocalPhone />}
                    sx={{ borderColor: colors.green, color: colors.green }}
                  >
                    Schedule Call
                  </Button>
                  <Button
                    variant="outlined"
                    fullWidth
                    startIcon={<CardGiftcard />}
                    sx={{ borderColor: colors.orange, color: colors.orange }}
                  >
                    Send Card
                  </Button>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Fade>
      </Container>
    </Box>
  );
};

export default IllustrationWorkflowScreen;
