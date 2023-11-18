import React from 'react';
import Button from '@mui/material/Button';

const ChoiceButtons = () => {
  return (
    <>
      <Button variant="contained" style={{ right: "10%", top: "25%", position: "absolute" }}>
        Wyślij
      </Button>
      <Button variant="contained" style={{ right: "28%", top: "25%", position: "absolute", backgroundColor: "rgb(255, 85, 75)" }}>
        Putamen
      </Button>
      <Button variant="contained" style={{ right: "40%", top: "25%", position: "absolute", backgroundColor: "rgb(186, 141, 214)" }}>
        Gałka blada zewnętrzna
      </Button>
      <Button variant="contained" style={{ left: "10%", top: "25%", position: "absolute", backgroundColor: "rgb(255, 220, 50)" }}>
        Gałka blada wewnętrzna
      </Button>
    </>
  );
};

export default ChoiceButtons;