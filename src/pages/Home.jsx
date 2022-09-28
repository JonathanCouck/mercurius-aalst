import React from 'react';

import Activiteit from '../components/Activiteit';
import TextWithTitle from '../components/TextWithTitle';
//import groupPic from '../photos/Group pic.png';
import { activities } from '../data/activities';

const Home = () => {
  return (
    <div className='my-10 space-y-10'>
      <p>
        Beste Mercurius leden en geïnteresseerden,<br/> Welkom op de officiële website van onze studentenclub.
      </p>
      <TextWithTitle title={"Wat is Mercurius"} text={"Wij zijn een door Hogeschool Gent erkende studentenclub. Dit wil zeggen dat wij enkele afspraken ondertekenen die de veiligheid van onze leden garandeert en de opgelegde regels zullen worden nageleefd.\nBij ons geldt een nultolerantie voor wanpraktijken of situaties die de veiligheid van onze leden op het spel zet.\nOok ondertekenen wij het Aalsters doopdecreet, waardoor wij een veilige doop kunnen garanderen aan zowel de deelnemers als de mensen rondom ons."}/>
      <TextWithTitle title={"Je laten dopen"} text={"Als je zin hebt om je bij een studentenvereniging aan te sluiten, maar je hebt geen zin in de traditionele vuile doop waarvan je al zoveel gehoord hebt, dan ben je bij Mercurius op de juiste plaats.\nOnze doop zal namelijk een leuke namiddag paintballen worden! En nog beter: voor nieuwe leden is dit GRATIS!\nHeb je dus zin om hieraan mee te doen, schrijf je dan nu in via deze form: www.form.be"} />

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