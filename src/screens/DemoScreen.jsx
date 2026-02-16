import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Avatar,
  Chip,
  LinearProgress,
  Divider,
  Paper,
  alpha,
  useTheme,
  Fade,
  Slide,
  Stack,
} from '@mui/material';
import {
  Cake,
  Email,
  Phone,
  CheckCircle,
  Verified,
  TrendingUp,
  Psychology,
  Schedule,
  SendOutlined,
  TaskAlt,
  AttachMoney,
  AccessTime,
  Language,
  Security,
  Lightbulb,
  AutoAwesome,
  MailOutline,
  LocalPhone,
  CardGiftcard,
  ArrowForward,
  Stars,
} from '@mui/icons-material';

const DemoScreen = () => {
  const theme = useTheme();
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleRestart = () => {
    setCurrentStep(0);
  };

  // Step 1: Customer Insight Trigger
  const Step1 = () => (
    <Fade in timeout={600}>
      <Card
        sx={{
          maxWidth: 700,
          mx: 'auto',
          background: 'linear-gradient(135deg, #1976d2 0%, #00897b 100%)',
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: -50,
            right: -50,
            width: 200,
            height: 200,
            borderRadius: '50%',
            background: alpha('#FFFFFF', 0.1),
          }}
        />
        <CardContent sx={{ p: 4, position: 'relative', zIndex: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Cake sx={{ mr: 1, fontSize: 28 }} />
            <Typography variant="overline" sx={{ fontWeight: 600, letterSpacing: 1 }}>
              Customer Milestone Alert
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mt: 3 }}>
            <Avatar
              sx={{
                width: 80,
                height: 80,
                fontSize: '2rem',
                fontFamily: 'Roboto Slab, serif',
                fontWeight: 700,
                bgcolor: alpha('#FFFFFF', 0.25),
                border: '3px solid rgba(255,255,255,0.5)',
              }}
            >
              SJ
            </Avatar>
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: 'Roboto Slab, serif',
                  fontWeight: 700,
                  mb: 0.5,
                }}
              >
                Upcoming Birthday
              </Typography>
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 500 }}>
                Sarah Johnson turns 65 tomorrow
              </Typography>

              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Chip
                  icon={<AttachMoney />}
                  label="$185K Policy Value"
                  sx={{
                    bgcolor: alpha('#FFFFFF', 0.25),
                    color: 'white',
                    fontWeight: 600,
                    '& .MuiChip-icon': { color: 'white' },
                  }}
                />
                <Chip
                  icon={<Schedule />}
                  label="8 Years Customer"
                  sx={{
                    bgcolor: alpha('#FFFFFF', 0.25),
                    color: 'white',
                    fontWeight: 600,
                    '& .MuiChip-icon': { color: 'white' },
                  }}
                />
                <Chip
                  icon={<Stars />}
                  label="High Engagement"
                  sx={{
                    bgcolor: alpha('#FFFFFF', 0.25),
                    color: 'white',
                    fontWeight: 600,
                    '& .MuiChip-icon': { color: 'white' },
                  }}
                />
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Fade>
  );

  // Step 2: Communication Preferences
  const Step2 = () => (
    <Fade in timeout={600}>
      <Card sx={{ maxWidth: 700, mx: 'auto' }}>
        <CardContent sx={{ p: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <Box
              sx={{
                width: 48,
                height: 48,
                borderRadius: 2,
                bgcolor: alpha(theme.palette.primary.main, 0.1),
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mr: 2,
              }}
            >
              <Email sx={{ color: theme.palette.primary.main, fontSize: 28 }} />
            </Box>
            <Box>
              <Typography
                variant="h5"
                sx={{ fontFamily: 'Roboto Slab, serif', fontWeight: 600 }}
              >
                Communication Preferences
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Retrieved from customer profile
              </Typography>
            </Box>
          </Box>

          <Stack spacing={3}>
            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                <CheckCircle sx={{ color: '#66BB6A', mr: 1, fontSize: 20 }} />
                <Typography variant="subtitle1" fontWeight={600}>
                  Preferred Channels
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 2, ml: 4 }}>
                <Chip
                  icon={<Email />}
                  label="Email"
                  color="success"
                  variant="outlined"
                  sx={{ fontWeight: 500 }}
                />
                <Chip
                  icon={<Phone />}
                  label="Phone"
                  color="success"
                  variant="outlined"
                  sx={{ fontWeight: 500 }}
                />
              </Box>
            </Box>

            <Divider />

            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                <Box
                  sx={{
                    width: 20,
                    height: 20,
                    borderRadius: '50%',
                    bgcolor: '#EF5350',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mr: 1,
                  }}
                >
                  <Box sx={{ width: 8, height: 2, bgcolor: 'white' }} />
                </Box>
                <Typography variant="subtitle1" fontWeight={600}>
                  Avoid
                </Typography>
              </Box>
              <Box sx={{ ml: 4 }}>
                <Chip
                  label="SMS Marketing"
                  size="small"
                  sx={{
                    bgcolor: alpha('#EF5350', 0.1),
                    color: '#EF5350',
                    fontWeight: 500,
                  }}
                />
              </Box>
            </Box>

            <Divider />

            <Box sx={{ display: 'flex', gap: 4 }}>
              <Box sx={{ flex: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <AccessTime sx={{ color: 'text.secondary', mr: 1, fontSize: 20 }} />
                  <Typography variant="body2" color="text.secondary" fontWeight={600}>
                    Best Contact Time
                  </Typography>
                </Box>
                <Typography variant="body1" fontWeight={500} sx={{ ml: 4 }}>
                  Morning (8-11 AM)
                </Typography>
              </Box>

              <Box sx={{ flex: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Language sx={{ color: 'text.secondary', mr: 1, fontSize: 20 }} />
                  <Typography variant="body2" color="text.secondary" fontWeight={600}>
                    Language
                  </Typography>
                </Box>
                <Typography variant="body1" fontWeight={500} sx={{ ml: 4 }}>
                  English
                </Typography>
              </Box>
            </Box>

            <Divider />

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                p: 2,
                borderRadius: 2,
                bgcolor: alpha('#66BB6A', 0.08),
                border: `1px solid ${alpha('#66BB6A', 0.3)}`,
              }}
            >
              <Security sx={{ color: '#66BB6A', mr: 2 }} />
              <Box>
                <Typography variant="body2" fontWeight={600} color="#66BB6A">
                  Compliance Verified
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  All consents active • TCPA compliant • Privacy preferences honored
                </Typography>
              </Box>
            </Box>
          </Stack>
        </CardContent>
      </Card>
    </Fade>
  );

  // Step 3: Age-Based Engagement Patterns
  const Step3 = () => (
    <Fade in timeout={600}>
      <Card sx={{ maxWidth: 700, mx: 'auto' }}>
        <CardContent sx={{ p: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <Box
              sx={{
                width: 48,
                height: 48,
                borderRadius: 2,
                background: 'linear-gradient(135deg, #FFA726 0%, #FFB74D 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mr: 2,
              }}
            >
              <Psychology sx={{ color: 'white', fontSize: 28 }} />
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="h5"
                sx={{ fontFamily: 'Roboto Slab, serif', fontWeight: 600 }}
              >
                Age-Based Engagement Insights
              </Typography>
              <Typography variant="body2" color="text.secondary">
                AI-powered behavioral analysis
              </Typography>
            </Box>
            <Chip
              icon={<AutoAwesome />}
              label="AI Insight"
              size="small"
              sx={{
                bgcolor: alpha('#FFA726', 0.15),
                color: '#FFA726',
                fontWeight: 600,
                '& .MuiChip-icon': { color: '#FFA726' },
              }}
            />
          </Box>

          <Stack spacing={3}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                bgcolor: alpha('#1976d2', 0.04),
                border: `1px solid ${alpha('#1976d2', 0.1)}`,
                borderRadius: 2,
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 1.5 }}>
                <Lightbulb sx={{ color: '#1976d2', mr: 1.5, fontSize: 22 }} />
                <Typography variant="body1" fontWeight={500}>
                  Customers 60+ prefer personalized & human tone
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ ml: 5 }}>
                Avoid generic automated messaging. Personal touch increases response by 47%.
              </Typography>
            </Paper>

            <Paper
              elevation={0}
              sx={{
                p: 3,
                bgcolor: alpha('#00897b', 0.04),
                border: `1px solid ${alpha('#00897b', 0.1)}`,
                borderRadius: 2,
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 1.5 }}>
                <TrendingUp sx={{ color: '#00897b', mr: 1.5, fontSize: 22 }} />
                <Typography variant="body1" fontWeight={500}>
                  Higher engagement with advisor-led communication
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ ml: 5 }}>
                This demographic responds 3x better to direct advisor contact vs. automated emails.
              </Typography>
            </Paper>

            <Paper
              elevation={0}
              sx={{
                p: 3,
                bgcolor: alpha('#7E57C2', 0.04),
                border: `1px solid ${alpha('#7E57C2', 0.1)}`,
                borderRadius: 2,
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 1.5 }}>
                <CardGiftcard sx={{ color: '#7E57C2', mr: 1.5, fontSize: 22 }} />
                <Typography variant="body1" fontWeight={500}>
                  Physical mail increases trust for milestone events
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ ml: 5 }}>
                Printed cards for birthdays show 62% higher brand sentiment among seniors.
              </Typography>
            </Paper>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                p: 2,
                borderRadius: 2,
                bgcolor: alpha('#66BB6A', 0.08),
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Verified sx={{ color: '#66BB6A', mr: 1.5 }} />
                <Typography variant="body2" fontWeight={600}>
                  Confidence Score
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <LinearProgress
                  variant="determinate"
                  value={92}
                  sx={{
                    width: 100,
                    height: 8,
                    borderRadius: 4,
                    bgcolor: alpha('#66BB6A', 0.2),
                    '& .MuiLinearProgress-bar': {
                      bgcolor: '#66BB6A',
                      borderRadius: 4,
                    },
                  }}
                />
                <Typography variant="h6" fontWeight={700} color="#66BB6A">
                  92%
                </Typography>
              </Box>
            </Box>
          </Stack>
        </CardContent>
      </Card>
    </Fade>
  );

  // Step 4: Outreach Strategy Decision
  const Step4 = () => (
    <Fade in timeout={600}>
      <Card sx={{ maxWidth: 700, mx: 'auto' }}>
        <CardContent sx={{ p: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <Box
              sx={{
                width: 48,
                height: 48,
                borderRadius: 2,
                background: 'linear-gradient(135deg, #1976d2 0%, #00897b 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mr: 2,
              }}
            >
              <AutoAwesome sx={{ color: 'white', fontSize: 28 }} />
            </Box>
            <Box>
              <Typography
                variant="h5"
                sx={{ fontFamily: 'Roboto Slab, serif', fontWeight: 600 }}
              >
                Outreach Strategy Decision
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Intelligent multi-channel approach
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              mb: 4,
              p: 3,
              borderRadius: 3,
              bgcolor: alpha('#00897b', 0.08),
              border: `2px solid ${alpha('#00897b', 0.3)}`,
            }}
          >
            <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
              Based on preferences and engagement data, a hybrid outreach approach is
              recommended:
            </Typography>
            <Typography variant="h6" color="#00897b" fontWeight={600}>
              Multi-touch personalized engagement strategy
            </Typography>
          </Box>

          <Stack spacing={3}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                border: `2px solid ${alpha('#1976d2', 0.3)}`,
                borderRadius: 2,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: 4,
                  height: '100%',
                  bgcolor: '#1976d2',
                }}
              />
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <CheckCircle sx={{ color: '#66BB6A', mr: 2, fontSize: 28 }} />
                <MailOutline sx={{ color: '#1976d2', mr: 1.5, fontSize: 24 }} />
                <Typography variant="h6" fontWeight={600}>
                  Email with personalized message
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ ml: 7 }}>
                Send warm, advisor-signed birthday message via preferred email channel
              </Typography>
            </Paper>

            <Paper
              elevation={0}
              sx={{
                p: 3,
                border: `2px solid ${alpha('#00897b', 0.3)}`,
                borderRadius: 2,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: 4,
                  height: '100%',
                  bgcolor: '#00897b',
                }}
              />
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <CheckCircle sx={{ color: '#66BB6A', mr: 2, fontSize: 28 }} />
                <LocalPhone sx={{ color: '#00897b', mr: 1.5, fontSize: 24 }} />
                <Typography variant="h6" fontWeight={600}>
                  Advisor phone follow-up recommended
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ ml: 7 }}>
                Schedule personal call 2 days after birthday during preferred morning hours
              </Typography>
            </Paper>

            <Paper
              elevation={0}
              sx={{
                p: 3,
                border: `2px solid ${alpha('#7E57C2', 0.3)}`,
                borderRadius: 2,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: 4,
                  height: '100%',
                  bgcolor: '#7E57C2',
                }}
              />
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <CheckCircle sx={{ color: '#66BB6A', mr: 2, fontSize: 28 }} />
                <CardGiftcard sx={{ color: '#7E57C2', mr: 1.5, fontSize: 24 }} />
                <Typography variant="h6" fontWeight={600}>
                  Send printed milestone card
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ ml: 7 }}>
                Premium 65th birthday card to arrive within 3-5 business days
              </Typography>
            </Paper>
          </Stack>

          <Box
            sx={{
              mt: 4,
              display: 'flex',
              alignItems: 'center',
              p: 2.5,
              borderRadius: 2,
              bgcolor: alpha('#66BB6A', 0.08),
              border: `1px solid ${alpha('#66BB6A', 0.3)}`,
            }}
          >
            <Security sx={{ color: '#66BB6A', mr: 2, fontSize: 28 }} />
            <Box>
              <Typography variant="body1" fontWeight={600} color="#66BB6A">
                ✓ Compliance Approved
              </Typography>
              <Typography variant="body2" color="text.secondary">
                All channels verified against consent preferences and regulatory requirements
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Fade>
  );

  // Step 5: Generated Message
  const Step5 = () => (
    <Fade in timeout={600}>
      <Card sx={{ maxWidth: 700, mx: 'auto' }}>
        <CardContent sx={{ p: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <Box
              sx={{
                width: 48,
                height: 48,
                borderRadius: 2,
                bgcolor: alpha('#00897b', 0.15),
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mr: 2,
              }}
            >
              <SendOutlined sx={{ color: '#00897b', fontSize: 28 }} />
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="h5"
                sx={{ fontFamily: 'Roboto Slab, serif', fontWeight: 600 }}
              >
                Compliant Personalized Message
              </Typography>
              <Typography variant="body2" color="text.secondary">
                AI-generated, advisor-approved
              </Typography>
            </Box>
            <Chip
              icon={<Verified />}
              label="Approved"
              size="small"
              sx={{
                bgcolor: alpha('#66BB6A', 0.15),
                color: '#66BB6A',
                fontWeight: 600,
                '& .MuiChip-icon': { color: '#66BB6A' },
              }}
            />
          </Box>

          <Paper
            elevation={0}
            sx={{
              p: 4,
              bgcolor: alpha('#f5f5f5', 0.5),
              border: `1px solid ${theme.palette.divider}`,
              borderRadius: 2,
              mb: 3,
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontFamily: 'Roboto, sans-serif',
                lineHeight: 1.8,
                whiteSpace: 'pre-line',
              }}
            >
              {`Dear Sarah,

Wishing you a wonderful 65th birthday! It has been our privilege to support you over the years. If there is anything you need as you celebrate this milestone, I'm here to help.

Warm regards,
Michael
Senior Advisor`}
            </Typography>
          </Paper>

          <Stack spacing={2}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                p: 2,
                borderRadius: 2,
                bgcolor: alpha('#1976d2', 0.06),
              }}
            >
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  bgcolor: '#1976d2',
                  mr: 2,
                }}
              />
              <Typography variant="body2">
                <strong>Personalization:</strong> Uses customer first name, milestone age, and
                relationship duration
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                p: 2,
                borderRadius: 2,
                bgcolor: alpha('#00897b', 0.06),
              }}
            >
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  bgcolor: '#00897b',
                  mr: 2,
                }}
              />
              <Typography variant="body2">
                <strong>Tone:</strong> Warm, professional, and human (not promotional)
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                p: 2,
                borderRadius: 2,
                bgcolor: alpha('#66BB6A', 0.06),
              }}
            >
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  bgcolor: '#66BB6A',
                  mr: 2,
                }}
              />
              <Typography variant="body2">
                <strong>Compliance:</strong> No sales language, TCPA compliant, consent verified
              </Typography>
            </Box>
          </Stack>
        </CardContent>
      </Card>
    </Fade>
  );

  // Step 6: Follow-up Automation
  const Step6 = () => (
    <Fade in timeout={600}>
      <Card sx={{ maxWidth: 700, mx: 'auto' }}>
        <CardContent sx={{ p: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <Box
              sx={{
                width: 48,
                height: 48,
                borderRadius: 2,
                background: 'linear-gradient(135deg, #66BB6A 0%, #81C784 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mr: 2,
              }}
            >
              <TaskAlt sx={{ color: 'white', fontSize: 28 }} />
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="h5"
                sx={{ fontFamily: 'Roboto Slab, serif', fontWeight: 600 }}
              >
                Follow-Up Scheduled
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Automated task creation
              </Typography>
            </Box>
            <Chip
              icon={<AutoAwesome />}
              label="Automated"
              size="small"
              sx={{
                bgcolor: alpha('#FFA726', 0.15),
                color: '#FFA726',
                fontWeight: 600,
                '& .MuiChip-icon': { color: '#FFA726' },
              }}
            />
          </Box>

          <Stack spacing={3} sx={{ mb: 4 }}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                border: `1px solid ${alpha('#66BB6A', 0.3)}`,
                borderRadius: 2,
                bgcolor: alpha('#66BB6A', 0.04),
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                <CheckCircle sx={{ color: '#66BB6A', mr: 2, mt: 0.5, fontSize: 24 }} />
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    Advisor Call Scheduled
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    Personal follow-up call with Sarah Johnson
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, mt: 1.5 }}>
                    <Chip
                      icon={<Schedule />}
                      label="Feb 18, 2026 @ 9:30 AM"
                      size="small"
                      variant="outlined"
                    />
                    <Chip
                      label="Michael (Advisor)"
                      size="small"
                      variant="outlined"
                    />
                  </Box>
                </Box>
              </Box>
            </Paper>

            <Paper
              elevation={0}
              sx={{
                p: 3,
                border: `1px solid ${alpha('#66BB6A', 0.3)}`,
                borderRadius: 2,
                bgcolor: alpha('#66BB6A', 0.04),
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                <CheckCircle sx={{ color: '#66BB6A', mr: 2, mt: 0.5, fontSize: 24 }} />
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    Printed Card Request Sent
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    Premium 65th birthday milestone card
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, mt: 1.5 }}>
                    <Chip
                      icon={<CardGiftcard />}
                      label="Delivery: 3-5 days"
                      size="small"
                      variant="outlined"
                    />
                    <Chip
                      label="Address verified"
                      size="small"
                      variant="outlined"
                    />
                  </Box>
                </Box>
              </Box>
            </Paper>

            <Paper
              elevation={0}
              sx={{
                p: 3,
                border: `1px solid ${alpha('#66BB6A', 0.3)}`,
                borderRadius: 2,
                bgcolor: alpha('#66BB6A', 0.04),
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                <CheckCircle sx={{ color: '#66BB6A', mr: 2, mt: 0.5, fontSize: 24 }} />
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    Policy Review Reminder Set
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    Opportune time to discuss coverage options
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, mt: 1.5 }}>
                    <Chip
                      icon={<Schedule />}
                      label="During follow-up call"
                      size="small"
                      variant="outlined"
                    />
                    <Chip
                      label="Milestone opportunity"
                      size="small"
                      variant="outlined"
                    />
                  </Box>
                </Box>
              </Box>
            </Paper>
          </Stack>

          <Box
            sx={{
              p: 3,
              borderRadius: 3,
              background: 'linear-gradient(135deg, #1976d2 0%, #00897b 100%)',
              color: 'white',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <TrendingUp sx={{ mr: 1.5, fontSize: 28 }} />
              <Typography variant="h6" fontWeight={600}>
                Expected Impact
              </Typography>
            </Box>
            <Stack spacing={1}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box
                  sx={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    bgcolor: 'white',
                    mr: 1.5,
                  }}
                />
                <Typography variant="body2">
                  47% higher engagement through personalized touch
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box
                  sx={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    bgcolor: 'white',
                    mr: 1.5,
                  }}
                />
                <Typography variant="body2">
                  3x better response with advisor-led follow-up
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box
                  sx={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    bgcolor: 'white',
                    mr: 1.5,
                  }}
                />
                <Typography variant="body2">
                  62% improvement in brand sentiment with physical card
                </Typography>
              </Box>
            </Stack>
          </Box>
        </CardContent>
      </Card>
    </Fade>
  );

  const steps = [
    { component: <Step1 />, title: 'Customer Milestone' },
    { component: <Step2 />, title: 'Communication Preferences' },
    { component: <Step3 />, title: 'Engagement Insights' },
    { component: <Step4 />, title: 'Strategy Decision' },
    { component: <Step5 />, title: 'Personalized Message' },
    { component: <Step6 />, title: 'Follow-Up Automation' },
  ];

  return (
    <Box sx={{ maxWidth: 1200, mx: 'auto', py: 4 }}>
      {/* Feature Header */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontFamily: 'Roboto Slab, serif',
            fontWeight: 700,
            background: 'linear-gradient(135deg, #1976d2 0%, #00897b 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Smart Customer Engagement
        </Typography>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          AI-Powered Birthday Outreach
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
          Your AI assistant analyzes customer preferences and creates personalized engagement
          strategies automatically
        </Typography>
      </Box>

      {/* Progress Indicator */}
      <Box sx={{ mb: 4, maxWidth: 700, mx: 'auto' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          {steps.map((step, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                flex: 1,
              }}
            >
              <Box
                sx={{
                  width: 32,
                  height: 32,
                  borderRadius: '50%',
                  bgcolor:
                    index <= currentStep
                      ? 'linear-gradient(135deg, #1976d2 0%, #00897b 100%)'
                      : alpha(theme.palette.primary.main, 0.1),
                  color: index <= currentStep ? 'white' : 'text.secondary',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  background:
                    index <= currentStep
                      ? 'linear-gradient(135deg, #1976d2 0%, #00897b 100%)'
                      : alpha(theme.palette.primary.main, 0.1),
                  mb: 1,
                }}
              >
                {index < currentStep ? <CheckCircle sx={{ fontSize: 20 }} /> : index + 1}
              </Box>
              <Typography
                variant="caption"
                color={index <= currentStep ? 'text.primary' : 'text.secondary'}
                fontWeight={index === currentStep ? 600 : 400}
                sx={{ display: { xs: 'none', md: 'block' }, textAlign: 'center' }}
              >
                {step.title}
              </Typography>
            </Box>
          ))}
        </Box>
        <LinearProgress
          variant="determinate"
          value={(currentStep / (steps.length - 1)) * 100}
          sx={{
            height: 4,
            borderRadius: 2,
            bgcolor: alpha(theme.palette.primary.main, 0.1),
            '& .MuiLinearProgress-bar': {
              borderRadius: 2,
              background: 'linear-gradient(90deg, #1976d2 0%, #00897b 100%)',
            },
          }}
        />
      </Box>

      {/* Current Step Content */}
      <Box sx={{ minHeight: 400, mb: 4 }}>{steps[currentStep].component}</Box>

      {/* Navigation Buttons */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 2,
          maxWidth: 700,
          mx: 'auto',
        }}
      >
        {currentStep > 0 && (
          <Button
            variant="outlined"
            size="large"
            onClick={handlePrevious}
            sx={{
              borderRadius: 3,
              px: 4,
              py: 1.5,
              fontWeight: 600,
            }}
          >
            Previous
          </Button>
        )}

        {currentStep < steps.length - 1 ? (
          <Button
            variant="contained"
            size="large"
            endIcon={<ArrowForward />}
            onClick={handleNext}
            sx={{
              borderRadius: 3,
              px: 4,
              py: 1.5,
              fontWeight: 600,
              background: 'linear-gradient(135deg, #1976d2 0%, #00897b 100%)',
              boxShadow: '0 4px 12px rgba(25, 118, 210, 0.3)',
              '&:hover': {
                background: 'linear-gradient(135deg, #1565c0 0%, #00796b 100%)',
                boxShadow: '0 6px 16px rgba(25, 118, 210, 0.4)',
              },
            }}
          >
            Next
          </Button>
        ) : (
          <Button
            variant="contained"
            size="large"
            onClick={handleRestart}
            sx={{
              borderRadius: 3,
              px: 4,
              py: 1.5,
              fontWeight: 600,
              background: 'linear-gradient(135deg, #66BB6A 0%, #81C784 100%)',
              '&:hover': {
                background: 'linear-gradient(135deg, #558B2F 0%, #66BB6A 100%)',
              },
            }}
          >
            Start Over
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default DemoScreen;
