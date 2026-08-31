import { Link } from "react-router-dom";


function Home(){


    return(<>
    
    <div className="Home">
       <h2>FIND YOUR NEXT FAVORITE   </h2>
       <h3>   Quality products, all in one place. </h3> 
 <Link to={'/shop'}>  <button className="shopbtn"> Shop Now </button> </Link>
    </div>
    
    <div className="chooseus">
        <h1> Why Choose Us?</h1>

<h3>🚚 Fast Delivery</h3>

Get your products delivered quickly and safely to your doorstep.

<h3> 🔒 Secure Shopping</h3>
Your personal information and orders are kept safe and secure.

 <h4>↩️ Easy Returns</h4>

Changed your mind? Our simple return process makes it easy.

 <h4>  ❤️ Great Products </h4>

Carefully selected products with quality and value in mind.

    </div>
    
    </>);

}

export default Home