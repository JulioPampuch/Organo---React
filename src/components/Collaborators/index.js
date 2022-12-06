import "./collaborators.css"

const Collaborator = (props) => {
  return (
    <div className="collaborator">
        <div className="header" style={{backgroundColor: props.primaryColor}}>
          <div className="img">
          </div>
          {/* <img src="https://github.com/JulioPampuch.png" alt="Julio Pampuch" /> */}
      </div>
      <div className="footer">
        <h4>Julio Pampuch</h4>
        <h5>Desenvolvedor de software e instrutora</h5>
      </div>
    </div>
  )
}

export default Collaborator