import React from 'react';
import { FaTiktok, FaInstagram, FaFacebookF } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import logo from '../photos/Schild-768x916.png';

const Footer = () => {
  return (
    <footer className="bg-green text-white dark:bg-gray-900">
      <div className="p-4 mx-auto max-w-lg">
        <div className="flex mx-auto px-4">
            <a className="footer-link h-min rounded-b-[2.8rem] my-auto" href='/mercurius-aalst'>
                <img src={logo} className="h-28" alt="Flowbite Logo" />
            </a>
            <ul className="items-center ml-auto space-y-5 my-auto">
              <a title='Facebook' href="https://www.facebook.com/groups/172470292809076/" target="_blank" rel="noreferrer" className='footer-link'>
                <FaFacebookF size={30} />
                <div className='my-auto ml-5'>Facebook</div>
              </a>
              <a title='TikTok' href="https://www.tiktok.com/@mercurius.aalst/" target="_blank" rel="noreferrer" className='footer-link'>
                <FaTiktok size={30} />
                <div className='my-auto ml-5'>TikTok</div>
              </a>
              <a title='Instagram' href="https://www.instagram.com/mercurius.aalst/" target="_blank" rel="noreferrer" className='footer-link'>
                <FaInstagram size={30} />
                <div className='my-auto ml-5'>Instagram</div>
              </a>
              <a title='E-mail' href="mailto:mercuriusaalst.studentenclub@gmail.com" target="_blank" rel="noreferrer" className='footer-link'>
                <AiOutlineMail size={30} />
                <div className='my-auto ml-5'>E-mail</div>
              </a>
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