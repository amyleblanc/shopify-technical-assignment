import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function Response(props) {
  return (
    <Card sx={{maxWidth: 500, maxHeight: 350, padding: "10px", marginLeft: "2em", marginBottom: "2em"}}>
      <CardContent>
        <Typography variant="h6" component="div" sx={{pb: "10px"}}>
          {props.question}
        </Typography>
        <Typography variant="h7">
          {props.answer}
        </Typography>
      </CardContent>
    </Card>
  );
}
