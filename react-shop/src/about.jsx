import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function About({cart,dis,wishlist,handlewish}){

    const [p,setp] = useState([])
    const {id} = useParams()

    useEffect(()=>{
fetch(`https://dummyjson.com/products/${id}`).then(r=> r.json())
.then(data=> {setp(data)
console.log(data)
}
)
    },[])

    const index = cart.findIndex(c=> c.id === Number(id))

return(<>

{p.length !== 0 && 
<div className="box">
<div className="cardpro">
   <img className="imgpro" src={p.images[0]}/>

<p> Title:  {p.title} </p> 
   <p>Category: {p.category} </p>
<p>Description: {p.description}</p>
<p>Price: ${p.price}</p>
<p>Stock:{p.stock}</p>
<button onClick={ ()=>  handlewish(p.id,p)}
 className="aboutbtn">{wishlist.some(w=> w.id === p.id)? '❤️':'🤍'}</button>
 <div className="btns">
    {index<0 && <button onClick={()=> dis({type:'add', payload:p})}>Add</button>}
    { index !== -1 &&<> <button onClick={()=> dis({type: 'remove', payload: p})}>-</button>
     {cart[index].qty} <button onClick={()=> dis({type: 'add', payload: p})}>+</button> </>}
 </div>

</div>

  
</div> }

</>);

}

export default About