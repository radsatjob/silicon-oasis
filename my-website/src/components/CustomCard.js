import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import './CustomCard.css'; // import CSS file

const CustomCard = ({ backgroundImage, screenshotImage, text }) => {
  return (
    <Card className="custom-card" sx={{ position: 'relative', width: 300, height: 400, borderRadius: 2, overflow: 'hidden' }}>
      {/* Background image using Box */}
      <Box
        className="background-image"
        sx={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.7)', // slightly darken background for contrast
          zIndex: 1,
        }}
      />

      {/* Screenshot image layered on top */}
      <Box
        component="img"
        src={screenshotImage}
        alt="Screenshot"
        className="screenshot-image"
        sx={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '80%',
          borderRadius: 1,
          boxShadow: 3,
          zIndex: 2,
        }}
      />

      {/* Text below */}
      <CardContent
        sx={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          color: 'white',
          textAlign: 'center',
          zIndex: 3,
        }}
      >
<Typography variant="body1" component="p" sx={{ whiteSpace: 'pre-line' }}>
  {text}
</Typography>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
