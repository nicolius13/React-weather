import Row from 'react-bootstrap/Row';

// Components
import DayPrevision, { Day } from './ui/DayPrevision';

import { Weather } from '../App';

type NextDaysProps = {
  weather: Weather;
};

const NextDays: React.FC<NextDaysProps> = props => {
  const weather = props.weather;
  const days: Day[] = weather.daily;

  return (
    <div className="p-3">
      <Row className="justify-content-around">
        {days.map((day: Day, i) => (
          <DayPrevision day={day} dayIndex={i + 1} key={`day-${i}`} />
        ))}
      </Row>
    </div>
  );
};

export default NextDays;
