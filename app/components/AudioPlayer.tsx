'use client';

import * as React from 'react';
import { Box, IconButton, Slider, Typography, Stack, Paper } from '@mui/material';
import Divider from '@mui/material/Divider';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

interface AudioPlayerProps {
  url: string;
  title: string;
  comments: string;
}

export default function AudioPlayer({ url, title, comments }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [currentTime, setCurrentTime] = React.useState(0);
  const [duration, setDuration] = React.useState(0);
  const audioRef = React.useRef<HTMLAudioElement>(null);

  React.useEffect(() => {
    setIsPlaying(false);
    setCurrentTime(0);
    setDuration(0);
  }, [url]);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            console.error("Error playing audio:", error);
            setIsPlaying(false);
          });
        }
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleTimeSliderChange = (_event: Event, newValue: number | number[]) => {
    if (audioRef.current && typeof newValue === 'number') {
      audioRef.current.currentTime = newValue;
      setCurrentTime(newValue);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <Paper 
      elevation={3} 
      sx={{ 
        p: { xs: 2, sm: 3 },
        borderRadius: 2,
        backgroundColor: 'background.paper',
        width: '100%'
      }}
    >
      <audio
        ref={audioRef}
        src={url}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
      />
      
      <Typography variant="h4" gutterBottom sx={{ mb: 2 }}>
        {title}
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <Typography variant="body1" gutterBottom sx={{ mb: 3 }}>
        {comments}
      </Typography>

      <Stack spacing={2}>
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: 2,
          width: '100%'
        }}>
          <IconButton 
            onClick={handlePlayPause}
            sx={{ 
              p: 2,
              '&:hover': { 
                transform: 'scale(1.1)',
                transition: 'transform 0.2s'
              }
            }}
          >
            {isPlaying ? 
              <PauseIcon sx={{ fontSize: 32 }} /> : 
              <PlayArrowIcon sx={{ fontSize: 32 }} />
            }
          </IconButton>
          
          <Box sx={{ 
            flex: 1, 
            display: 'flex', 
            alignItems: 'center', 
            gap: 2,
            width: '100%'
          }}>
            <Typography variant="body2" color="text.secondary" sx={{ minWidth: 45 }}>
              {formatTime(currentTime)}
            </Typography>
            <Slider
              value={currentTime}
              max={duration}
              onChange={handleTimeSliderChange}
              aria-label="time-indicator"
              size="medium"
              sx={{
                '& .MuiSlider-thumb': {
                  width: 12,
                  height: 12,
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'scale(1.2)',
                  },
                },
                '& .MuiSlider-track': {
                  transition: 'width 0.2s',
                }
              }}
            />
            <Typography variant="body2" color="text.secondary" sx={{ minWidth: 45 }}>
              {formatTime(duration)}
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Paper>
  );
}