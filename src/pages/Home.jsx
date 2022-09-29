import React, { useEffect } from 'react';

import Activiteit from '../components/Activiteit';
//import groupPic from '../photos/GroupPic.png';
import { activities } from '../data/activities';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div className='my-10 space-y-10'>
      <p className='mx-5 my-10'>
        Beste Mercurius leden en geïnteresseerden,<br/> Welkom op de officiële website van onze studentenclub.
      </p>
      <div className='mx-5 my-10 sm:mx-auto sm:max-w-xl sm:m-0 space-y-4'>
        <span className='text-green font-semibold text-subtitle'>Wat is Mercurius</span>
        <p className='text-justify'>Wij zijn een door Hogeschool Gent erkende studentenclub. Dit wil zeggen dat wij enkele afspraken ondertekenen die de veiligheid van onze leden garandeert en de opgelegde regels zullen worden nageleefd.</p>
        <p className='text-justify'>Bij ons geldt een nultolerantie voor wanpraktijken of situaties die de veiligheid van onze leden op het spel zet.</p>
        <p className='text-justify'>Ook ondertekenen wij het Aalsters doopdecreet, waardoor wij een veilige doop kunnen garanderen aan zowel de deelnemers als de mensen rondom ons.</p>
      </div>

      <div className='mx-5 my-10 sm:mx-auto sm:max-w-xl sm:m-0 space-y-4'>
        <span className='text-green font-semibold text-subtitle'>Foto's</span>
        <p className='text-justify'>Voor foto's verwijzen wij graag naar onze socialemediakanalen.<br/> (links onderaan deze pagina)</p>
      </div>

      <div>
        <span className='text-green font-semibold text-subtitle'>Komende activiteiten</span>
        <div className='md:grid md:grid-cols-2 max-w-4xl mx-auto'>
          {
            activities.filter(a => a.date>new Date())
              .sort((a,b) => {
                if (a.date>b.date) return 1;
                if (a.date<b.date) return -1;
                return 0;
              }).slice(0,3)
              .map((act, index) => <Activiteit key={act.title} {...act} index={index}/>)
          }
        </div>
      </div>
    </div>
  )
}

// <div>
//  <img src={groupPic} alt="Praesidium" className='w-full' />
// </div>

export default Home;