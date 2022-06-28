import React from "react";
import { Link } from "react-router-dom";
import { BsFillBagFill } from "react-icons/bs";

const Nav = () => {
  return (
    <div className="nav">
      <div className="container">
        <div className="nav_container">
          <div className="nav_left">left</div>
          <div className="nav_right">
            <Link to="/cart">
              <div className="basket">
                <BsFillBagFill className="cart_icon" />
                <span>4</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
