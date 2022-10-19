import React, { useEffect } from 'react';

import Activiteit from '../components/Activiteit';
//import groupPic from '../photos/GroupPic.png';
import { activities } from '../data/activities';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div>
      <img src="https://imgur.com/ECxN1TY.png" alt="Praesidium Pic" className='w-screen hidden md:block' />
      <img src="https://imgur.com/EKkiLIG.png" alt="Praesidium Pic" className='w-screen md:hidden block' />
      <div className='section'>
        <p className='mx-auto'>
          Beste Mercurius leden en geïnteresseerden,<br/> Welkom op de officiële website van onze studentenclub.
        </p>
        <div className='text-justify max-w-2xl mx-auto'>
          <div className='subtitle'>Wat is Mercurius</div>
          <p>Wij zijn een door Hogeschool Gent erkende studentenclub. Dit wil zeggen dat wij enkele afspraken ondertekenen die de veiligheid van onze leden garandeert en de opgelegde regels zullen worden nageleefd.</p><br />
          <p>Bij ons geldt een nultolerantie voor wanpraktijken of situaties die de veiligheid van onze leden op het spel zet.</p><br />
          <p>Ook ondertekenen wij het Aalsters doopdecreet, waardoor wij een veilige doop kunnen garanderen aan zowel de deelnemers als de mensen rondom ons.</p>
        </div>

        <div>
          <div className='subtitle'>Foto's</div>
          <p className='mx-auto'>Voor foto's verwijzen wij graag naar onze socialemediakanalen.<br/> (links onderaan deze pagina)</p>
        </div>

        <div>
          <div className='subtitle'>Komende activiteiten</div>
          <div className='center-flex-items'>
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
    </div>
  )
}

// <div>
//  <img src={groupPic} alt="Praesidium" className='w-full' />
// </div>

export default Home;