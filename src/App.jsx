import React from 'react'
import Header from './Header'
import { Link, Route, Routes } from 'react-router-dom'
import Homepage from './Homepage'
import Gamepage from './Gamepage'

function App() {

    return (
        <>
            <Routes>
                <Route path='/' element={<Homepage />}>
                </Route>
                <Route path='game' element={<Gamepage />}>

                </Route>
            </Routes>
        </>
    )
}

export default App