import React from "react";
import Signin from "../../components/signin/Signin.component";
import Signup from "../../components/signup/Signup.component";
import "./sign.styles.scss";


export const Sign = () =>{
    return(
        <div className="sign">
            <Signin className="pad"/>
            <Signup className="pad"/>
        </div>
    )
}