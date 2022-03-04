import React from "react";
import "./menuiteam.styles.scss"; 
import {useNavigate} from "react-router-dom";

export const Menuiteam = ({size, imageUrl , title, linkUrl}) => {
    const navigate = useNavigate();
    return(
            <div className={`menu-item ${size} `} onClick={() =>(navigate(linkUrl))}>
                <div className="background-image" style={{backgroundImage : `url(${imageUrl})`}} ></div>    
                    <div className="content">
                        <h1 className="title">{title}</h1>
                        <span className="suntitle">SHOP NOW</span>
                    </div>
                
            </div>     
)}