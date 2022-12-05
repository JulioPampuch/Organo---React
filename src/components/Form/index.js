import { useState } from "react"
import Button from "../Button"
import Dropdown from "../DropdownList"
import TextArea from "../TextArea"
import "./form.css"

const Form = (props) => {

  const createTeams = (teams) => {
    teams.map((team) => {
      return (
        <>
          {team.name}
        </>
      )
    })
  }

  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')

  const onSave = (event) => {
    event.preventDefault()
    props.onCollaboratorRegistered({
      nome: nome,
      cargo: cargo,
      imagem: imagem,
      time: time
    })
  }

  return (
    <section className="section-form">
      <h2>Preencha os dados para criar o card do colaborador.</h2>
      <form onSubmit={onSave}>
        <TextArea
          required={true}
          onChanged={(value) => setNome(value)}
          stateValue={nome}
          name="Nome"
          placeholder="Digite seu nome"
        />
        <TextArea
          required={true}
          onChanged={(value) => setCargo(value)}
          stateValue={cargo}
          name="Cargo"
          placeholder="Digite seu cargo" />
        <TextArea
          onChanged={(value) => setImagem(value)}
          stateValue={imagem}
          name="Imagem"
          placeholder="Informe o endereço da imagem" />
        <Dropdown
          required={true}
          label="Time"
          itens={props.teams }
          onChanged={(value) => setTime(value)}
          stateValue={time}
        />
        <Button>Criar card</Button>
      </form>
    </section>
  )
}

export default Form