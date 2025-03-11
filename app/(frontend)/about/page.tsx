import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Copyright from '@/components/Copyright';
import ParaBanner from '@/components/parallax';

export default function AboutPage() {
  return (
    <Box>
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
          url="https://images.squarespace-cdn.com/content/v1/5aceb3075ffd20be26cc1d42/1651158785741-NPXSW8PET4PDHBL5941S/DRM_7183.JPG?format=2500w"
          headline="BIO"
          subtext="Learn more!"
        />
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ my: 8 }}>
        <Grid container spacing={6}>
          {/* Company Overview */}
          <Grid item xs={12} md={6}>
            <Typography variant="h3" sx={{ mb: 3 }}>
              “A connoisseur of sorts...”
            </Typography>
            <Typography variant="body1" paragraph>
              Long bio here.
            </Typography>
          </Grid>

          {/* Our Story */}
          <Grid item xs={12} md={6}>
            <Typography variant="h3" sx={{ mb: 3 }}>
              Releases
            </Typography>
            <Typography variant="body1" paragraph>
              Bunch of songs.
            </Typography>
          </Grid>

          {/* Our Values  */}
          <Grid item xs={12} md={6}>
            <Typography variant="h3" sx={{ mb: 3 }}>
              From the Beginning...
            </Typography>
            <Box component={Paper} elevation={2} sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ mb: 2, color: 'primary.main' }}>
                ERIC CLEMENS
              </Typography>
              <Typography variant="body1" paragraph>
                Eric Clemens built his foundation of music in open mics during his teenage years.  Testing out song after song, this is where the music grew from rudimentary chords to the stories they are today.
              </Typography>

              <Typography variant="h6" sx={{ mb: 2, color: 'primary.main' }}>
                MOUNTAIN RIVER (2012-2013)
              </Typography>
              <Typography variant="body1" paragraph>
                Alongside his friend and roommate Mike Stull, they formed an acoustic duo that frequented Java Central, a coffee shop in Westerville, while in college.  They also released a handful of covers on YouTube.
              </Typography>

              <Typography variant="h6" sx={{ mb: 2, color: 'primary.main' }}>
                BRAVE WEATHER (2014 - 2017)
              </Typography>
              <Typography variant="body1" paragraph>
                Another acoustic duo, which eventually turned into a full band with Dani Harness, Efrum Imler and Kenny Caterer.  What started as folk and blues (with a heavy emphasis on harmony) began to develop into a different rock sound and release a single (Sailors) and EP (EP I) before ultimately splitting ways.
              </Typography>

              <Typography variant="h6" sx={{ mb: 2, color: 'primary.main' }}>
                CLEMENS & CO (2017 - 2020)
              </Typography>
              <Typography variant="body1" paragraph>
                After Brave Weather, Eric and Efrum put together a much larger group of musicians, featuring up to twelve performers.  After months of regularly playing at underground venue Notes in downtown Columbus, they hit the major summer festivals throughout the city and in 2019, released the debut full length album “Cashmere Feel”.
              </Typography>

              <Typography variant="h6" sx={{ mb: 2, color: 'primary.main' }}>
                RED HEALER (2021-NOW)
              </Typography>
              <Typography variant="body1" paragraph>
                The pandemic in 2020 saw the end of live music for a time, and the band spent lots of time apart.  The decision to rebrand came with a vision of better days to come, and songs that would help bring that positivity and vivacity back to live music.
              </Typography>
            </Box>
          </Grid>

        </Grid>
        {/* Team Section */}
        <Box sx={{ mt: 8, mb: 6 }}>
          <Typography variant="h2" align="center" sx={{ mb: 6 }}>
            Meet the Band
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {[
              {
                name: 'Eric Clemens',
                role: 'Guitar',
                description: 'Why do we even keep this guy around?',
              },
              {
                name: 'Mike Stull',
                role: 'Bass',
                description: 'The boys are back!',
              },
              {
                name: 'Will Ash',
                role: 'Drums',
                description: 'Willy the Kid',
              },
            ].map((member, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Paper elevation={2} sx={{ p: 4, height: '100%' }}>
                  <Typography variant="h5" sx={{ mb: 2 }}>
                    {member.name}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ color: 'primary.main', mb: 2 }}>
                    {member.role}
                  </Typography>
                  <Typography variant="body1">
                    {member.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box sx={{ mt: 8, mb: 2 }}>
          <Copyright />
        </Box>
      </Container>
    </Box>
  );
}