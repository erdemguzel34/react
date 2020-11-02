import './App.css';
import ReactstrapComponents from './Reactstrap_components';
import {Container, Row, Col} from 'reactstrap';
import Dismissing from './Dismissing';

function App() {
  return (
    <div>
      <Container className="mt-5">
        <Row>
          <Col xs="12">
            <ReactstrapComponents />
          </Col>
            <Dismissing.js />
        </Row>
      </Container>
    </div>
  );
}

export default App;
