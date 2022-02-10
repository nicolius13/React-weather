import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
// Images
import location from '../assets/icons/location.png';
import lightRain from '../assets/icons/LightRain.png';
// Style
import classes from './Today.module.scss';

type props = {
  onClick: () => void;
};

const Today: React.FC<props> = props => {
  return (
    <Row>
      <Col xs={8}>
        <Button variant="secondary" onClick={props.onClick}>
          Search for places
        </Button>
      </Col>
      <Col className="text-end">
        <Button variant="secondary">
          <Image src={location} />
        </Button>
      </Col>
      <Col className={`text-center d-flex ${classes.iconCol}`} xs={12}>
        <Image className="m-auto" src={lightRain} />
      </Col>
      <Col className="text-center">
        <h1 className={classes.temp}>
          7<span className={classes.tempDeg}>°C</span>
        </h1>
        <h2 className="opacity-75 fs-2">Light rain</h2>
        <p className="mb-0 opacity-50">Today . 05/08/88</p>
        <p className="opacity-50">Location</p>
      </Col>
    </Row>
  );
};

export default Today;
