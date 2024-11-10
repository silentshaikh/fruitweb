'use client';
import { useRouter } from 'next/navigation';
function HomeHead({head}:{head:string}) {
    const homeNavig = useRouter();
  return (
    <>
      <div className='homeCont'>
    <div className="hBoxTwo">
    <h1 >{head}</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam adipisci quis repellendus natus explicabo excepturi</p>
    <button onClick={() => homeNavig.push('/product')}>Show More</button>
    </div>
    <div className="hBoxOne">
    <img src='/images/home-fruits.png' alt="homeImage" />
    </div>
    </div>
    </>
  )
}

export default HomeHead;