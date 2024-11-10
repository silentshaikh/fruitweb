'use client';
import React, { useState } from 'react'
import {RiMenu3Line} from 'react-icons/ri';
import {AiFillCloseCircle} from 'react-icons/ai';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navList } from '@/utils/helper';
function NavbarChild() {
  const [showNav,upShowNav] = useState(false);
  const activeLink = usePathname() ;
  return (
  <>
    <nav className='navBar'>
    <div className="logo">
    <div className="lImg">
    <img src='/images/favicon (1).png' alt="logo" />
        <h3>Fruit</h3>
    </div>
        
{showNav ? <AiFillCloseCircle className='opIcon' onClick={() => upShowNav(false)}/> : <RiMenu3Line className='opIcon' onClick={() => upShowNav(true)}/>}

    </div>
   
    <ul className={showNav ? 'li-list listActive' : 'li-list'}>
    {navList.map((e) => {
      return (
        <li> <Link href={e.lnk} className={`lnk ${activeLink === e.lnk ? 'active' : ''}`}>{e.name}</Link> </li>
      )
    })}
    </ul>

    </nav>
  </>
  )
}

export default NavbarChild