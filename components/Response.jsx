import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function Response(props) {
  return (
    <Card sx={{
      maxWidth: "500px", 
      maxHeight: "400px", 
      padding: "10px", 
      marginLeft: "2em", 
      marginBottom: "2em", 
      backgroundColor: "#458f47", 
      boxShadow: 3,
    }}>
      <CardContent>
        <Typography variant="h6" component="div" 
          sx={{
            pb: "10px", 
            color: "white",
          }}>
          {props.question}
        </Typography>
        <Typography variant="h7" sx={{color: "white"}}>
          {props.answer}
        </Typography>
      </CardContent>
    </Card>
  );
}
