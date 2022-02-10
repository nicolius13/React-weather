import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';
// Icons
import { BsCursorFill } from 'react-icons/bs';
// Components
import DayPrevision from './ui/DayPrevision';
// Style
import classes from './NextDays.module.scss';

type NextDaysProps = {};

const NextDays: React.FC<NextDaysProps> = () => {
  const days = [1, 2, 3, 4, 5];
  return (
    <div className="p-3">
      <Row className="justify-content-around">
        {days.map(day => (
          <DayPrevision key={day} />
        ))}
      </Row>
      <h1 className="mt-4">Today's Hightlights</h1>
      <Row className="justify-content-around">
        {/* WIND */}
        <Col xs={12} md={5} className="blueBack p-3 my-3 d-flex flex-column justify-content-around align-items-center">
          <p>Wind status</p>
          <h2>
            <span className={classes.number}>7</span>mph
          </h2>
          <div className="d-flex align-items-center">
            <div className={`${classes.windDirection} d-flex align-items-center justify-content-center`}>
              <BsCursorFill />
            </div>
            <p className="mb-0 ms-2">NNW</p>
          </div>
        </Col>
        {/* HUMIDITY */}
        <Col xs={12} md={5} className="blueBack p-3 my-3 d-flex flex-column justify-content-around ">
          <p className="text-center">Humidity</p>
          <h2 className="text-center">
            <span className={classes.number}>93</span>%
          </h2>
          <div className="d-flex justify-content-between opacity-50">
            <span>0</span>
            <span>50</span>
            <span>100</span>
          </div>
          <ProgressBar now={50}></ProgressBar>
          <span className="opacity-50 text-end">%</span>
        </Col>
        {/* VISIBILITY */}
        <Col xs={12} md={5} className="blueBack p-3 my-3 d-flex flex-column justify-content-around align-items-center">
          <p>Visibility</p>
          <h2>
            <span className={classes.number}>9.3</span> miles
          </h2>
        </Col>
        {/* AIR PRESSURE */}
        <Col xs={12} md={5} className="blueBack p-3 my-3 d-flex flex-column justify-content-around align-items-center">
          <p>Air Pressure</p>
          <h2>
            <span className={classes.number}>1021</span> mb
          </h2>
        </Col>
      </Row>
    </div>
  );
};

export default NextDays;
