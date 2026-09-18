function Cart({cart,setCart,onBack}){
    const total=cart.reduce((sum,item)=>sum+item.price * item.qty,0)
    const removeItem=(id)=>{
        setCart(cart.filter(item=>item.id !==id))
    }
    if(cart.length===0){
        return(
            <div className="cart">
                <h2> Your cart is empty</h2>
                <button onClick={onBack}>Back to Products</button>
            </div>
        )
    }
    return(
        <div className="cart">
            <button onClick={onBack}>Back</button>
            <h1>Cart {cart.length} items</h1>
            {cart.map(item=>(
                <div className="cart-item" key={item.id}>
                    <img src={item.thumbnail} alt={item.title}/>
                    <h3>{item.title}</h3>
                    <p>${item.price}x{item.qty}</p>
                    <p>${item.price * item.qty}</p>
                    <button onClick={()=>removeItem(item.id)}>Remove</button>
                </div>
            ))}
            <h2>Total:${total.toFixed(2)}</h2>
        </div>
    )
}
export default Cart