import React from 'react'

const Hello = ({name, fn}) => {


    return (
        <h1 onClick={() => {fn(name())}}>Hello World {name}</h1>
    )
}

export default Hello