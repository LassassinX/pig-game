import React from 'react'

function GameInfo({clickHandlerRoll, clickHandlerHold, reset}) {
  return (
    <div className='gameinfo'>
        <button className='roll' onClick={clickHandlerRoll}>Roll</button>
        <button className='hold' onClick={clickHandlerHold}>Hold</button>
    </div>
  )
}

export default GameInfo 