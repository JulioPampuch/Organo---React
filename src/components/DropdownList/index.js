import "./dropdown.css"

const Dropdown = (props) => {

  const handleChange = (event) => {
    props.onChanged(event.target.value)
  }

  return (
    <div className="dropdown">
      <label>{props.label}</label>
      <select value={props.stateValue} onChange={handleChange}>
        {props.itens.map((item, index) => {
          return <option key={index}>{item}</option>
        })}
      </select>
    </div>
  )
}

export default Dropdown