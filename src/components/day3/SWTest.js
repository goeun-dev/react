import React, {useState, useEffect} from 'react'
import axios from 'axios'

const SWTest = () => {

    const [name, setName] = useState('AAA')

    useEffect(async () => {
        await axios.get('https://swapi.co/api/people/1')
        .then((res, error) => {
            console.log(res.data.name)
            setName(res.data.name)
        })
    }, []) // useEffect, [] 컴포넌트 로딩될때 한번만 동작


    return (
        <div>
            <h1>{name}</h1>
        </div>
    )
}
export default SWTest