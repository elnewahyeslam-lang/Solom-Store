import { useEffect, useState } from "react"
import {ShoppingCart} from 'lucide-react'
import Detalis from "./Detalis"
import Cart from "./Cart"
function Product({selectedCategory,search}){
    const[showPage,setShowPage]=useState(null)
    const[data,setData]=useState([])
      const[cart,setCart]=useState([])
      const[showCart,setShowCart]=useState(false)
    useEffect(()=>{
        fetch("https://dummyjson.com/products?limit=100")
        .then(res=>res.json())
        .then(data=>setData(data.products))
    },[])
    
    const addToCart=(product,qty)=>{
        const exist=cart.find((item)=>item.id===product.id)
        if(exist){
            setCart(cart.map((item)=>item.id===product.id?{...item,qty:item.qty+qty}:item))
        }else{
            setCart([...cart,{...product,qty}])
        }
    }
    const safeSearch=(search||"").toLowerCase();
    const filteredData=!selectedCategory||selectedCategory==="All Categories"? data.filter(p=>p.title.toLowerCase().includes(safeSearch))
    :data.filter(p=>p.category===selectedCategory && p.title.toLowerCase().includes(safeSearch))
    
    if(data.length===0){
        return(
        <h2 className="loading">Loading...</h2>);
    }
    if(showPage){
        return(
        <Detalis product={showPage} onBack={()=>setShowPage(null)} addToCart={addToCart}/>)


    }
    if(showCart){
        return(
            <Cart cart={cart} setCart={setCart} onBack={()=>setShowCart(false)}/>)
    }
    return(
        <>
        <div>
              <button className="back" onClick={()=>setShowCart(true)}>Cart({cart.reduce((s,i)=>s+i.qty,0)})</button>
        </div>
        <div className="products">
          
            {filteredData.map(product=>(
                <div key={product.id} className="product">
                    <img src={product.thumbnail} alt={product.title}/>
                    <h1>{product.title}</h1>
                    <h2>${product.price}</h2>
                    <button onClick={()=>setShowPage(product)}> <ShoppingCart/></button>
                </div>
            ))}
        </div>
        </>
    )
}
export default Product