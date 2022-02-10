import Button from 'react-bootstrap/Button';

type TempBtnProps = {
  onClick: (arg: string) => void;
};

const TempBtn: React.FC<TempBtnProps> = props => {
  return (
    <div className="text-end">
      <Button className="me-2" variant="secondary" onClick={() => props.onClick('cel')}>
        °C
      </Button>
      <Button variant="secondary" onClick={() => props.onClick('far')}>
        °F
      </Button>
    </div>
  );
};

export default TempBtn;
