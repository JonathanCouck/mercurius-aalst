import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Fade as Hamburger } from 'hamburger-react';
import logo from '../photos/Schild-768x916.png';
import Sidebar from './SideBar';

const NavMenu = () => {
  const [isOpen, setOpen] = useState(false);

  const open = useCallback(() => {
    setOpen(true)
  },[setOpen]);

  const close = useCallback(() => {
    setOpen(false)
  },[setOpen]);

  return (
    <div className=''>
      <div className='flex bg-green text-white fixed w-screen border-b-2 border-lgreen px-4 z-20'>
        <Link to='/' onClick={close} className='nav-btn flex mr-auto m-2 rounded-b-[2rem] rounded-tr-[2rem]'>
          <img src={logo} className='h-20 m-2' alt='No' />
          <span className='my-auto ml-2 pr-2 text-subtitle'>MERCURIUS</span>
        </Link>
        
        <ul className='text-[1.2rem] hidden nav:flex'>
          {[
            ['Home', '/'],
            ['Praesidium', '/praesidium'],
            ['Geschiedenis', '/geschiedenis'],
            ['Clublied', '/clublied'],
            ['Kalender', '/kalender'],
            // ['Clubcafe', '/clubcafe'],
          ].map(([title, url]) => { 
            return (
              <Link to={url} onClick={close} className="nav-btn py-2 px-4 mx-2" key={title}>
                {title}
              </Link>
          )})}
        </ul>

        <div className='my-auto mx-2 z-40 nav:hidden rounded-md'>
          <Hamburger toggled={isOpen} toggle={setOpen} direction='left' duration={0.3} distance='sm' color={isOpen?'#217226':'#ffffff'}/>
        </div>
        <Sidebar open={open} close={close} isOpen={isOpen} />
      </div>
      <div className='pb-28' />
    </div>
  )
}

export default NavMenu