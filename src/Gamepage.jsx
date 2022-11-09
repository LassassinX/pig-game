import Gameboard from './Gameboard'
import Gamebuttons from './Gamebuttons'
import { useReducer } from 'react'
import Dice from './Dice'

function reducer(state, action) {
    switch (action.type) {
        case 'roll':
            return {
                ...state,
                diceNumber: action.payload,
                diceReady: false,
            }
        case 'hold':
            return {
                ...state,
                // finalDiceNumber: action.payload
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
        default:
            return state
    }
}

function Gamepage() {
    const [state, dispatch] = useReducer(reducer, {
        diceNumber: 0,
        finalDiceNumber: 0,
        player1Score: 0,
        player2Score: 0,

        player1Turn: true,
        diceReady: true,
    })


    async function roll() {
        if (state.diceReady) {
            let n;

            for (let i = 0; i < Math.random() * 50 + 10; i++) {
                n = Math.floor(Math.random() * 6) + 1
                console.log(n);

                dispatch({ type: 'roll', payload: n })
                await new Promise(r => setTimeout(r, 10 * i))
            }

            console.log(n);
            ['finalRoll', 'setScore', 'switchTurn'].forEach(action => {
                dispatch({ type: action, payload: n })
            })
        }
    }

    const hold = () => {
        dispatch({ type: 'switchTurn' })
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
            <Gamebuttons
                clickHandlerRoll={roll}
                clickHandlerHold={hold}
            />

            <Dice diceNumber={state.diceNumber} />
        </div>
    )
}

export default Gamepage