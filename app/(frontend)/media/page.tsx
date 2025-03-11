'use client';

import * as React from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { Box, Paper, Container } from '@mui/material';
import AudioPlayer from '@/components/AudioPlayer';
import ParaBanner from '@/components/parallax';

const rows: GridRowsProp = [
  {
    id: 1, title: 'White Whiskers',
    date: '2-26-2025',
    link: 'https://static1.squarespace.com/static/5aceb3075ffd20be26cc1d42/t/67c1ce54cf0d4f4af2e3ed4d/1740754520124/White+Whiskers+short.mp3/original/White+Whiskers+short.mp3',
    comments: 'recognizing canine wisdom'
  },
  {
    id: 2, title: 'Holes',
    date: '12-13-2024',
    link: 'https://static1.squarespace.com/static/5aceb3075ffd20be26cc1d42/t/67b5e34599f46606fe0dca70/1739973453664/Pockets+%28ver4%29.mp3/original/Pockets+%28ver4%29.mp3',
    comments: 'southern rock and slide geetar'
  },
  {
    id: 3, title: 'Sea Shanty 3',
    date: '11-10-2024',
    link: 'https://static1.squarespace.com/static/5aceb3075ffd20be26cc1d42/t/67b5e38670c8ea7214ed0776/1739973513576/Sea+Shanty+3+Nylon+Guitars.mp3/original/Sea+Shanty+3+Nylon+Guitars.mp3',
    comments: 'inspired by runescape\'s sea shanty 2'
  },
  {
    id: 4, title: 'James Blue',
    date: '11-02-2024',
    link: 'https://static1.squarespace.com/static/5aceb3075ffd20be26cc1d42/t/67b5e5f97429bd6fc3add67c/1739974142297/James+Blue.mp3/original/James+Blue.mp3',
    comments: 'double the speed for james brown mode'
  },
  {
    id: 5, title: 'Kangarucifer',
    date: '11-02-2024',
    link: 'https://static1.squarespace.com/static/5aceb3075ffd20be26cc1d42/t/67b5e60a70c8ea7214ed808c/1739974159748/Kangarucifer+first-cut.mp3/original/Kangarucifer+first-cut.mp3',
    comments: 'twitch prompt: hard rock song about a kangaroo'
  },
  {
    id: 6, title: 'GOTE',
    date: '10-31-2024',
    link: 'https://static1.squarespace.com/static/5aceb3075ffd20be26cc1d42/t/67b5e62a9d494b45843f7364/1739974190280/GOTE+Intro.mp3/original/GOTE+Intro.mp3',
    comments: 'goals, obstacles, tactics and expectations jam'
  },
  {
    id: 7, title: 'Lighter',
    date: '10-22-2024',
    link: 'https://static1.squarespace.com/static/5aceb3075ffd20be26cc1d42/t/67b5e6427dc2e63cf48d0053/1739974214731/Lighter+%28sketch%29.mp3/original/Lighter+%28sketch%29.mp3',
    comments: 'a weight has been lifted'
  },
  {
    id: 8, title: 'Magnificent Disguising',
    date: '04-24-2024',
    link: 'https://static1.squarespace.com/static/5aceb3075ffd20be26cc1d42/t/67b5e66a12bc591136a1934f/1739974255648/Mag+Dis+v2.mp3/original/Mag+Dis+v2.mp3',
    comments: 'the bad man in the mirror'
  },
  {
    id: 9, title: 'Cashmere Promenade',
    date: '07-12-2024',
    link: 'https://static1.squarespace.com/static/5aceb3075ffd20be26cc1d42/t/67b5e71a2fce5871fcab019c/1739974431683/Cashmere+Promenade+v1.mp3/original/Cashmere+Promenade+v1.mp3',
    comments: 'come one come all, step right up'
  },
  {
    id: 10, title: 'Keep it the Same',
    date: '07-12-2024',
    link: 'https://static1.squarespace.com/static/5aceb3075ffd20be26cc1d42/t/67b5e7b27dc2e63cf48d555a/1739974580046/Do+it+the+Same+1.m4a/original/Do+it+the+Same+1.m4a',
    comments: 'voice memo with potential'
  },
  {
    id: 11, title: 'Toto the Komodo',
    date: '07-12-2024',
    link: 'https://static1.squarespace.com/static/5aceb3075ffd20be26cc1d42/t/67b5e7cb0001e73942d55fa5/1739974610467/Toto+Day+1.mp3/original/Toto+Day+1.mp3',
    comments: 'twitch prompt: world music about a komodo dragon'
  },
  {
    id: 12, title: 'Bob the Frog',
    date: '04-27-2022',
    link: 'https://static1.squarespace.com/static/5aceb3075ffd20be26cc1d42/t/67b5e7e312bc591136a1cf45/1739974635232/Bob+the+Frog.mp3/original/Bob+the+Frog.mp3',
    comments: 'twitch prompt: country song about a frog'
  },
];

export default function SongsPage() {
  const [selectedSong, setSelectedSong] = React.useState(rows[0]);

  const columns: GridColDef[] = [
    { field: 'title', headerName: 'Song', width: 200, flex: 1 },
    { field: 'date', headerName: 'Date', width: 120 },
    { field: 'comments', headerName: 'Comments', width: 300, flex: 1.5 },
  ];

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
          url="https://images.squarespace-cdn.com/content/v1/5aceb3075ffd20be26cc1d42/1651158672471-ROF74FMP791MMO3U0JG2/DRM_7066.JPG?format=2500w"
          headline="Media"
          subtext="Daddy made you some content!"
        />
      </Box>
      
      <Container maxWidth="lg">
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: 4,
          mb: 6
        }}>
          <AudioPlayer
            url={selectedSong.link}
            title={selectedSong.title}
            comments={selectedSong.comments}
          />

          <Paper elevation={2} sx={{ height: 400 }}>
            <DataGrid
              rows={rows}
              columns={columns}
              sx={{
                border: 'none',
                '& .MuiDataGrid-row': {
                  cursor: 'pointer',
                  '&:hover': {
                    backgroundColor: 'action.hover',
                  },
                  '&.Mui-selected': {
                    backgroundColor: 'primary.main',
                    color: 'primary.contrastText',
                  }
                }
              }}
              onRowClick={(params) => setSelectedSong(params.row)}
              initialState={{
                pagination: {
                  paginationModel: { pageSize: 12 },
                },
              }}
              pageSizeOptions={[12]}
            />
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}