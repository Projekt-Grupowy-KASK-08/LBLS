import React, { useState } from 'react';
import '../styles/App.css';
import imgPG from '../images/logo.png';
import ProgressBarComponent from './ProgressBarComponent';
import '../styles/Plot.css';
import '../styles/ListOfPlots.css';
import '../styles/Footer.css';
import '../styles/Choice.css';
import InfiniteScrollComponent from './InfiniteScrollComponent';
import ChoiceButtons from './ChoiceButtons';
import Signal from './signal/Signal';

function App() {
  const [value, setValue] = useState(75);
  const [dataSource, setDataSource] = useState<number[][]>([Array.from({ length: 30 })]);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const fetchMoreData = () => {
    if (dataSource.length > 200) {
      setTimeout(() => {
        setDataSource(dataSource.concat(Array.from({ length: 20 })));
      }, 500);
    } else {
      setHasMore(false);
    }
  };

  return (
    <div className="App">
      <div className="logo">
        <img src={imgPG} height="80" style={{ right: "2%", top: "5%", position: "absolute" }} alt="Politechnika Gdańska" />
      </div>
      <div className="Choice">
        <ChoiceButtons />
      </div>
      <div className="Plot">
        <Signal />
      </div>
      <div className="ListOfPlots">
        <p>Wybierz wykres</p>
        <InfiniteScrollComponent dataSource={dataSource} fetchMoreData={fetchMoreData} hasMore={hasMore} />
      </div>
      <div className="ProgressBar" style={{ left: "9%", top: "3%", position: "absolute" }}>
        <ProgressBarComponent value={value} />
      </div>
      <div className="Footer">
        © Osowska Mańczak Naklicki Niesiobędzki Paliński
      </div>
    </div>
  );
}

export default App;
