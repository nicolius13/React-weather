import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import TempContext from '../../store/tempContext';

const TempBtn: React.FC = () => {
  const tempCtx = useContext(TempContext);

  return (
    <div className="text-end">
      <Button className="me-2" variant="secondary" onClick={() => tempCtx.updateTempType('C')}>
        °C
      </Button>
      <Button variant="secondary" onClick={() => tempCtx.updateTempType('F')}>
        °F
      </Button>
    </div>
  );
};

export default TempBtn;
