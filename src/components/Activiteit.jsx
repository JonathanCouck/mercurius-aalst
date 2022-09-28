import React from 'react';
import standardBanner from '../photos/activities/StandardBanner.jpg';

const dayOfWeek = ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"];
const month = ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"];

const Activiteit = ({ picture, title, date, time, toegankelijkheid, location, link }) => {
  return(
    <div className='row-span-2 my-5 md:mb-0 border-2 border-green rounded-xl shadow-act max-w-sm mx-auto h-min'>
      <img src={picture??standardBanner} alt={title} className="w-full rounded-t-xl"/>
      <div className='m-4'>
        <span className='text-green text-nav font-semibold'>{title}</span>
        <div className='text-justify'>
          <p className='my-2'><span className='font-semibold'>Waar?</span><br/>{location}</p>
          <p className='my-2'><span className='font-semibold'>Toegankelijkheid?</span><br/>{toegankelijkheid}</p>
          <p className='my-2'><span className='font-semibold'>Wanneer?</span><br/>{dayOfWeek[date.getDay()]} {date.getDate()} {month[date.getMonth()]} {date.getYear()+1900}</p>
          <p className='my-2'><span className='font-semibold'>Hoe laat?</span><br/>{time}</p>
        </div>
        <form action={link} target="_blank" className='flex flex-row-reverse'>
          <input className={`bg-green text-white py-1 px-5 rounded-lg hover:shadow-button hover:cursor-pointer ease-in-out duration-200 ${!link?'bg-gray hover:shadow-none hover:cursor-default':null}`} disabled={!link} type="submit" value="Meer info" />
        </form>
      </div>
    </div>
  )
};

export default Activiteit