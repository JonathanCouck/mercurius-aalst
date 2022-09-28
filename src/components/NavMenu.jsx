import React, { useState, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Fade as Hamburger } from 'hamburger-react';
import logo from '../photos/Schild-768x916.png';
import Sidebar from './SideBar';

const NavMenu = () => {
  const [isOpen, setOpen] = useState(false);
  const location = useLocation();
  const open = useCallback(() => {
    setOpen(true)
  },[setOpen]);

  const close = useCallback(() => {
    setOpen(false)
  },[setOpen]);

  return (
    <div className='bg-green text-white shadow-act'>
      <div className='flex'>
        <Link to='/' onClick={close} className='flex mr-auto hover:cursor-pointer hover:bg-lgreen hover:text-black rounded-md m-2 ease-in-out duration-200'>
          <img src={logo} className='h-20 m-2' alt='No' />
          <span className='my-auto ml-2 pr-2 text-subtitle'>MERCURIUS</span>
        </Link>
        
        <ul className='text-nav hidden mr-5 space-x-2 md:flex'>
          {[
            ['Home', '/'],
            ['Praesidium', '/praesidium'],
            ['Geschiedenis', '/geschiedenis'],
            ['Clublied', '/clublied'],
            ['Kalender', '/kalender'],
            ['Clubcafe', '/clubcafe'],
            ['Media', '/media'],
            ['Contact', '/contact'],
          ].map(([title, url], index) => { 
            const cn = (index>3?'hidden lg:block':null) + ' my-auto px-4 py-2 rounded-md hover:bg-lgreen hover:text-black hover:cursor-pointer ease-in-out duration-200'
            return (
              <Link to={url} onClick={close} className={cn} key={title}>
                {title}
              </Link>
          )})}
        </ul>

        <div className='my-auto mx-2 z-20 lg:hidden rounded-md'>
          <Hamburger toggled={isOpen} toggle={setOpen} direction='left' duration={0.3} distance='sm' color={isOpen?'#217226':'#ffffff'}/>
        </div>
        <Sidebar open={open} close={close} isOpen={isOpen} />
      </div>
      
      <div className={`uppercase text-title p-8 ${location.pathname==='/'?'hidden':null}`}>
        {location.pathname.slice(1)}
      </div>
    </div>
  )
}

export default NavMenu