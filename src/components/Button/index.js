import "./button.css"

const Button = (props) => {
  return (
    <button className="button-create-card">{props.children}</button>
  )
}

export default Button