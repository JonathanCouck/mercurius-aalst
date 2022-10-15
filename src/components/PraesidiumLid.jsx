import React from 'react'

const PraesidiumLid = ({ index, functie, foto, naam, studie, doopjaar, peter, meter, favQuote, quoteBy, favCantLied }) => {
  var gridRow;
  switch(index) {
    case 0:
      gridRow = ' row-start-1'
      break
    case 1:
      gridRow = ' row-start-2'
      break
    case 2:
      gridRow = ' row-start-3'
      break
    case 3:
      gridRow = ' row-start-4'
      break
    case 4:
      gridRow = ' row-start-5'
      break
    case 5:
      gridRow = ' row-start-6'
      break
    case 6:
      gridRow = ' row-start-[7]'
      break
    case 7:
      gridRow = ' row-start-[8]'
      break
    case 8:
      gridRow = ' row-start-[9]'
      break
    case 9:
      gridRow = ' row-start-[10]'
      break
    default:
      gridRow = ''
  };
  return (
    <div className={`mx-auto row-span-2 ${gridRow}`}>
      <span className='text-green text-subtitle font-semibold'>{functie}</span>
      <div className='max-w-md border-2 border-green rounded-xl shadow-act'>
        <img src={foto+'.jpg'} alt={naam} className="w-full rounded-t-[0.63rem]"/>
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