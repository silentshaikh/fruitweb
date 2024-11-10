import React from 'react'
import { hChildApi } from '@/utils/helper';
import HomeSubs from '../HomeSubs/HomeSubs';
import Image from 'next/image';

function HomeChild() {
  
  return (
   <>
    <div className="homeContTwo">
    <h1>Enjoy The Fruit</h1>
      <div className="prodCard">
      {
        hChildApi.map((element,index) => {
          return( <div className="card" key={index}>
            <Image
             src={`/images${element.img}`} 
             alt="product"
             height={200}
             width={200}
             />
             
            <h3>{element.head}</h3>
            <p>{element.para}</p>
        </div>);
        })
       }
      </div>
    </div>
   <HomeSubs/>
   </>
  )
}

export default HomeChild