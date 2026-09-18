function Saidbar({selectedCategory,onSelectedCategory}){
    return(
        <div className="side">
            <div className="cate">
            <h1>Categories</h1>
            </div>
            <div className="filter">
            <button  className={selectedCategory==="All Categories"? "active":""} onClick={()=>onSelectedCategory("All Categories")} >All Categories</button>
            <button  className={selectedCategory==="beauty"? "active":""} onClick={()=>onSelectedCategory("beauty")}>Beauty</button>
            <button  className={selectedCategory==="fragrances"? "active":""} onClick={()=>onSelectedCategory("fragrances")}>Fragrances</button>
            <button  className={selectedCategory==="furniture"? "active":""}  onClick={()=>onSelectedCategory("furniture")}>Furniture</button>
            <button  className={selectedCategory==="groceries"? "active":""} onClick={()=>onSelectedCategory("groceries")}>Groceries</button>
            <button  className={selectedCategory==="laptops"? "active":""} onClick={()=>onSelectedCategory("laptops")}>Electronics</button>
            <button  className={selectedCategory==="mens-shirts"? "active":""} onClick={()=>onSelectedCategory("mens-shirts")}>Mens Shirts</button>
            <button  className={selectedCategory==="mens-shoes"? "active":""} onClick={()=>onSelectedCategory("mens-shoes")}>Mens Shoes</button>
            <button  className={selectedCategory==="mens-watches"? "active":""} onClick={()=>onSelectedCategory("mens-watches")}>Mens Watches</button>
            </div>
        </div> 
    )
}
export default Saidbar