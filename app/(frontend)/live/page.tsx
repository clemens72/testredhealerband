'use client'
import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Copyright from '@/components/Copyright';
import ParaBanner from '@/components/parallax';

export default function ServicesPage() {
  return (
    <Box sx={{ mt: -2 }}>
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
          url="https://images.squarespace-cdn.com/content/v1/5aceb3075ffd20be26cc1d42/1671477790234-JRDSP6L3ZL6H9CVM64BG/Red+Healer+Social-89.jpg?format=2500w"
          headline="Upcoming Shows"
          subtext="Coming Soon!"
        />
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ my: 8 }}>

        <Box sx={{ mt: 8, mb: 2 }}>
          <Copyright />
        </Box>
      </Container>

    </Box>
  );
}