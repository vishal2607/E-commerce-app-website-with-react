import { useEffect, useState } from "react"
import { Outlet,Link,NavLink } from "react-router-dom"



function Layout(){

    const [featured,setfeatured] = useState([])



    useEffect(()=>{
fetch(`https://dummyjson.com/products?limit=4`).then(r=>r.json())
.then(data=>{
    console.log(data)
})
    },[])

return(<>
    <div className="navbar">
        <NavLink className={({isActive})=> isActive? 'active': ''} to={'/'}>Home</NavLink>
<NavLink className={({isActive})=> isActive? 'active': ''} to={'/shop'}>Shop</NavLink>
<NavLink  className={({isActive})=> isActive? 'active': ''} to={'/cart'}>Cart</NavLink>
<NavLink  className={({isActive})=> isActive? 'active': ''} to={'/wishlist'}>Wishlist</NavLink>
    </div>
<Outlet/>


</>)

}

export default Layout