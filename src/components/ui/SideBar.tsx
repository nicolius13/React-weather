import { FormEvent, useRef, useState } from 'react';
import { getWeather, getGeoLoc } from '../../api/weather';

import OffCanvas from 'react-bootstrap/OffCanvas';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
// Icons
import { BsChevronRight } from 'react-icons/bs';
// Style
import classes from './SideBar.module.scss';
import { Weather } from '../../App';

export type Geoloc = {
  name: string;
  lat: number;
  lon: number;
  country: string;
};

type props = {
  show: boolean;
  onHide: () => void;
  onWeatherChange: (weather: Weather, loc: Geoloc) => void;
  onError: (text: string) => void;
};

const SideBar: React.FC<props> = props => {
  const searchInput = useRef() as React.MutableRefObject<HTMLInputElement>;
  const [valid, setValid] = useState(true);

  const [recentSearch, setRecentSearch] = useState([
    {
      name: 'City of Brussels',
      lat: 50.8430448,
      lon: 4.4256732,
      country: 'BE',
    },
    {
      name: 'Bangkok',
      lat: 13.75333,
      lon: 100.504822,
      country: 'TH',
    },
    {
      name: 'London',
      lat: 51.506321,
      lon: -0.12714,
      country: 'UK',
    },
  ]);

  const updateRecentSearch = (loc: Geoloc) => {
    if (!recentSearch.some(el => el.name === loc.name)) {
      setRecentSearch(prev => [loc, ...prev]);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const searchText = searchInput.current.value;
    if (searchText) {
      const loc = await getGeoLoc(searchText);
      if (loc) {
        updateRecentSearch(loc);
        const weather = await getWeather(loc.lat, loc.lon);
        props.onWeatherChange(weather, loc);
        props.onHide();
      } else {
        setValid(false);
        props.onError('Location not found try another place');
      }
    } else {
      setValid(false);
      props.onError('We need a place to start searching');
    }
  };

  const hanldePreviousSearch = async (loc: Geoloc) => {
    const weather = await getWeather(loc.lat, loc.lon);
    props.onWeatherChange(weather, loc);
    props.onHide();
  };

  const handleHide = () => {
    setValid(true);
    props.onHide();
  };

  return (
    <OffCanvas show={props.show} className="blueBack" backdrop={false} onHide={handleHide}>
      <OffCanvas.Header closeButton closeVariant="white">
        <OffCanvas.Title>Search</OffCanvas.Title>
      </OffCanvas.Header>
      <OffCanvas.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <InputGroup>
              <Form.Control type="text" ref={searchInput} isInvalid={!valid} onChange={() => setValid(true)} />
              <Button type="submit" variant="outline-primary">
                Search
              </Button>
            </InputGroup>
          </Form.Group>
        </Form>
        {recentSearch.map((el, i) => (
          <div
            className={`${classes.recentSearch} my-2 d-flex align-items-center justify-content-between`}
            key={`loc-${i}`}
            onClick={() => hanldePreviousSearch(el)}
          >
            <p className="mb-0">{el.name}</p>
            <BsChevronRight className={classes.chevron} />
          </div>
        ))}
      </OffCanvas.Body>
    </OffCanvas>
  );
};

export default SideBar;
