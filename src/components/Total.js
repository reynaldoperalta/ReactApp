import React from 'react'
import ReactDOM from 'react-dom'

const Total = (props) => {
    var total = 0
        props.parts.forEach(i => {
            total += i.exercises
        });
    return (
        <p>El numero total de ejercicios es: {total}</p>
    )
}

export default Total