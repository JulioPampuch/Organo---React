import "./textArea.css"

const TextArea = (props) => {
  return (
      <div className="text-area">
        <label>{props.name}</label>
        <input required={props.required} placeholder={props.placeholder}></input>
      </div>
  )
}

export default TextArea