import './App.css';
import Navi from './Navi.js'; // class
import Categorylist from './CategoryList'; // class
import Productlist from './ProductList'; // class

function App() {
  return (
    <div>
      <Navi></Navi>
      <Categorylist></Categorylist>
      <Productlist></Productlist>
    </div>
  );
}

export default App;
