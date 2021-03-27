import React from 'react'
import ReactDOM from 'react-dom'

const Content = (props) => {
    return (
      <div>
        <Part parts={props.parts[0].name}/>
        <Part parts={props.parts[0].exercises}/>
        <Part parts={props.parts[1].name}/>
        <Part parts={props.parts[1].exercises}/>
        <Part parts={props.parts[2].name}/>
        <Part parts={props.parts[3].exercises}/>
      </div>
    )
  }

  export default Content