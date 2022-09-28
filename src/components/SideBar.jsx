import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({close, isOpen}) => {

  return (
    <aside className={`lg:hidden shadow-act z-10 bg-white text-black w-60 fixed right-0 top-0 h-screen border-l-2 border-gray ${isOpen ? "translate-x-0 " : "translate-x-full"} ease-in-out duration-300`}>
      <div className='h-24'/>
      <nav>
        <ul className='text-nav flex flex-col'>
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
            const cn = (index<4?'md:hidden':null) + ' pl-10 text-secondary text-left border-b border-gray h-10 py-2 pr-5 hover:cursor-pointer hover:bg-lgreen ease-in-out duration-200'
            return (
              <Link to={url} onClick={close} className={cn} key={title}>
                {title}
              </Link>
          )})}
        </ul>
      </nav>
    </aside>
  )
}
export default Sidebar;