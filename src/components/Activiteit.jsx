import React from 'react';
import standardBanner from '../photos/activities/StandardBanner.jpg';

const dayOfWeek = ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"];
const month = ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"];

const Activiteit = ({ picture, title, date, time, toegankelijkheid, location, link }) => {
  return(
    <div className='h-box'>
      <a href={link} target="_blank" rel="noreferrer" title='Klik voor meer informatie'>
        <div className='row-span-2 my-5 border-2 border-green rounded-xl shadow-act max-w-sm mx-auto hover:max-w-md ease-in-out duration-300'>
          <img src={picture??standardBanner} alt={title} className="w-full rounded-t-xl border-b-2 border-green"/>
          <div className='m-4'>
            <span className='text-green text-nav font-semibold'>{title}</span>
            <div className='text-justify'>
              <p className='my-2'><span className='font-semibold'>Waar?</span><br/>{location}</p>
              <p className='my-2'><span className='font-semibold'>Toegankelijkheid?</span><br/>{toegankelijkheid}</p>
              <p className='my-2'><span className='font-semibold'>Wanneer?</span><br/>{dayOfWeek[date.getDay()]} {date.getDate()} {month[date.getMonth()]} {date.getYear()+1900}</p>
              <p className='my-2'><span className='font-semibold'>Hoe laat?</span><br/>{time}</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  )
};

export default Activiteit