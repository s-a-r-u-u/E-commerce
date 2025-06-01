import { useEffect } from "react";
import "../cards/cards.css"
import axios from "axios"
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Cards() {

  let location = useLocation();
const navigate = useNavigate();

  console.log(location);

  let[products,setProducts] = useState();
  useEffect(()=>{
    async function getItem(){
       const prod = await axios.get("http://13.232.155.198:3000/app/v1/items/get");
       setProducts(prod.data.data);
      
    }

    getItem();
  },[])



   function checkout(...description){
        console.log(description);
         console.log(products);
    return async function (event){  
        event.preventDefault();
    let userA = await axios.post('http://13.232.155.198:3000/app/v1/user/author' , {} , {headers:{Authorization:`bearer ${location.state}`}})
    if(userA.data.status){
      let payment = await axios.post("http://13.232.155.198:3000/app/v1/checkout",{
        item:description[0],
        price:description[1],
        image:description[2]
      })
    
      window.location.assign(payment.data.url);
    }

    else{
        navigate("/login");      
    }

  }
  } 


  return (
    products ? 
   <div className="bg-white">
       <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {

          products.map((product) => (
           <div className="group"  key={product.id}>
             <img
                alt={product.imageAlt}
                src={product.imageSrc}
               className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
            />
             <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
             <p className="mt-1 text-lg font-medium text-gray-900">${product.price}</p>
             <button onClick = {checkout(product.name , product.price , product.imageSrc)}  style={{border:'2px solid black' , padding:"2px" , cursor:"pointer"}} >Buy Item</button>
           </div>
          
          ))}
       </div>
      </div>
    </div> : ""
   )
  
}
