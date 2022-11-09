import React from 'react'
import Header from './Header'
import { Link, Route, Routes } from 'react-router-dom'

function Homepage() { 
    return (
        <div className='homepage'> 
            <Header />
            <Link className='play-game' to={'game'}>
                <button >Play Game!</button>
            </Link>
        </div>
    )
}

export default Homepage