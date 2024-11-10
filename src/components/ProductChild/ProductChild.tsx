'use client';
import { prodApi } from '@/utils/helper';
import Image from 'next/image';
function ProductChild() {
  return (
  <>
  <h1 style={{textAlign:'center',color:'#34e7e4', fontSize:'4rem',paddingBottom:'40px'}}>Our Product</h1>
    <div className="productList">
      {
        prodApi.map((element,index) => {
          return (
            <div className="cardBox" key={index}>
            <Image
             src={`/images${element.img}`}
              alt="product"
              height={200}
              width={200}
              />
            <h3>{element.head}</h3>
            <p>{element.para}</p>
      </div>
          );
        })
      }
    </div>
  </>
  )
}

export default ProductChild