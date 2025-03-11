import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import NextLink from 'next/link';
import Copyright from '@/components/Copyright';
import ParaBanner from '@/components/parallax';

export default function PublicPage() {
  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: '100vh',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 6,
        }}
      >
        <ParaBanner
          url="https://images.squarespace-cdn.com/content/v1/5aceb3075ffd20be26cc1d42/1669754048502-S0IWSHXHSSVG36637DWJ/Red+Healer+Social-82.jpg?format=2500w"
          headline="Feel-Good Folk Soul"
          subtext="Oops! We are on a short break!"
          />
      </Box>

      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h2" sx={{ mb: 4, textAlign: 'center' }}>
              GOOD VIBES ONLY
            </Typography>
            <Typography variant="h5" sx={{ mb: 3, textAlign: 'center' }}>
              Red Healer fuses folk and soul with light-hearted lyricism that never takes itself too seriously.<br />
              Inspired by the energy of the red heeler (Australian cattle dog).
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, textAlign: 'center' }}>
              Originally known as Clemens & Co, the gang rebranded during the COVID-19 pandemic with a new focus on positive and inspiring music for a world that can be harsh and unforgiving.
            </Typography>
          </Grid>
        </Grid>

        <Box sx={{ mt: 8, mb: 4, textAlign: 'center' }}>
          <Button
            variant="contained"
            size="large"
            component={NextLink}
            href="/media"
            sx={{
              fontSize: '1.1rem',
              textTransform: 'none',
              borderRadius: '4px',
              mr: 2,
            }}
          >
            Music and More
          </Button>
          <Button
            variant="contained"
            size="large"
            component={NextLink}
            href="/contact"
            sx={{
              fontSize: '1.1rem',
              textTransform: 'none',
              borderRadius: '4px',
            }}
          >
            Contact Us
          </Button>
        </Box>

        <Box sx={{ mt: 8, mb: 2 }}>
          <Copyright />
        </Box>
      </Container>
    </>
  );
}