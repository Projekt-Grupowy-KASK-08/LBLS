import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Button from '@mui/material/Button';

interface InfiniteScrollComponentProps {
  dataSource: number[][];
  fetchMoreData: () => void;
  hasMore: boolean;
}

const InfiniteScrollComponent: React.FC<InfiniteScrollComponentProps> = ({ dataSource, fetchMoreData, hasMore }) => {
  return (
    <InfiniteScroll
      dataLength={dataSource.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
    >
      {dataSource.map((item, index) => (
        <Button
          key={index}
          variant="contained"
          style={{ backgroundColor: "rgb(164, 156, 156)", color: "black", width: "100%", padding: "8px" }}
        >
          wykres #{index + 1}
        </Button>
      ))}
    </InfiniteScroll>
  );
};

export default InfiniteScrollComponent;
