import React from 'react'

interface ButtonProps{
    text: string,
}

function Button({text}:ButtonProps) {
  return (
    <div>
        <button className='w-54.25 h-14 bg-[#0E8784] md:hover:bg-[#66D2CF] md:transition-colors md:duration-300 md:cursor-pointer rounded-md font-black text-[#FEFCF7] text-[18px] font-[fraunces]'>{text}</button>
    </div>
  )
}

export default Button