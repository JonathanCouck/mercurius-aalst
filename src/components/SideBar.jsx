import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({close, isOpen}) => {

  return (
    <aside className={`easer nav:hidden shadow-act z-30 bg-white text-black w-60 fixed right-0 top-0 h-screen border-l-2 border-gray ${isOpen ? "translate-x-0 " : "translate-x-full"}`}>
      <div className='h-24'/>
      <nav>
        <ul className='text-[1.2rem] text-left flex flex-col'>
          {[
            ['Home', ''],
            ['Praesidium', '/praesidium'],
            ['Geschiedenis', '/geschiedenis'],
            ['Clublied', '/clublied'],
            ['Kalender', '/kalender'],
            // ['Clubcafe', '/clubcafe'],
          ].map(([title, url]) => {
            return (
              <Link to={url} onClick={close} className='easer hover:scale-105 hover:border-0 hover:rounded-l pl-10 text-secondary border-t border-gray py-[0.4rem] hover:cursor-pointer hover:bg-lgreen' key={title}>
                {title}
              </Link>
          )})}
          <div className='border-t border-gray' />
        </ul>
      </nav>
    </aside>
  )
}
export default Sidebar;