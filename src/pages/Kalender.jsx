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
      <div className='title'>
        Kalender
      </div>

      <div className='section'>

        <div>
          <div className='mb-5'>
            Om de Mercurius-kalender te downloaden en in je eigen agenda te steken:
          </div>
          <a href="https://calendar.google.com/calendar/ical/mercuriusaalst.studentenclub%40gmail.com/public/basic.ics" className='green-btn'>Klik hier</a>
        </div>

        <div>
          <div className='subtitle'>Komende activiteiten <span className='font-normal'>(Klikken voor meer info)</span></div>
          <div className='center-flex-items'>
            {
              komende.length===0?
                <span>Geen komende activiteiten gevonden</span>:

                komende.map((act, index) => <Activiteit key={act.title} {...act} index={index+1}/>)
            }
          </div>
        </div>

        <div>
          <div className='subtitle'>Voorgaande activiteiten <span className='font-normal'>(Klikken voor meer info)</span></div>
          <div className='center-flex-items'>
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