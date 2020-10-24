import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import {connect} from 'react-redux';

const Navbar = ({count}) => {
  return (
    <div>
      <nav className="navbar">
        <div className="brand-name">
          <h2><Link to="/">My<span>Gadgets</span></Link></h2>
        </div>
        <div className="shopping-bag-icon">
          <h2>
            <Link to="/purchases"><i className="fa fa-shopping-bag" /></Link>
          </h2>
          <p className="count">{count}</p>

        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    count: state.purchases.count,
  };
};

export default connect (mapStateToProps) (Navbar);
