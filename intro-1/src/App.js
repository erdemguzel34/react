import './App.css';
import Navi from './Navi.js'; // class
import Categorylist from './CategoryList'; // class
import Productlist from './ProductList'; // class
import {Container, Row, Col} from 'reactstrap'; // Kullandığımız bootstrap özelliklerini buraya eklememiz gerekiyor.
import ExerciseForReactstrap from './ExerciseForReactstrap';

function App() {
  return (
    <div>
      <Container>
        <Row>
          <Navi />
        </Row>

        <Row>
          <Col xs="3">
            <Categorylist />
          </Col>
          <Col xs="9">
            <Productlist />
          </Col>
        </Row>
        
      </Container>
    </div>
  );
}

export default App;
