import React from "react";
import SHOP_DATA from "./shop.data.js";
import Preview from "../../components/preview-collection/Preview.component.jsx";

 


class Shop extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            collections : SHOP_DATA
        };
    }

    render(){
        const {collections} = this.state;
        return (
            <div className="shop-page">
                {
                collections.map(({id, ...otherCollection}) => (<Preview key={id} {...otherCollection} />))
                }
            </div>
        )
    
    }
}

export default Shop;