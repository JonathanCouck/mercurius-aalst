import React from 'react';

const dayOfWeek = ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"];
const month = ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"];

const Activiteit = ({ foto, title, date, time, toegankelijkheid, location, link }) => {
  return(
    <a href={link} target="_blank" rel="noreferrer" title='Klik voor meer informatie' className={`easer max-w-sm ${link?'hover:scale-105':null} z-10`}>
      <div className='merc-border row-span-2 shadow-act mx-auto ease-in-out duration-300 bg-white'>
        <img src={foto===''? 'https://imgur.com/NhrMwiG.jpg':foto+'.jpg'} alt={title} className="w-full rounded-t-[0.63rem] border-b-2 border-green"/>
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
  )
};

export default Activiteit