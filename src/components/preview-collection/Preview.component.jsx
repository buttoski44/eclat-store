import React from "react";
import  Collectionitem  from "../collection-items/Collectionitem.component";
import "./preview.styles.scss";

const Preview = ({title, items}) =>{
    return(
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {
                    items.filter(( item, idx) => idx < 4).map((items) => (<Collectionitem key={items.id} item={items}/>))
                }
            </div>
        </div>
    )
}

export default Preview;