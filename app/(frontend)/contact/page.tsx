'use client'
import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import EmailIcon from '@mui/icons-material/Email';
import Copyright from '@/components/Copyright';
import ParaBanner from '@/components/parallax';


export default function ContactPage() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <Box sx={{ mt: -4 }}>
      {/* Hero Section */}
      <Box
        sx={{
          width: '100%',
          height: '50vh',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 6,
        }}
      >
        <ParaBanner
          url="https://images.squarespace-cdn.com/content/v1/5aceb3075ffd20be26cc1d42/1651158582029-N6OSKT3U09JUZAIHSISA/DRM_7280.JPG?format=2500w"
          headline="Contact"
          subtext="Booking and General Inquiries"
        />
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Typography sx={{ mx: 2 }}>
          Whether you&apos;re looking for a solo act, trio, or full-fledged band, we&apos;ll help you booking the perfect night. Please fill out the form below and tell us more about you and what you envision at your event.
        </Typography>
        <Grid container spacing={6}>
          {/* Contact Form */}
          <Grid item xs={12} md={8}>
            <Paper elevation={2} sx={{ mt: 4, p: 4 }}>
              <Typography variant="h4" sx={{ mb: 4 }}>
                Get in Touch
              </Typography>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Phone Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      multiline
                      rows={4}
                      label="Your Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      sx={{ mt: 2 }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} md={4}>
            <Paper elevation={2} sx={{ p: 4, height: 'auto', mt: 4}}>
              <Typography variant="h4" sx={{ mb: 4 }}>
                Contact Information
              </Typography>
              <Box sx={{ mb: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <EmailIcon sx={{ mr: 2, color: 'primary.main' }} />
                  <Typography variant="h6">
                    Email
                  </Typography>
                </Box>
                <Typography variant="body1">
                  booking@redhealerband.com
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>

        <Box sx={{ mt: 8, mb: 2 }}>
          <Copyright />
        </Box>
      </Container>
    </Box>
  );
}