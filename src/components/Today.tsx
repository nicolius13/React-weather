import { useMemo } from 'react';

import iconCode from '../assets/iconCode';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
// Icon
import { BiCurrentLocation } from 'react-icons/bi';
// Style
import classes from './Today.module.scss';
import { Weather } from '../App';

type IconCodeKey = keyof typeof iconCode;

type props = {
  weather: Weather;
  onClick: () => void;
  tempType: string;
};

const Today: React.FC<props> = props => {
  const weather = props.weather;

  const temp = useMemo(() => {
    const temp = weather ? weather.main.temp : 0;
    if (props.tempType === 'cel') {
      return Math.round(temp - 273.15);
    } else {
      return Math.round((temp - 273.15) * 1.8 + 32);
    }
  }, [props.tempType, weather]);

  // get the date format DD. DD MM
  const getDate = () => {
    const date = new Date();
    const day = date.getDate();
    const weekDay = dayOfWeek(date.getDay());
    const month = monthOfYear(date.getMonth());
    return `${weekDay}. ${day} ${month}`;
  };

  const dayOfWeek = (dayIndex: number) => {
    return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][dayIndex] || '';
  };
  // get the month of the year
  const monthOfYear = (monthIndex: number) => {
    return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'][monthIndex] || '';
  };
  const imgKey = weather ? (weather.weather[0].icon as IconCodeKey) : ('01d' as IconCodeKey);
  const img = iconCode[imgKey];

  const date = getDate();

  return (
    <Row>
      <Col xs={8}>
        <Button variant="secondary" onClick={props.onClick}>
          Search for places
        </Button>
      </Col>
      <Col className="text-end">
        <Button variant="secondary">
          <BiCurrentLocation />
        </Button>
      </Col>
      <Col className={`text-center d-flex ${classes.iconCol}`} xs={12}>
        <Image className="m-auto" src={require(`../assets/icons/${img}`)} />
      </Col>
      <Col className="text-center">
        <h1 className={classes.temp}>
          {temp}
          <span className={classes.tempDeg}>°{props.tempType === 'cel' ? 'C' : 'F'}</span>
        </h1>
        <h2 className="opacity-75 fs-2">{weather ? weather.weather[0].description : ''}</h2>
        <p className="mb-0 opacity-50">Today . {date}</p>
        <p className="opacity-50">{weather ? weather.name : ''}</p>
      </Col>
    </Row>
  );
};

export default Today;
