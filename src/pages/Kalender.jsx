import React, { useEffect } from 'react'
import Activiteit from '../components/Activiteit';

import { activities } from '../data/activities';

const komende = activities.filter(a => a.date>=new Date())
  .sort((a,b) => {
    if (a.date>b.date) return 1; 
    if (a.date<b.date) return -1;
    return 0;
});

const voorgaande = activities.filter(a => a.date<new Date())
  .sort((a,b) => {
    if (a.date>b.date) return 1;
    if (a.date<b.date) return -1;
    return 0;
});

const Kalender = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <div className='bg-green text-white uppercase text-subtitle md:text-title p-4 shadow-act'>
        Kalender
      </div>

      <div className='my-10 space-y-10'>
        <div className='my-10 mx-5'>
          <div>
            Om de Mercurius-kalender te downloaden en in je eigen agenda te steken:
          </div>
          <div className='mt-5'>
            <a href="https://calendar.google.com/calendar/ical/mercuriusaalst.studentenclub%40gmail.com/public/basic.ics" className='text-white bg-green py-2 px-4 rounded-lg hover:shadow-button hover:cursor-pointer ease-in-out duration-200'>Klik hier</a>
          </div>
        </div>
        <div className='mx-5 md:mx-auto my-10'>
          <span className='text-green text-subtitle font-semibold'>Komende activiteiten <span className='font-normal'>(Klikken voor meer info)</span></span>
          <div className='md:grid md:grid-cols-2 max-w-4xl mx-auto'>
            {
              komende.length===0?
                <span>Geen komende activiteiten gevonden</span>:

                komende.map((act, index) => <Activiteit key={act.title} {...act} index={index+1}/>)
            }
          </div>
        </div>
        <div className='mx-5 md:mx-auto my-10'>
          <span className='text-green text-subtitle font-semibold'>Voorgaande activiteiten <span className='font-normal'>(Klikken voor meer info)</span></span>
          <div className='md:grid md:grid-cols-2 max-w-4xl mx-auto'>
            {
              voorgaande.length===0?
                <span>Geen voorgaande activiteiten gevonden</span>:

                voorgaande.map((act, index) => <Activiteit key={act.title} {...act} index={index+1}/>)
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Kalender