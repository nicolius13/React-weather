import Button from 'react-bootstrap/Button';

type TempBtnProps = {};

const TempBtn: React.FC<TempBtnProps> = () => {
  return (
    <div className="text-end">
      <Button className="me-2" variant="secondary">
        °C
      </Button>
      <Button variant="secondary">°F</Button>
    </div>
  );
};

export default TempBtn;
