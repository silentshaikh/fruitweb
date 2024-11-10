import React from 'react'
import { hChildApi } from '@/utils/helper';
import HomeSubs from '../HomeSubs/HomeSubs';

function HomeChild() {
  
  return (
   <>
    <div className="homeContTwo">
    <h1>Enjoy The Fruit</h1>
      <div className="prodCard">
      {
        hChildApi.map((element,index) => {
          return( <div className="card" key={index}>
            <img src={`/images${element.img}`} alt="product" />
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