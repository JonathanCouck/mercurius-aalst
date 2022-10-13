import React, { useEffect } from 'react'

const ErrorPagina = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='my-10 mx-5'>
      <div className='mx-auto mb-5'>
        <span className='text-green font-semibold text-nietGevonden md:text-404'>404</span>
        <p className='text-title md:text-nietGevonden'>Deze pagina is niet gevonden</p>
      </div>
      <a href='/' className='underline text-green text-subtitle'>Terugkeren naar de Homepagina</a>
    </div>
  )
}

export default ErrorPagina