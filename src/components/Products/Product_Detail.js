import React ,{useEffect} from 'react';
import Product_Banner from '../Products/product-banner'
import '../style.css'
import Features from '../features';
import Wifly_works from '../wifly-works'
import Specifications from '../Specifications'
import Free_trial from '../Free-trial'
import FAQ from '../Faq'
import axios from 'axios';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Trial1 from "../images/free-trial2.png"
import Trial2 from "../images/free-trial1.png"

const Product_Detail = () => {
  const {state}= useLocation()

  const [product,setProduct]=useState(null)
  useEffect(() => {
    console.log(state?.id)
    axios
        .get("https://wiflyadmin.auxesisdevelopment.com/api/products?populate=*")
        .then(({ data }) =>{
          console.log(data.data)
          const product=data.data.filter(product=>product?.id==state?.id)
          console.log(product)
          setProduct(product)
          
          })
}, []);
   
    return (
          <>
          <div className='body-inner pt'>
            <Product_Banner product={product?.[0]}/>
            <Features/>
            <Wifly_works product={product?.[0]}/>
            <Specifications product={product?.[0]}/>
            <Free_trial  heading={'Free Trial'}  paragraph={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum'} image={Trial2} image2={Trial1} button={'Schedule Free Trail'} />
            <FAQ/>
            </div>
          </>
    )

 }

 export default Product_Detail;
