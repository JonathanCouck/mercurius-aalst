import React, { useEffect } from 'react'

const Clublied = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <div className='title'>
        Clublied
      </div>
      <div className='section max-w-2xl'>
        <div className='italic'>
          <span className='font-semibold'>Wijze:</span> Ode an die freude<br/>
          <span className='font-semibold'>Tekst:</span> Geert Bruyneel en Philip Vlaeminck
        </div>
        <hr className="border-gray-200 mx-auto"/>
        <div>
          <p>In 't Kastanjehof gezeten,<br/>
          Zat Mercurius aan den toog<br/>
          We hadden toch wel moeten weten<br/>
          Ons tempo lag veel te hoog<br/></p><br/>

          <p>En we drinken en we vieren,<br/>
          Want student zijn is een feest.<br/>
          Wij proeven hier van alle bieren,<br/>
          Want 't is nooit genoeg geweest.<br/></p><br/>
          
          <p>Komt dus allen bij elkander<br/>
          In 't Kastanjehof veur plezier.<br/>
          Alleman kruipt op een ander,<br/>
          En geeft nu mijn pint alhier.<br/></p><br/>

          <p>Laat ons hier dus nu besluiten<br/>
          Dat Mercurius de club is<br/>
          Waar ze bier drinken met kuipen<br/>
          En waar iedereen welkom is!<br/></p><br/>
        </div>
      </div>
    </div>
  )
}

export default Clublied