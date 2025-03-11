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
            layers={[
                {
                    image: url,
                    speed: -20,
                    expanded: false,
                    opacity: [1, 1],
                    scale: [1, 1.2],
                },
                {
                    children: (
                        <Box
                            sx={{
                                position: 'absolute',
                                inset: 0,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                color: 'white',
                                backgroundColor: 'rgba(0,0,0,0.3)',
                            }}
                        >
                            <Typography variant="h1" sx={{
                                fontSize: { xs: '2.5rem', md: '3.5rem' },
                                color: 'white',
                                textAlign: 'center',
                                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                                mb: 2
                            }}>
                                {headline}
                            </Typography>
                            <Typography variant="h5" sx={{
                                color: 'white',
                                textAlign: 'center',
                                textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                            }}>
                                {subtext}
                            </Typography>
                        </Box>
                    ),
                    speed: -10,
                }
            ]}
            className="aspect-[2/1]"
            style={{
                height: '100%',
                width: '100%',
            }}
        />
    );
}