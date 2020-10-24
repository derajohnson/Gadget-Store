import React, {Component} from 'react';
import Phone from './Phone';
import Headphone from './Headphone';
import Laptop from './Laptop';
import Console from './Console';
import './Products.css';

class Product extends Component {
  render () {
    return (
      <div>
        <h3 className="popular-devices-text">POPULAR DEVICES</h3>
        <Phone />
        <Headphone />
        <Laptop />
        <Console />
      </div>
    );
  }
}

export default Product;
