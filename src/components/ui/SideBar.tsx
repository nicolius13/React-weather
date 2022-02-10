import { useState } from 'react';

import OffCanvas from 'react-bootstrap/OffCanvas';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
// Icons
import { BsChevronRight } from 'react-icons/bs';
// Style
import classes from './SideBar.module.scss';

type props = {
  show: boolean;
  onHide: () => void;
};

const SideBar: React.FC<props> = props => {
  const [recentSearch, setRecentSearch] = useState([
    {
      latt_long: '50.848381,4.349680',
      location_type: 'City',
      title: 'Brussels',
      woeid: 968019,
    },
    {
      latt_long: '13.753330,100.504822',
      location_type: 'City',
      title: 'Bangkok',
      woeid: 1225448,
    },
    {
      latt_long: '51.506321,-0.12714',
      location_type: 'City',
      title: 'London',
      woeid: 44418,
    },
  ]);

  return (
    <OffCanvas show={props.show} className="blueBack" onHide={props.onHide}>
      <OffCanvas.Header closeButton closeVariant="white">
        <OffCanvas.Title>Search</OffCanvas.Title>
      </OffCanvas.Header>
      <OffCanvas.Body>
        <Form>
          <Form.Group>
            <InputGroup>
              <Form.Control type="text" />
              <Button variant="outline-primary">Search</Button>
            </InputGroup>
          </Form.Group>
        </Form>
        {recentSearch.map(el => (
          <div
            className={`${classes.recentSearch} my-2 d-flex align-items-center justify-content-between`}
            key={el.woeid}
          >
            <p className="mb-0">{el.title}</p>
            <BsChevronRight className={classes.chevron} />
          </div>
        ))}
      </OffCanvas.Body>
    </OffCanvas>
  );
};

export default SideBar;
