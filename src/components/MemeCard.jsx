import React from 'react'

const MemeCard = ({meme}) => {
  return (
   <article className='card'>
      <img src={meme.url} alt="meme img" />
      <h2>{meme.name}</h2>
   </article>
  )
}

export default MemeCard