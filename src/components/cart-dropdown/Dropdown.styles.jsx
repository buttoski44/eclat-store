import React from "react";
import { Button } from "../button/Button.component";
import { useNavigate } from "react-router-dom";
import "./cart-dropdown.styles.scss";
import Cartitem from "../cart-item/Cartitem.component";
import { connect } from "react-redux";
import {selectCartItems} from "../../redux/cart/cart.selectors"
import {toggleCartHidden} from "../../redux/cart/cart.actions.js"

const Dropdown = ({cartItems,dispatch}) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/checkout");
    }

    return (
    <div className="cart-dropdown">
        <div className="cart-items">
        {
            cartItems.length ? cartItems.map(cartItem =><Cartitem key={cartItem.id} item={cartItem}/>) :
            <span className="empty-message">Your Cart Is Empty </span>   
        }
        </div>
        <Button onClick={() => {
            handleClick(); 
            dispatch(toggleCartHidden())
        }}>GO TO CHECKOUT </Button>
    </div>
    )
    
}    

const mapStateToProps = state =>({
    cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(Dropdown); 