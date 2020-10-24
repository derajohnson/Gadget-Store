import React, {Component} from 'react';
import {
  incrementCount,
  decrementCount,
  deleteItem,
  checkOut,
} from '../actions/cartActions';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import './Purchases.css';

class Purchases extends Component {
  handleIncrement = id => {
    this.props.incrementCount (id);
  };

  handleDecrement = id => {
    this.props.decrementCount (id);
  };
  handleDelete = id => {
    this.props.deleteItem (id);
  };

  handleCheckout = () => {
    this.props.checkOut ();
  };

  render () {
    let items = this.props.addedItems.length !== 0
      ? <p>
          {this.props.addedItems.map (item => (
            <div>
              <div className="flex" key={item.id}>
                <div className="flex-item">
                  <p><span><img className='purchased-img' src={item.imgSrc} alt={item.productName}/></span> {item.productName}</p>
                </div>

                <div className="buttons flex-item-2">
                  <p>
                    <button
                      className="m-2"
                      onClick={() => this.handleIncrement (item.id)}
                    >
                      +
                    </button>
                    <span className="quantity">{item.quantity}</span>
                    <button
                      className="m-2"
                      onClick={() => {
                        this.handleDecrement (item.id);
                      }}
                    >
                      -
                    </button>
                    
                    <i
                      className="fa fa-trash"
                      onClick={() => this.handleDelete (item.id)}
                    />
                  </p>
                </div>
              </div>
            </div>
          ))}<hr />
        </p>
      : <p>Nothing to display <Link to="/">Go to Home Page</Link></p>;
    return (
      <div className="m-3">
        <h3>PURCHASES PAGE</h3>
        {items}
        <p>
          {this.props.price !== 0 &&
            <p>
              Total Bill:
              <span className="total-price-value"> ${this.props.price}</span>
              <p>
                <Link to="/">
                  <button
                    className="checkout"
                    onClick={() => this.handleCheckout ()}
                  >
                    Checkout

                  </button>
                </Link>
              </p>
            </p>}
        </p>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    addedItems: state.purchases.addedItems,
    price: state.purchases.total,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    incrementCount: id => {
      dispatch (incrementCount (id));
    },
    decrementCount: id => {
      dispatch (decrementCount (id));
    },
    deleteItem: id => {
      dispatch (deleteItem (id));
    },
    checkOut: () => {
      dispatch (checkOut ());
    },
  };
};

export default connect (mapStateToProps, mapDispatchToProps) (Purchases);
