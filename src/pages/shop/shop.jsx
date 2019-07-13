import React from 'react';
import {SHOP_DATA} from './shop.data';
import {PreviewCollection} from '../../components/previewCollection/previewCollection'
class Shop extends React.Component{
    constructor(props){
        super()
        this.state={
            collections:SHOP_DATA
        }
    }
    render(){

        const {collections} = this.state;
        
        return(
        <div className="shop-page">
        {collections.map(({id, ...OtherProps}) => (
            <PreviewCollection key={id} {...OtherProps} />
        ))}
        </div>
        )
    }
}


export default Shop;