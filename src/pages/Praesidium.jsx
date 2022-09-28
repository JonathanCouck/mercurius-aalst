import React from 'react'

import { praesidium } from '../data/praesidium';
import PraesidiumLid from '../components/PraesidiumLid';

const Praesidium = () => {
  return (
    <div className='mx-5 my-10 md:grid md:grid-cols-2 md:mx-auto max-w-4xl'>
      {praesidium.map((pr, index) => <PraesidiumLid key={index} {...pr} index={index}/>)}
    </div>
  )
}

export default Praesidium