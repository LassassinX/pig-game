import React from 'react'

function GameOver({ winner, clickHandler }) {
    const winnerName = !winner ? 'Player 1' : 'Player 2'
    return (
        <div className='gameover'>
            <h2>Game Over!</h2>
            <div className="rematch-container">
                <h3>{winnerName} wins!</h3>
                <button onClick={clickHandler}>Rematch ?</button>
            </div>

        </div>
    )
}

export default GameOver