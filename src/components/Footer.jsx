import React from 'react';
import { FaTiktok, FaInstagram, FaFacebookF } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import logo from '../photos/Schild-768x916.png';

const Footer = () => {
  return (
    <footer className="bg-green text-white dark:bg-gray-900">
      <div className="p-4 mx-auto max-w-lg">
        <div className="flex mx-auto px-4">
            <div className="flex items-center mb-4 sm:mb-0">
                <img src={logo} className="mr-3 h-20" alt="Flowbite Logo" />
            </div>
            <ul className="items-center ml-auto space-y-5 my-auto">
                <li title='Facebook'>
                  <a href="https://www.facebook.com/groups/172470292809076/" target="_blank" rel="noreferrer" className='flex p-2 rounded-lg hover:bg-lgreen ease-in-out duration-200'>
                    <FaFacebookF color='white' size={30} />
                    <div className='my-auto ml-5'>Facebook</div>
                  </a>
                  
                </li>
                <li title='TikTok'>
                  <a href="https://www.tiktok.com/@mercurius.aalst/" target="_blank" rel="noreferrer" className='flex hover:bg-lgreen p-2 rounded-lg ease-in-out duration-200'>
                    <FaTiktok color='white' size={30} />
                    <div className='my-auto ml-5'>TikTok</div>
                  </a>
                </li>
                <li title='Instagram'>
                  <a href="https://www.instagram.com/mercurius.aalst/" target="_blank" rel="noreferrer" className='flex hover:bg-lgreen p-2 rounded-lg ease-in-out duration-200'>
                    <FaInstagram color='white' size={30} />
                    <div className='my-auto ml-5'>Instagram</div>
                  </a>
                </li>
                <li title='E-mail'>
                  <a href="mailto:mercurius@hogent.be" target="_blank" rel="noreferrer" className='flex hover:bg-lgreen p-2 rounded-lg ease-in-out duration-200'>
                    <AiOutlineMail color='white' size={30} />
                    <div className='my-auto ml-5'>E-mail</div>
                  </a>
                </li>
            </ul>
        </div>
        <hr className="m-4 border-gray-200 sm:mx-auto" />
        <span className="text-sm text-gray-500 text-center dark:text-gray-400">
          © 2022 Mercurius Aalst. Alle rechten voorbehouden.
        </span>
      </div>
      <div className='bg-lgreen text-black p-2'>
        Webdesign/development door <a href="https://jonathancouck.github.io" target="_blank" rel="noreferrer"><b>Jonathan Couck</b></a>
      </div>
    </footer>
  )
}

export default Footer