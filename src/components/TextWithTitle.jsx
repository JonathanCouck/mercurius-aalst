import React, { useState } from 'react'

const TextWithTitle = ({ title, text }) => {
  const [paragraphs] = useState(text.split('\n'));
  return (
    <div className='mx-5 my-10 sm:mx-auto sm:max-w-xl sm:m-0 space-y-4'>
      <span className='text-green font-semibold text-subtitle'>{title}</span>
      {paragraphs.map((par) => <p key={par[0]} className='text-justify'>{par}</p>)}
    </div>
  );
}

export default TextWithTitle