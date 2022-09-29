import React, { useEffect } from 'react'

import { praesidium } from '../data/praesidium';
import PraesidiumLid from '../components/PraesidiumLid';

const Praesidium = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <div className='bg-green text-white uppercase text-subtitle md:text-title p-4 shadow-act'>
        Praesidium
      </div>
      <div className='mx-5 my-10 md:grid md:grid-cols-2 md:mx-auto max-w-4xl'>
        {praesidium.map((pr, index) => <PraesidiumLid key={index} {...pr} index={index}/>)}
      </div>
    </div>
  )
}

export default Praesidium