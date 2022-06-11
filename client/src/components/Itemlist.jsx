

import React from 'react';


const ItemList =(props)=>{
  return(
    <div>
    <li>
    {props.item.itemname} : {props.item.quantity}
    </li>
    </div>
  )

}

export default ItemList