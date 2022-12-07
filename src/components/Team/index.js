import Collaborator from "../Collaborators"
import "./team.css"

const Team = (props) => {

  return (
    <section className="team" style={{ backgroundColor: props.secundaryColor }}>
      <h3>{props.name}</h3>
      <div className="border" style={{ borderColor: props.primaryColor }}></div>
      {props.collaborators.map((collaborator) => {
        return (
          <Collaborator name={collaborator.nome} job={collaborator.time} img={collaborator.imagem} color={props.primaryColor} />
        )
      })}

      {/* <Collaborator name={props.collaborator} job="Desenvolvedor" color={props.primaryColor} /> */}
    </section>
  )
}

export default Team