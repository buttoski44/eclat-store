import React, { Children } from "react";

import "./button.styles.scss";

export const Button = ({children, isGoogle, ...otherprops}) =>{
    return (
        <button className={isGoogle ? `custom-button google ` : "custom-button"} {...otherprops}>{children}</button>
    )
}