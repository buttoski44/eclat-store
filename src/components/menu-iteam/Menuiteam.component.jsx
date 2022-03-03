import React from "react";
import "./menuiteam.styles.scss"; 

export const Menuiteam = ({size, imageUrl ,title}) => (
            <div style={{
                backgroundImage : `url(${imageUrl})`
                }} 
                className={`menu-item ${size} `}
            >
                <div className="content">
                    <h1 className="title">{title}</h1>
                    <span className="suntitle">SHOP NOW</span>
                </div>
            </div>     
)