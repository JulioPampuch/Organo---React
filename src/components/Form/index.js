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


  return (
    <section className="section-form">
      <h2>Preencha os dados para criar o card do colaborador.</h2>
      <form>
      <TextArea name="Nome" placeholder="Digite seu nome" />
      <TextArea name="Cargo" placeholder="Digite seu cargo" />
      <TextArea name="Imagem" placeholder="Informe o endereço da imagem" />
      <Dropdown label="Time" itens={times} />
      </form>
    </section>
  )
}

export default Form