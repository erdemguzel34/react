import './App.css';
import React, { Component } from 'react';
import Navi from './Navi.js'; // class
import Categorylist from './CategoryList'; // class
import Productlist from './ProductList'; // class
import {Container, Row, Col} from 'reactstrap'; // Kullandığımız bootstrap özelliklerini buraya eklememiz gerekiyor.

export default class App extends Component {

  state = {currentCategory:""}
  // return'ün içerisinde çağırdığımız currentCategory adında App'nin bir state'i var.
  // Bu Component'in data taşıyan değişkenidir.
  // Aşağıda aynı propt mantığı ile state'i geçiyoruz.
  // Biz bu state'i CategoryList'ten aldığımız için CategoryList'in altında props olarak çağrılmak zorundadır.

  // Hiyerarşik olarak eşit seviye olan component'ler arası data alışverişi yapılamadığı için ve şuanda pure react kullandığımız için bir üst konumdaki App'i class component'ine evrilttik ve changeCategory fonksiyonunu buraya çektik.
  // Amacımız CategoryList'ten bir elemana tıklandığında ProductList'e veri aktarabilmek.
  changeCategory = (category) => {
    this.setState({currentCategory:category.categoryName})
  };

  render() {
    // Eğer değişkenler fonksiyon içerisinde olmasaydı 'let' keyword'u kullanılamaz.
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
              <Categorylist currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={categoryInfo}/>
            </Col>
            <Col xs="9">
              <Productlist currentCategory={this.state.currentCategory} info={productInfo}/>
            </Col>
          </Row>
          
        </Container>
      </div>
    );
  }
}