import Gameboard from './Gameboard'
import GameInfo from './GameInfo'
import { useReducer, useEffect } from 'react'
import Dice from './Dice'
import GameOver from './GameOver'

const initialState = {
    diceNumber: 0,
    finalDiceNumber: 0,
    player1Score: 0,
    player2Score: 0,
    player1Turn: true,
    diceReady: true,
    gameOver: false,
    winCondition: 100,
}

function reducer(state, action) {
    switch (action.type) {
        case 'roll':
            return {
                ...state,
                diceNumber: action.payload,
                diceReady: false,
            }
        case 'finalRoll':
            return {
                ...state,
                finalDiceNumber: action.payload,
                diceReady: true,
            }
        case 'setScore':
            return {
                ...state,

                player1Score: state.player1Turn ? state.player1Score + state.finalDiceNumber : state.player1Score,

                player2Score: !state.player1Turn ? state.player2Score + state.finalDiceNumber : state.player2Score,
            }
        case 'switchTurn':
            return {
                ...state,
                player1Turn: !state.player1Turn,
            }
        case 'gameOver':
            return {
                ...state,
                gameOver: true,
            }
        case 'reset': {
            return initialState
        }
        default:
            return state
    }
}


function Gamepage() {

    const [state, dispatch] = useReducer(reducer,
        initialState
    )

    useEffect(() => {
        if (state.player1Score >= state.winCondition || state.player2Score >= state.winCondition) {
            dispatch({ type: 'gameOver' })
        }
    }, [state.player1Score, state.player2Score])


    async function roll() {
        if (state.diceReady) {
            let n;

            for (let i = 0; i < Math.random() * 50 + 10; i++) {
                n = Math.floor(Math.random() * 6) + 1
                dispatch({ type: 'roll', payload: n })
                await new Promise(r => setTimeout(r, 6 * i))
            }


            if (n === 1) {
                dispatch({ type: 'gameOver' })
            } else {
                ['finalRoll', 'setScore', 'switchTurn'].forEach(action => {
                    dispatch({ type: action, payload: n })
                })
            }

        }
    }

    const hold = () => {
        dispatch({ type: 'switchTurn' })
    }

    const rematch = () => {
        dispatch({ type: 'reset' })
    }


    return (
        <div className='gamepage'>
            <Gameboard player='Player one'
                turn={state.player1Turn}
                score={state.player1Score}
                diceNumber={0}
            />
            <Gameboard player='Player two'
                turn={!state.player1Turn}
                score={state.player2Score}
                diceNumber={0}
            />
            <GameInfo
                clickHandlerRoll={roll}
                clickHandlerHold={hold}
            />

            <Dice diceNumber={state.diceNumber} />
            {state.gameOver && <GameOver winner={state.player1Turn} clickHandler={rematch} />}
        </div>
    )
}

export default Gamepage