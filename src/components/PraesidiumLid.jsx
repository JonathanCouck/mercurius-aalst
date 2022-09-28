import React from 'react'

const PraesidiumLid = ({ index, functie, foto, naam, studie, doopjaar, peter, meter, favQuote, quoteBy, favCantLied }) => {
  return (
    <div className={`row-span-2 ${'row-start-'+(index+1)} rounded-xl max-w-sm mx-auto my-5`}>
      <span className='text-green text-subtitle font-semibold'>{functie}</span>
      <div className='border-2 border-green rounded-xl shadow-act'>
        <img src={foto} alt={naam} className="w-full rounded-t-xl"/>
        <div className='m-4'>
          <span className='text-green text-nav font-semibold'>{naam}</span>
          <div className='text-justify'>
            <p className='my-2'><span className='font-semibold'>Studie:</span><br/>{studie}</p>
            <p className='my-2'><span className='font-semibold'>Doopjaar:</span><br/>{doopjaar}</p>
            <p className='my-2'><span className='font-semibold'>Peter/Meter:</span><br/>{peter} / {meter}</p>
            <p className='my-2'><span className='font-semibold'>Favoriete quote:</span><br/>"{favQuote}" <br/> <span className='italic'>&emsp;- {quoteBy}</span></p>
            <p className='my-2'><span className='font-semibold'>Favoriete cantuslied:</span><br/>{favCantLied}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PraesidiumLid