import React from 'react';
import CircularProgress from '@mui/joy/CircularProgress';
import { Typography } from '@mui/joy';

interface ProgressBarProps {
  value: number;
}

const ProgressBarComponent: React.FC<ProgressBarProps> = ({ value }) => (
  <CircularProgress
    variant="soft"
    determinate
    value={value}
    sx={{
      "--CircularProgress-trackThickness": "17px",
      "--CircularProgress-progressThickness": "17px",
      "--CircularProgress-size": "100px",
      "--CircularProgress-progressColor": "white",
      "--CircularProgress-trackColor": "rgb(27, 27, 33)",
      boxShadow: `0 0 20px 10px white`,
    }}
  >
    <Typography style={{ color: "white" }}>{value}%</Typography>
  </CircularProgress>
);

export default ProgressBarComponent;