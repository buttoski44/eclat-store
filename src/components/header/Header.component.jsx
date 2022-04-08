import React from "react";
import { ReactComponent as Logo } from "./crown.svg";
import "./header.styles.scss";
import {auth} from "./../../firebase/firebase.utils";
import {Link} from "react-router-dom";
import { connect } from "react-redux";
import  Carticon  from "../cart-icon/Carticon.component";
import  Dropdown  from "../cart-dropdown/Dropdown.styles";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

const Header = ({currentUser, hidden}) =>{
    return(
        <div className="header">
            <span className="logo-container">
                <Logo className="logo"/>
            </span>
            <div className="options">
                <Link className="option" to="/">HOME</Link>
                <Link className="option" to="/shop">SHOP</Link>
                <Link className="option" to="/contact">CONTACT</Link>
                {
                    currentUser ? 
                    <div 
                    className="option" 
                    onClick={() => auth.signOut()}>SIGN OUT</div> : <Link
                    className="option" 
                    to="/sign">SIGN IN</Link>
                }
                <Carticon className="option"/>
            </div>  
            {hidden ? null : <Dropdown/>}
        </div>
        
    )
}

// const mapStateToProps = state =>({
//     currentUser: selectCurrentUser(state), 
//     hidden : selectCartHidden(state)
// });
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser, 
    hidden : selectCartHidden
});

export default connect(mapStateToProps)(Header);
