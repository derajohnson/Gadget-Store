import React, {Component} from 'react';
import {connect} from 'react-redux';
import {phoneLists} from '../product-lists';
import {addToCart} from '../actions/cartActions';
import './Products.css';

class Phone extends Component {
  handleClick = id => {
    this.props.addToCart (id);
  };

  render () {
    let listedItems = phoneLists.map (item => (
      <div className="product" key={item.id}>
        <img classname='product-img' src={item.imgSrc} alt={item.productName} />
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
        <h3 className="category-name">PHONES</h3>
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

export default connect (null, mapDispatchToProps) (Phone);
