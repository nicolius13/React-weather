import { useEffect, useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// Component
import Today from './components/Today';
import TempBtn from './components/ui/TempBtn';
import NextDays from './components/NextDays';
import SideBar from './components/ui/SideBar';

// TESTING
import testRes from './assets/res.js';

// Types
export type Weather = {
  weather: { description: string; icon: string }[];
  main: { temp: number };
  name: string;
} | null;

const App: React.FC = () => {
  const [show, setShow] = useState(false);
  const [tempType, setTempType] = useState('cel');
  const [todayWeather, setTodayWeather] = useState<Weather>(null);

  const apiKey = '60eb3e8bdb2d085deb038fde4091c6d9';

  useEffect(() => {
    // ask for the geolocalisation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        pos => {
          const lat = pos.coords.latitude;
          const lng = pos.coords.longitude;
          // search the area given by the geoloc
          getWeather(lat, lng);
        },
        () => {
          // denied geoloc
          handleLocationError(true);
          // if it's at start-up and fail => get brussels weather
          getWeather(4.4291, 50.8439);
        }
      );
    }
  }, []);

  // open a modal if the geoloc is refuse or not supported
  const handleLocationError = (browserHasGeoloc: boolean) => {
    if (browserHasGeoloc) {
      window.alert(
        "The Geolocation service failed. You can search for specific cities by clicking 'Search for places' button."
      );
    } else {
      window.alert(
        "Your browser doesn't support geolocation. You can search for specific cities by clicking 'Search for places' button."
      );
    }
  };

  const getWeather = (lat: number, lng: number) => {
    // Local test
    setTodayWeather(testRes);
    // fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}`)
    //   .then(res => {
    //     return res.json();
    //   })
    //   .then(data => {
    //     setTodayWeather(data);
    //   });
  };

  return (
    <div className="App">
      <Container className="mainContainer" fluid>
        <Row className="mainRow">
          <Col className="py-4 no-gutters d-lg-flex blueBack" xs={12} lg={4} xl={3}>
            <Today weather={todayWeather} tempType={tempType} onClick={() => setShow(true)} />
          </Col>
          <Col className="p-2 pt-3">
            <TempBtn onClick={type => setTempType(type)} />
            <NextDays />
          </Col>
          {/* SIDEBAR */}
          <SideBar show={show} onHide={() => setShow(false)} />
        </Row>
      </Container>
    </div>
  );
};

export default App;
