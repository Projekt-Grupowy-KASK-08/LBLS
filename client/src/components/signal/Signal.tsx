import React, { useEffect, useRef, useState } from "react";
import { getMockData } from "../../mocks/repository";
import "../../styles/Signal.css"
import Chart from "chart.js/auto";

function Signal() {

  let [signalData, setSignalData] = useState(getMockData());

  const chartRef = useRef<HTMLCanvasElement>(null);

  const [selection, setSelection] = useState<Signal.Selection>({ startX: 0, endX: 0 });

  useEffect(() => {
    console.log(signalData)
    if (chartRef && chartRef.current && chartRef.current.getContext('2d')) {
      const ctx = chartRef.current.getContext('2d');
      const newChartInstance = new Chart(ctx!, {
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
          scales: {
            x: {
              ticks: {
                display: false
              }
            }
          }
        },
      });
      };
     }, [signalData]);


  return (
       <canvas ref={chartRef} />
  )
}

export default Signal;
