import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';
// Icons
import { BsCursorFill } from 'react-icons/bs';
// Style
import classes from './Hightlights.module.scss';
// Type
import { Weather } from '../App';

type Props = {
  weather: Weather;
};

const Hightlights: React.FC<Props> = props => {
  const weather = props.weather.current;

  const degToCompass = (deg: number) => {
    var val = Math.floor(deg / 22.5 + 0.5);
    var arr = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
    return arr[val % 16];
  };

  const windDir = degToCompass(weather.wind_deg);

  return (
    <div>
      <h1 className="mt-4 px-3">Today's Hightlights</h1>
      <Row className="justify-content-around">
        {/* WIND */}
        <Col xs={12} md={5} className="blueBack p-3 my-3 d-flex flex-column justify-content-around align-items-center">
          <p>Wind status</p>
          <h2>
            <span className={classes.number}>{Math.round(weather.wind_speed)}</span>mps
          </h2>
          <div className="d-flex align-items-center">
            <div className={`${classes.windDirection} d-flex align-items-center justify-content-center`}>
              <BsCursorFill style={{ transform: `rotate(${weather.wind_deg - 45}deg)` }} />
            </div>
            <p className="mb-0 ms-2">{windDir}</p>
          </div>
        </Col>
        {/* HUMIDITY */}
        <Col xs={12} md={5} className="blueBack p-3 my-3 d-flex flex-column justify-content-around ">
          <p className="text-center">Humidity</p>
          <h2 className="text-center">
            <span className={classes.number}>{weather.humidity}</span>%
          </h2>
          <div className="d-flex justify-content-between opacity-50">
            <span>0</span>
            <span>50</span>
            <span>100</span>
          </div>
          <ProgressBar now={weather.humidity}></ProgressBar>
          <span className="opacity-50 text-end">%</span>
        </Col>
        {/* VISIBILITY */}
        <Col xs={12} md={5} className="blueBack p-3 my-3 d-flex flex-column justify-content-around align-items-center">
          <p>Visibility</p>
          <h2>
            <span className={classes.number}>{weather.visibility}</span> meters
          </h2>
        </Col>
        {/* AIR PRESSURE */}
        <Col xs={12} md={5} className="blueBack p-3 my-3 d-flex flex-column justify-content-around align-items-center">
          <p>Air Pressure</p>
          <h2>
            <span className={classes.number}>{weather.pressure}</span> hPa
          </h2>
        </Col>
      </Row>
    </div>
  );
};

export default Hightlights;
