import React from "react";
import { Button } from "../button/Button.component";
import "./cart-dropdown.styles.scss";
import Cartitem from "../cart-item/Cartitem.component";
import { connect } from "react-redux";

const Dropdown = ({cartItems}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
        {
            cartItems.map(cartItem =><Cartitem key={cartItem.id} item={cartItem}/>)
        }
        </div>
        <Button>GO TO CHECKOUT </Button>
    </div>
)

const mapStateToProps = ({cart:{cartItems}}) =>({
    cartItems
})

export default connect(mapStateToProps)(Dropdown);