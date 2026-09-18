import {Link} from 'react-router-dom'
import {Store,ShoppingCart,User} from 'lucide-react'
function Navbar({search,setSearch}){
    return(
        <div className='navbar'>
            <div className='solom'>
            <span> <Store/> </span>
            <h1>Solom Store</h1>
            </div>
            <nav>
            <Link to="">Home</Link>
            <Link to="/products">Products</Link>
            </nav>
            <div className='search'>
                <input type="search" placeholder='Search For products' className='input' onChange={(e)=>setSearch(e.target.value)} value={search}/>
                <ShoppingCart/>
                <User/>
            </div>
        </div>
    )
}
export default Navbar