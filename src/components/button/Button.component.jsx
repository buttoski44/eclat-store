import React, { Children } from "react";

import "./button.styles.scss";

export const Button = ({Children, ...otherprops}) =>{
    return (
        <button className="custom-button" {...otherprops}>{Children}</button>
    )
}