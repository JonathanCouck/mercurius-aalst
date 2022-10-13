import React, { useEffect } from 'react'

import { praesidium } from '../data/praesidium';
import PraesidiumLid from '../components/PraesidiumLid';

const Praesidium = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <div className='title'>
        Praesidium
      </div>
      <div className='section flex flex-wrap space-y-0 md:grid md:grid-cols-2 gap-10'>
        {praesidium.map((pr, index) => <PraesidiumLid key={index} {...pr} index={index}/>)}
      </div>
    </div>
  )
}

export default Praesidium