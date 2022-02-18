import { useMemo, useState, useContext } from 'react';
import TempContext from '../store/tempContext';

export const useTemp = (temp: number): number => {
  const [temperature, setTemperature] = useState(0);
  const tempCtx = useContext(TempContext);

  useMemo(() => {
    if (tempCtx.tempType === 'C') {
      setTemperature(Math.round(temp - 273.15));
    } else {
      setTemperature(Math.round((temp - 273.15) * 1.8 + 32));
    }
  }, [tempCtx.tempType, temp]);

  return temperature;
};
