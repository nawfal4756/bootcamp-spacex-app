import React, { useState } from 'react'
import LaunchList from '../List'
import LaunchInfo from '../Info'

export default function App() {
    const [flightNumber, setFlightNumber] = useState(42)

    function handleNumberChange(newNumber: number) {
        setFlightNumber(newNumber)
    }

    return (
        <div>
            <LaunchList handleNumberChange={handleNumberChange} />
            <LaunchInfo flightNumber={flightNumber} />
        </div>
    )
}
