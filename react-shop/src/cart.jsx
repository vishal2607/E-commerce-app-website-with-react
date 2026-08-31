

function Cart({cart,dis,wishlist,handlewish}){


  const total = cart.reduce((sum,c)=>{
    return sum + c.price * c.qty
  },0)
  
  return(<>
  
<div className="box">
  {cart.map((p,i)=>{
    const index = cart.findIndex(c=> c.id === p.id)
    return <div className="cartcard" key={p.id}>
    
    <div className="imgcard">
      <img className="imgidcart" src={p.images[0]}/>
    </div>
    <div className="cartinfo">
   <button className="cartwishbtn" onClick={()=> handlewish(p.id,p)}>{wishlist.some(w=> w.id === p.id)? '❤️':'🤍'}</button>
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
     
    </div>
  })}
</div>

<div className="checkoutbox">

<h3>Order summary</h3>

<div className="checkoutrow">
    <span>Subtotal:</span>
    <span>${total.toFixed(2)}</span>
</div>
  
  <div className="checkoutrow">
    <span>Delivery:</span>
    <span>Free</span>
</div>
 

<hr></hr>
<div className="checkoutrow">
    <span>Total:</span>
    <span>${total.toFixed(2)}</span>
</div>
<button className="buybtn">Buy</button>
</div>

  
  </>);

}

export default Cart