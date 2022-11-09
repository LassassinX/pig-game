import React from 'react'
import dice1 from './assets/images/1.png'
import dice2 from './assets/images/2.png'
import dice3 from './assets/images/3.png'
import dice4 from './assets/images/4.png'
import dice5 from './assets/images/5.png'
import dice6 from './assets/images/6.png'

function Dice({diceNumber}) {
    const diceArray = ['',dice1, dice2, dice3, dice4, dice5, dice6]

    return (
        <div className='dice'>
            <img src={diceArray[diceNumber]} alt="" />
        </div>
    )
}

export default Dice