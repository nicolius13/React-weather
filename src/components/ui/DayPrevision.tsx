import { useContext } from 'react';

import TempContext from '../../store/tempContext';
import { useTemp } from './../../hooks/useTemp';
import getDate from '../../helpers/getDate';

import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

// Images
import iconCode from '../../assets/iconCode';

type IconCodeKey = keyof typeof iconCode;
export type Day = {
  weather: { icon: string }[];
  temp: { min: number; max: number };
  dt: number;
};
type Props = {
  day: Day;
  dayIndex: number;
};

const DayPrevision: React.FC<Props> = props => {
  const tempCtx = useContext(TempContext);
  const day = props.day;

  const imgKey = day.weather[0].icon as IconCodeKey;
  const img = iconCode[imgKey];

  const minTemp = useTemp(day.temp.min);
  const maxTemp = useTemp(day.temp.max);

  const date = props.dayIndex === 1 ? 'Tomorow' : getDate(props.dayIndex);

  return (
    <Col className="d-flex flex-column justify-content-between blueBack p-3" xs={5} md={2}>
      <p className="text-center">{date}</p>
      <Image className="mb-2" src={require(`../../assets/icons/${img}`)} fluid />
      <Row>
        <Col>
          <p className="mb-0 text-center">
            {minTemp} °{tempCtx.tempType}
          </p>
        </Col>
        <Col>
          <p className="mb-0 text-center">
            {maxTemp} °{tempCtx.tempType}
          </p>
        </Col>
      </Row>
    </Col>
  );
};

export default DayPrevision;
