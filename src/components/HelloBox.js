import React from 'react'
import Hello from './Hello'
import Hello2 from './Hello2'

const HelloBox = () => {
    return (
        <div>
            <Hello2></Hello2>
            <Hello2></Hello2>
            <Hello2></Hello2>
            <Hello2></Hello2>
            <Hello name={`USER1`}></Hello>
            <Hello name={`USER2`}></Hello>
        </div>
    )
}

export default HelloBox