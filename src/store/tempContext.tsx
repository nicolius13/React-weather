import { createContext, useState } from 'react';

type TempContextType = {
  tempType: string;
  updateTempType: (type: string) => void;
};

const TempContext = createContext<TempContextType>({
  tempType: 'C',
  updateTempType: () => {},
});

export const TempTypeContextProvider: React.FC = (props: React.PropsWithChildren<{}>) => {
  const [tempType, setTempType] = useState('C');

  const updateTempType = (type: string) => {
    setTempType(type);
  };

  const context = {
    tempType: tempType,
    updateTempType,
  };

  return <TempContext.Provider value={context}>{props.children}</TempContext.Provider>;
};

export default TempContext;
