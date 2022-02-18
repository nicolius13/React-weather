import { useEffect, useState } from 'react';
import { getWeather, getLocation } from './api/weather';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
// Component
import Today from './components/Today';
import TempBtn from './components/ui/TempBtn';
import NextDays from './components/NextDays';
import SideBar, { Geoloc } from './components/ui/SideBar';
// Types
import { Day } from './components/ui/DayPrevision';
import Hightlights from './components/Hightlights';

export type Weather = {
  current: {
    temp: number;
    wind_speed: number;
    wind_deg: number;
    humidity: number;
    visibility: number;
    pressure: number;
    weather: { description: string; icon: string }[];
  };
  daily: Day[];
};

const App: React.FC = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [errorText, setErrorText] = useState('oops an error occured');
  const [weather, setWeather] = useState<Weather | null>(null);
  const [location, setLocation] = useState<Geoloc | null>(null);

  useEffect(() => {
    // ask for the geolocalisation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async pos => {
          const lat = pos.coords.latitude;
          const lng = pos.coords.longitude;
          // search the area given by the geoloc
          const weath = await getWeather(lat, lng);
          setWeather(weath);

          const loc = await getLocation(lat, lng);
          setLocation(loc);
        },
        () => {
          // denied geoloc
          handleLocationError(true);
          // if it's at start-up and fail => get brussels weather
          getWeather(4.4291, 50.8439);
          setLocation({
            name: 'Bruxelles',
            lat: 50.8430448,
            lon: 4.4256732,
            country: 'BE',
          });
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

  const updateWeather = (weather: Weather, loc: Geoloc) => {
    setWeather(weather);
    setLocation(loc);
  };

  const handleError = (text: string) => {
    setErrorText(text);
    setShowToast(true);
  };

  return (
    <div className="App">
      <Container className="mainContainer" fluid>
        <Row className="mainRow">
          <Col className="py-4 no-gutters d-lg-flex blueBack" xs={12} lg={4} xl={3}>
            {weather && location ? (
              <Today weather={weather} location={location} onClick={() => setShowSideBar(true)} />
            ) : (
              <Row className="full-height align-items-center">
                <Col className="text-center">
                  <Spinner className="spin" animation="border"></Spinner>
                </Col>
              </Row>
            )}
          </Col>
          <Col className="p-3">
            <TempBtn />
            {weather ? (
              <NextDays weather={weather} />
            ) : (
              <Row className="full-height align-items-center">
                <Col className="text-center">
                  <Spinner className="spin" animation="border"></Spinner>
                </Col>
              </Row>
            )}
            {weather ? <Hightlights weather={weather} /> : null}
          </Col>
          {/* SIDEBAR */}
          <SideBar
            show={showSideBar}
            onHide={() => setShowSideBar(false)}
            onWeatherChange={updateWeather}
            onError={handleError}
          />
        </Row>
        <ToastContainer position="top-end">
          <Toast show={showToast} autohide={true} bg="danger" onClose={() => setShowToast(false)}>
            <Toast.Header>
              <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
              <strong className="me-auto">An error occured!</strong>
            </Toast.Header>
            <Toast.Body>{errorText}</Toast.Body>
          </Toast>
        </ToastContainer>
      </Container>
    </div>
  );
};

export default App;
