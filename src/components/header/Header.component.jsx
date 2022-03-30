import React from "react";
import {Link} from "react-router-dom";
import { ReactComponent as Logo } from "./crown.svg";
import "./header.styles.scss";
import {auth} from "./../../firebase/firebase.utils";

export const Header = ({currentUser}) =>{
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
                    currentUser ? <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div> : <Link className="option" to="/sign">SIGN IN</Link>
                }
            </div>
        </div>
        
    )
}