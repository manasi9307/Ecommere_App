import React from 'react';

import './checkout-item.scss';

const CheckOutItem = ({cartItem:{name,imageUrl,price,quantity}}) => (
    <div className="checkout-item">
    <div className='image-container'>
     <img src={imageUrl} alt="item" />
    </div>
<span className="name">{name}</span>
<span className="quantity">{quantity}</span>
<span className="price{">{price}</span>
    <div className='remove-button'>

    </div>
</div>
)

export default CheckOutItem;