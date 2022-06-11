

import React from 'react';


const ItemList =(props)=>{
  return(
    <div>
    <p>Display all items</p>
    <li>
    {props.item.itemname} : {props.item.quantity}
    </li>
    </div>
  )

}

export default ItemList