import React from 'react'

function Gameboard({player, turn, score, diceNumber}) {
    return (
        <div className={turn ? 'active' : undefined}>
            <h2>{player}</h2>
            <div className="current-score">
                <p>Current Score</p>
                <h3>{score}</h3>
            </div>
        </div>
    )
}

export default Gameboard