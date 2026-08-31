
import Card from './Card.jsx'

function Wishlists({wishlist,handlewish,cart,dis}){

    

    console.log(wishlist)
return(<>

{wishlist.length>0 && <div>
   
     <Card array={wishlist} cart={cart} dis={dis} wishlist={wishlist} handlewish={handlewish} />

    </div>}


</>);

}

export default Wishlists