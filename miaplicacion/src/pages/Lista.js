import React from 'react';
import {Link} from 'react-router-dom'
import Platos from './Platos';
import data from './data';
import { CartProvider } from 'react-use-cart';
const Lista=()=> {
  return ( <>
      <section className="cabeza4">
          <nav>
          <Link to='/'><img src="imagenes/logo.png" /></Link>
            <div className="links"> 
          <ul> 
          <li><Link to='/reser'>Reservaciones</Link></li>  
          <li><Link to='/menu'>Menu</Link></li>
          <li><Link to='/info'>Promociones</Link></li></ul>
          </div>
          </nav>
          <div className="mensaje">
            <h1>-Menú-</h1>
          </div>
        </section>
        <section className='text-center  mt-3 py-4 container'>   
        <div className='row justify-content-center'>
          {data.productData.map((item,index)=>
          {
            return(<Platos 
              img={item.img}  
              title={item.title}
               price={item.price} 
               key={index} 
               item={item}/>)
          })} 
          </div>  
</section> 
  </>
 )
}
export default Lista;