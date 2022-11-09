import React from 'react'

function Gameboard({player, turn, score, diceNumber}) {
    return (
        <div className={turn && 'active'}>
            <h2>{player}</h2>
            <h3>{diceNumber}</h3>
            <div className="current-score">
                <p>Current Score</p>
                <p className='score'>{score}</p>
            </div>
        </div>
    )
}

export default Gameboard