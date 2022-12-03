import Button from "../Button"
import Dropdown from "../DropdownList"
import TextArea from "../TextArea"
import "./form.css"

const Form = () => {

  const times = [
    "Programação",
    "Front-end",
    "Data-Science",
    "DevOps",
    "UX e Design",
    "Mobile",
    "Inovação e Gestão"
  ]


  const onSave = (event) => {
    event.preventDefault()
  }

  return (
    <section className="section-form">
      <h2>Preencha os dados para criar o card do colaborador.</h2>
      <form onSubmit={onSave}>

      <TextArea required={true} name="Nome" placeholder="Digite seu nome" />
      <TextArea required={true} name="Cargo" placeholder="Digite seu cargo" />
      <TextArea name="Imagem" placeholder="Informe o endereço da imagem" />
      <Dropdown required={true} label="Time" itens={times} />
      <Button>Criar card</Button>
      </form>
    </section>
  )
}

export default Form