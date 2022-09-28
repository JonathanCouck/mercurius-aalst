import React from 'react'

import { prosenioren } from '../data/prosenioren'
import TextWithTitle from '../components/TextWithTitle'

const Prosenior = ({name, year, index}) => {
  return (
    <tr className={`${index%2===0?'bg-lgray':''}`}>
      <td className='py-2 px-4 border-r border-gray'>{year}</td>
      <td className='py-2 px-4'>{name}</td>
    </tr>
  )
}

const Geschiedenis = () => {
  return (
    <div className='my-10 space-y-10'>
      <TextWithTitle title={'Ontstaan'} text={'Het in 1948 ontstane Mercurius is de oudste nog bestaande studentenclub van Aalst. In de pas opgerichte Rijkshogere Handelsschool werd door toenmalig directeur Reychler Studentenbond Mercurius boven de doopvont gehouden.\nEr werd onder andere toneel gespeeld en een bibliotheek beheerd. Er was ook het studentenblad Kwik. Het is duidelijk dat er sindsdien veel veranderd is. In de zeventig jarige geschiedenis heeft de club tweemaal een onderbreking gekend van enkele jaren.\nDe laatste heroprichting dateert van 1986 toen Peter Van Accolyen de club opnieuw leven in blies. Sinds lang is het Kastanjehof het clublokaal. In "den Hof" staan Yvette en Mark achter den toog. Een bezoekje aan onze meter en peter is zeker de moeite waard, al was het maar om het hoog curiositeitengehalte van ons clubcafé te bewonderen.'} />
      <TextWithTitle title={'Naamgeving'} text={'Mercurius was de Romeinse god van de handelaren (ook wel van de dieven en bedriegers). Zijn Griekse tegenhanger was Hermes, net zoals nu de Gentse tegenhanger van Mercurius heet.\nOp het schild kan je behalve het monogram ook de staf van Mercurius zien, de caduceus. Deze toont een palmtak met twee verstrengelde slangen.'} />
      <div className='mx-auto'>
        <span className='text-green font-semibold text-subtitle'>Prosenioren</span>
        <div className='text-left'>
          <br/>
          <table className='border border-gray mx-auto'>
            <thead className="text-gray-700 uppercase border-b border-gray">
              <tr>
                <th scope="col" className="py-2 px-4">
                    Jaar
                </th>
                <th scope="col" className="py-2 px-4">
                    Naam
                </th>
              </tr>
            </thead>
            <tbody>
              {prosenioren.map((ps, index) => <Prosenior key={ps.year} index={index} {...ps} />)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Geschiedenis