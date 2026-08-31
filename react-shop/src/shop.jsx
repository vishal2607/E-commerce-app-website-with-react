import { useActionState, useEffect,useState } from "react";
import { Link } from "react-router-dom";

import Card from './Card.jsx'

function Shop({cart,dis,wishlist,handlewish}){

const [shop,setshop] = useState([])
const [allproducts,setallpro] = useState([])
const [search,setsearch] = useState('')
const [page,setpage] = useState(1)
const [skip,setskip] = useState(0)
const [totalpage,settotalpage] = useState(0)
const [cato,setcato] = useState('all')
const [sortby,setsort] = useState('default')
const [loading,setload] = useState(false)

const category = [...new Set(allproducts.map(p=> p.category))]

useEffect(() => {
    setskip(0)
    setpage(1)
}, [search, cato, sortby])

    useEffect(()=>{
window.scrollTo({top:0, behavior:'smooth'})

const totalPages = Math.ceil(193 / 10)
settotalpage(totalPages)
setload(true)
fetch(`https://dummyjson.com/products?limit=10&skip=${skip}`).then(r=>r.json())
.then(data=>{
    console.log(data)
    setshop(data.products)
    setload(false)
})

    },[skip])

    useEffect(()=>{
fetch(`https://dummyjson.com/products?limit=0`).then(r=> r.json())
.then(data=>{
    console.log(data)
    setallpro(data.products)
})
    },[])


const handlenext = ()=>{
    setskip(s=> s+10)
    setpage(p=> p+1)
}

const handleback = ()=>{
    
    setskip(s=> s-10)
    setpage(p=> p-1)
}


let temp = [...allproducts]
if(search !== ''){
     temp = allproducts.filter(p=> p.title.toLowerCase().trim().includes(search.trim().toLowerCase()))
}
if(cato !== 'all'){
 temp = temp.filter(p=> p.category === cato)
}
if(sortby !== `default`){

if(sortby === 'LtoH'){
    temp = temp.sort((a,b)=> a.price - b.price)

}

if(sortby === 'HtoL'){
    temp = temp.sort((a,b)=> b.price - a.price)
}
}

const paginatedtemp = temp.slice(skip,skip+10)


    return(<>
    

    <div className="search">
    <label>search bar:<input type='text' value={search}  onChange={e=> setsearch(e.target.value)}></input></label>
   Category: <select value={cato} onChange={e=> setcato(e.target.value)}>
 <option value='all'>All</option>
{category.map((c,i)=>{
    return <option value={c} key={i}>{c}</option>
})}
   </select>

Sort by: <select value={sortby} onChange={e=> setsort(e.target.value)}>
    <option value='default'>Default</option>
    <option value='LtoH'>Low to High</option>
    <option value='HtoL'>High to Low</option>
</select>

 </div>

 {loading && <div className="load"> Loading...</div>}

{search === '' && sortby === 'default' && cato === 'all'
    ? <Card array={shop} cart={cart} dis={dis} wishlist={wishlist} handlewish={handlewish} />
    : <Card array={paginatedtemp} cart={cart} dis={dis} wishlist={wishlist} handlewish={handlewish} />
}
 { search ==='' && <div className="pageinfo">
       { page>1 && <button onClick={handleback}>Back</button> }
        <p>{page}</p>
      { page !== totalpage &&  <button onClick={handlenext}>Next</button> }
    </div> }

    </>);
}

export default Shop