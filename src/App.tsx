import { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Component
import Today from './components/Today';
import TempBtn from './components/ui/TempBtn';
import NextDays from './components/NextDays';
import SideBar from './components/ui/SideBar';

const App: React.FC = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <Container className="mainContainer" fluid>
        <Row className="mainRow">
          <Col className="py-4 no-gutters d-lg-flex blueBack" xs={12} lg={4} xl={3}>
            <Today onClick={() => setShow(true)} />
          </Col>
          <Col className="p-2 pt-3">
            <TempBtn />
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
