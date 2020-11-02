import './App.css';
import Navi from './Navi.js'; // class
import Categorylist from './CategoryList'; // class
import Productlist from './ProductList'; // class
import {Container, Row, Col} from 'reactstrap'; // Kullandığımız bootstrap özelliklerini buraya eklememiz gerekiyor.

function App() {
  let titleOfCategory = "Category list title with variable";
  let titleOfProduct = "Product list title with variable";

  // Yukardaki gibi tanımlamak yerine, aşağıdaki şekilde nesne olarak tanımlayıp her yeni bir özellik eklediğimizde tekrar tekrar değiştirilen yerlere giderek tanımlama yapmanın önüne geçmiş oluyoruz.
  
  let categoryInfo = {title: "CategoryListTitle"};
  let productInfo = {title: "ProductListTitle", anotherProductListThing: "Things"}; // Şimdi burada her yeni bir özellik eklediğimiz de bunu çağırdığımız yerde sadece productInfo yazmamız yeterli oluyor.
  // Bu kullanıma encapsulation(kapsülleme) deniyor.

  return (
    <div>
      <Container>
        <Row>
          <Navi />
        </Row>

        <Row>
          <Col xs="3">
            <Categorylist info={categoryInfo}/>
          </Col>
          <Col xs="9">
            <Productlist info={productInfo}/>
          </Col>
        </Row>
        
      </Container>
    </div>
  );
}

export default App;
