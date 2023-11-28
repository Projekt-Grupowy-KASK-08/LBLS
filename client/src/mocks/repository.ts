const generateMockData = (records: number, min: number = -100, max: number = 100): number[] => {
  let data: number[] = []
  for(let i = 0; i<records; i++) {
    let number = Math.floor(Math.random() * (max - min)) + min;
    data.push(number);
  }
  return data;
}

const getMockData = (): Data.SignalData => {
  return generateMockData(10);
}

export {
  getMockData
}
