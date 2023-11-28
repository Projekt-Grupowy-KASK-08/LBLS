import React, { Fragment, useCallback, useEffect, useRef, useState } from "react";
import { getMockData } from "../../mocks/repository";
import "../../styles/Signal.css"
import Chart from "chart.js/auto";
import { getRelativePosition } from 'chart.js/helpers';
import '../../styles/Choice.css';
import '../../styles/Plot.css';
import Button from '@mui/material/Button';

function Signal() {

  let [signalData, setSignalData] = useState(getMockData());

  const chartRef = useRef<HTMLCanvasElement>(null);

  // This useState is broken, do not use it as a SSoT, only for useEffect to fire
  const [selection, setSelection] = useState<Signal.Selection[]>([]);

  useEffect(() => {
    console.log(JSON.stringify(selection))
  }, [selection])

  const handleClick = (x: number, px: number) => {
    const isBeingSelected = window.localStorage.getItem("isBeingSelected");
    if(isBeingSelected==='true') {
      saveSecondSelection(x, px);
      window.localStorage.setItem("isBeingSelected", 'false')
      getSelectedCoordinates();
    } else {
      saveFirstSelection(x, px);
      window.localStorage.setItem("isBeingSelected", 'true')
    }
  }

  const saveFirstSelection = (x: number, px: number) => {
    window.localStorage.setItem('startX', `${x}`);
    window.localStorage.setItem('endX', '-1');
    window.localStorage.setItem('startPixels', `${px}`)
  }

  const saveSecondSelection = (x: number, px: number) => {
    window.localStorage.setItem('endX', `${x}`);
    const startPx = Number(window.localStorage.getItem('startPixels')!)
    let width = px > startPx ? px - startPx : startPx - px;
    let startX = px > startPx ? startPx : px;
    let ctx = chartRef.current?.getContext('2d');
    //@ts-ignore
    ctx!.fillStyle = "rgba(255, 255, 255, 0.5)"
    let y = 0
    ctx?.fillRect(startX, y, width, 10);
  }

  // I actually have no idea why useState suddenly works here, guess all the async calls to useState in chart.js plugin might cache function usage and that breaks it, localStaorage is a hack, but seems to work just fine
  const getSelectedCoordinates = () => {
    let start = Number(window.localStorage.getItem('startX')!);
    let end = Number(window.localStorage.getItem('endX')!);
    // Why does this work without setState? Legit no idea, but setState just breaks it
    let oldSelection = selection;
    oldSelection.push({startX: start, endX: end})
  }


  useEffect(() => {
    console.log(signalData)
    // useState is broken inside chart.js callback so we have to use localStorage to have a working state in the app
    window.localStorage.setItem("isBeingSelected", 'false')
    if (chartRef && chartRef.current && chartRef.current.getContext('2d')) {
      const ctx = chartRef.current.getContext('2d');
      const chart= new Chart(ctx!, {
        type: 'line',
        data: {
          labels: signalData,
          datasets: [
            {
              label: 'Channel 1',
              data: signalData,
              fill: false,
              borderColor: 'rgb(255, 0, 0)',
              tension: 0.1
            },
          ],
        },
        options: {
          // Configure Chart options
          responsive: true,
          events: ['click'],
          scales: {
            x: {
              ticks: {
                display: false
              }
            }
          },
          onClick: (e) => {
            //@ts-ignore
            const canvasPosition = getRelativePosition(e, chart);

            // Substitute the appropriate scale IDs
            const dataX = chart.scales.x.getValueForPixel(canvasPosition.x);
            handleClick(dataX!, canvasPosition.x);
          },
        },
      });
      };
     }, [signalData]);


     return (
      <>
       {/* Buttons */}
       <div className="Choice">
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
        </div>
      <div className="Plot">
        <canvas ref={chartRef} />
      </div>
      </>
    )
}

export default Signal;
