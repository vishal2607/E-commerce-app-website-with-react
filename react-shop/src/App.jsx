
import {BrowserRouter, Routes,Router,Route,Outlet,Link} from 'react-router-dom'
import { useState,useReducer, useEffect } from "react"

import Shop from './shop.jsx'
import Layout from './layout.jsx'
import Cart from './cart.jsx'
import About from './about.jsx'
import Wishlists from './wishlist.jsx'
import Home from "./home.jsx"

function red(cart,action){

  const index = cart.findIndex(c=> c.id === action.payload.id)

  if(action.type === 'add'){

     if(index !== -1){
          if(cart[index].qty === action.payload.stock){
      return cart
    }
    return cart.map((c,i)=> {
      if(index === i){
        return {...c, qty: c.qty + 1}
      }

      return c
    })
  }
 else{
if (action.payload.stock === 0) {
    return cart
}
    return [...cart, {...action.payload, qty: 1}]
  }
  }


  if(action.type === 'remove'){

    if(index !== -1){

   
    if(cart[index].qty>1){
      return cart.map((c,i)=>{
        if(index === i){
          return {...c, qty: c.qty - 1}
        }
        return c
      })
    }
    else{
      return cart.filter((c,i)=>{
        return i !== index
      })
    }
  }


  }

 



}


function App(){

const [cart,dis] = useReducer(red,JSON.parse(localStorage.getItem('storedcart') || `[]`))
const [wishlist, setwishlist] = useState(JSON.parse(localStorage.getItem(`storedwish`)|| '[]'))

useEffect(() => {
    localStorage.setItem('storedcart', JSON.stringify(cart))
}, [cart])

useEffect(() => {
    localStorage.setItem('storedwish', JSON.stringify(wishlist))
}, [wishlist])

    const handlewish = (id,p)=>{
const index = wishlist.findIndex(w=> w.id === id)

if(index !== -1){
    setwishlist(wishlist=> {
         return wishlist.filter(w=>{
      return  w.id !== id }
    )})
}
else{
    setwishlist(w=> [...w, p])
}
    }


return(<>


<BrowserRouter>
<Routes>
<Route  element={<Layout/>}>
<Route path={'/'} element={<Home/>}/>
<Route path={'/shop'} element={<Shop cart={cart} dis={dis} wishlist={wishlist} handlewish={handlewish} />}></Route>
<Route path={'/cart'} element={<Cart cart={cart} dis={dis} wishlist={wishlist} handlewish={handlewish}/>}/>
<Route path={'/wishlist'} element={<Wishlists  wishlist={wishlist} handlewish={handlewish} cart={cart} dis={dis}/>}/>
<Route path={`/products/:id`} element={<About cart={cart} dis={dis} wishlist={wishlist} handlewish={handlewish} />} />

</Route>


</Routes>
</BrowserRouter>




</>);

}

export default App