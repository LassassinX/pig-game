import React from 'react'

function Gamebuttons({clickHandlerRoll, clickHandlerHold, reset}) {
  return (
    <div className='gamebuttons'>
        <button className='roll' onClick={clickHandlerRoll}>Roll</button>
        <button className='hold' onClick={clickHandlerHold}>Hold</button>
    </div>
  )
}

export default Gamebuttons