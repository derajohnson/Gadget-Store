import React, {Component} from 'react';
import {consoleLists} from '../product-lists';
import {addToCart} from '../actions/cartActions';
import {connect} from 'react-redux';
import './Products.css';

class Console extends Component {
  handleClick = id => {
    this.props.addToCart (id);
  };
  render () {
    let listedItems = consoleLists.map (item => (
      <div className="product" key={item.id}>
        <img src={item.imgSrc} alt={item.productName} />
        <h4>{item.productName}</h4>
        <p>${item.productPrice}</p>
        <p>
          <i className="fa fa-star" />
          <span><i className="fa fa-star" /></span>
          <span><i className="fa fa-star" /></span>
          <span><i className="fa fa-star" /></span>
          <span><i className="fa fa-star-o" /></span>
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
        <h3 className="category-name">CONSOLES</h3>
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

export default connect (null, mapDispatchToProps) (Console);
