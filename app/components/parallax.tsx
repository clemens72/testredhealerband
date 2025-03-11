'use client';

import { ParallaxBanner } from 'react-scroll-parallax';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface ParallaxProps {
    url: string;
    headline: string;
    subtext: string;
}

export default function ParaBanner({ url, headline, subtext }: ParallaxProps) {
    return (
        <ParallaxBanner
            style={{ height: '100%', margin: 'auto'}}
            layers={[
                { image: url, speed: -45 },
                {
                    children: (
                        <Box
                            sx={{
                                textAlign: 'center',
                                color: 'white',
                                padding: '0 20px',
                                alignItems: 'center',
                                inset: '0',
                                height: '100%',
                                position: 'relative'
                            }}
                        >
                            <Typography variant="h1" sx={{
                                fontSize: { xs: '2.5rem', md: '3.5rem' },
                                color: 'white',
                                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                                position: 'relative',
                                top: '30%',
                                pb: '6'
                            }}>
                                {headline}
                            </Typography>
                            <Typography variant="h5" sx={{
                                color: 'white',
                                textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                                position: 'relative',
                                top: '30%'
                            }}>
                                {subtext}
                            </Typography>
                        </Box>
                    )
                }
            ]}
        >
        </ParallaxBanner>
    );
}