import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

// Images
import lightRain from '../../assets/icons/LightRain.png';

type DayPrevisionProps = {};

const DayPrevision: React.FC<DayPrevisionProps> = () => {
  return (
    <Col className="text-center blueBack p-3" xs={5} md={2}>
      <p>Tomorow</p>
      <Image src={lightRain} fluid />
      <Row>
        <Col>
          <p>7 °C</p>
        </Col>
        <Col>
          <p>14 °C</p>
        </Col>
      </Row>
    </Col>
  );
};

export default DayPrevision;
