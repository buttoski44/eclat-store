import React from "react";

import "./form-input.styles.scss"

export const Forminput = ({handleChange , label , ...otherprops}) => {
    return(
        <div className="group">
            <input className="form-input" onChange={handleChange} {...otherprops}/>
            {
                label ? <label className={`form-input-label ${otherprops.value.length ? "shrink" : ""} `}>{label}</label> : null
            }
                    
        </div>
    )
}