import React, {Component} from 'react';
import {laptopLists} from '../product-lists';
import {connect} from 'react-redux';
import {addToCart} from '../actions/cartActions';

import './Products.css';

class Laptop extends Component {
  handleClick = id => {
    this.props.addToCart (id);
  };
  render () {
    let listedItems = laptopLists.map (item => (
      <div className="product" key={item.id}>
        <img src={item.imgSrc} alt={item.productName} />
        <h4>{item.productName}</h4>
        <p>${item.productPrice}</p>
        <p>
          <i className="fa fa-star" />
          <span><i className="fa fa-star" /></span>
          <span><i className="fa fa-star" /></span>
          <span><i className="fa fa-star" /></span>
          <span><i className="fa fa-star" /></span>
        </p>
        <button
          className="add-to-cart-btn"
          onClick={() => this.handleClick (item.id)}
        >
          Add To Cart
        </button>
      </div>
    ));
    return (
      <div>
        <h3 className="category-name">LAPTOPS</h3>
        <div className="product-content">
          {listedItems}

        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addToCart: id => {
      dispatch (addToCart (id));
    },
  };
};

export default connect (null, mapDispatchToProps) (Laptop);
