import { useContext } from 'react';
// Hook
import { useTemp } from './../hooks/useTemp';
// Context
import TempContext from '../store/tempContext';
// Helper
import getDate from '../helpers/getDate';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import iconCode from '../assets/iconCode';
// Style
import classes from './Today.module.scss';
// Types
import { Weather } from '../App';
import { Geoloc } from './ui/SideBar';

type IconCodeKey = keyof typeof iconCode;

type props = {
  weather: Weather;
  location: Geoloc;
};

const Today: React.FC<props> = props => {
  const weather = props.weather.current;

  const tempCtx = useContext(TempContext);

  const temp = useTemp(weather.temp);

  const imgKey = weather.weather[0].icon as IconCodeKey;
  const img = iconCode[imgKey];

  const date = getDate(0);

  return (
    <Row>
      <Col className={`text-center d-flex ${classes.iconCol}`} xs={12}>
        <Image className="m-auto" src={require(`../assets/icons/${img}`)} />
      </Col>
      <Col className="text-center">
        <h1 className={classes.temp}>
          {temp}
          <span className={classes.tempDeg}>°{tempCtx.tempType}</span>
        </h1>
        <h2 className="opacity-75 fs-2">{weather.weather[0].description}</h2>
        <p className="mb-0 opacity-50">Today . {date}</p>
        <p className="opacity-50">{props.location ? props.location.name : ''}</p>
      </Col>
    </Row>
  );
};

export default Today;
