import {ShoppingCart} from 'lucide-react'
import { useState } from 'react'
function Detalis({product,onBack,addToCart}){
      const[count,setCount]=useState(1)
      function handelClick(){
        setCount(count+1)
      }
      function removeClick(){
        if(count>1){
        setCount(count-1)
        }}
    return(
        <div className="deat">
                <div className="detalis" key={product.id}>
                    <div className="img">
                         <img src={product.thumbnail} alt={product.title}/>
                    </div>
                    <div className="script">
                        <h1>{product.title}</h1>
                        <h2>${product.price}</h2>
                        <p>{product.description}</p>
                        <button onClick={removeClick}>-</button>
                        <p>{count}</p>
                        <button onClick={handelClick} >+</button>
                        <button className='add' onClick={()=>addToCart(product,count)}> <ShoppingCart/> Add to Cart</button>
                        <button onClick={onBack}>Back</button>
                    </div>
                </div>
        </div>
    )
}
export default Detalis