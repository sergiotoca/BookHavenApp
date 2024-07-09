import React from 'react'
import './RelatedProducts.css'
import { all_books } from '../Assets/MockupData.js'
import { Item } from '../Item/Item'

export const RelatedProducts = () => {
  return (
    <div className='relatedproduts'>
        <h1>Related Produts</h1>
        <hr />
        <div className="relatedproduts-item">
            {all_books.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
    </div>
  )
}
