import { useState } from "react"
import "./textArea.css"

const TextArea = (props) => {

  const handleChange = (event) => {
    props.onChanged(event.target.value)
  }

  return (
      <div className="text-area">
        <label>{props.name}</label>
        <input onChange={handleChange} value={props.stateValue} required={props.required} placeholder={props.placeholder}></input>
      </div>
  )
}

export default TextArea