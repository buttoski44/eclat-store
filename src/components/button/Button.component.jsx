import React, { Children } from "react";

import "./button.styles.scss";

export const Button = ({children, isGoogle,  inverted, ...otherprops}) =>{
    return (
        <button className={`${inverted ? "inverted" : ""} ${isGoogle ? "google" : ""} custom-button` } {...otherprops}>{children}</button>
    )
}