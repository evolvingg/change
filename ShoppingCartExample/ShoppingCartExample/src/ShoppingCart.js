import React from 'react';
import products from './data/products';

import ProductList from './ProductList';
import CartSummary from './CartSummary';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart=this.removeFromCart.bind(this);
    this.state = {
      productList: products,
      cartItems: []
    }
  }

  addToCart(id) {
    var productList = this.state.productList.slice(0).map(product => Object.assign({}, product));
    var cartItems = this.state.cartItems.slice(0).map(item => Object.assign({}, item));
     console.log(productList);
    var product = productList.find(product => product.id === id);
    product.isAddedToCart = true;
    console.log($r);
    cartItems.push(product);
    console.log(cartItems);
    this.setState({
      productList,
      cartItems
    });
  }

  removeFromCart(id) {
    var productList = this.state.productList.slice(0).map(product => Object.assign({}, product));
    var cartItems = this.state.cartItems.slice(0).map(item => Object.assign({}, item));
    var index,product;
    var cartItemRemove = cartItems.find(cartItemRemove => cartItemRemove.id === id);
    product=productList.find(product => product.id === id);
    index=cartItems.indexOf(cartItemRemove);
    if(index>-1)
    {
      cartItems.splice(index, 1);
      product.isAddedToCart=false;
      console.log(cartItems);
      console.log(product);
    }
    this.setState({
      productList,
      cartItems
    });

  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>{this.props.headerText}</h1>
          </div>
        </div>
        <ProductList
          productList={this.state.productList}
          addToCart={this.addToCart}
        />
        <CartSummary
          cartItems={this.state.cartItems}
        />
      </div>
    );
  }
}

export default ShoppingCart;
