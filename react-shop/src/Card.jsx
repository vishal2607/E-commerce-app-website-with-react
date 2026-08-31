
import { useEffect,useState } from "react";
import { Link } from "react-router-dom";

function Card({cart,array,dis,wishlist,handlewish}){



    return(<>
    
        <div className="box">
        {array.map((p,i)=>{
                const index = cart.findIndex(c=> c.id === p.id )
          return  <div className="card" key={p.id}> 
          <Link to={`/products/${p.id}`}>  <img className="imgid" src={p.images[0]}/> </Link>
          <button onClick={() => handlewish(p.id,p)} 
          className="wishbtn">{wishlist.some(w=> w.id === p.id)? '❤️':'🤍'}</button>
        <p>Category: {p.category} </p>
            <p className={p.stock>10? 'highstock':'lowstock'}>Stock: {p.stock}</p>
            <p>Price: ${p.price}</p>
            <p>Name: {p.title}</p>
            <div className="btns">
     { index<0 && <button onClick={()=> dis({type: 'add', payload: p})}>Add</button> }
     {index !== -1 && <> <button onClick={()=> dis({type:'remove', payload: p})} >-</button> {cart[index].qty} 
     <button onClick={()=> dis({type: 'add',payload: p})}>+</button> </>}
                 </div>
            </div>
        })}
    </div>
    
    
    
    </>);

}
export default Card