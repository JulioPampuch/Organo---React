import { useState } from 'react';
import Form from './components/Form';
import Header from './components/Header';
import Team from './components/Team';

function App() {

  const times = [
    {
      name: 'Selecione seu time'
    },
    {
      name: 'Programação',
      primaryColor: '#57C278',
      secundaryColor: '#D9F7E9'
    },
    {
      name: 'Front-end',
      primaryColor: '#82CFFA',
      secundaryColor: '#E8F8FF'
    },
    {
      name: 'Data-Science',
      primaryColor: '#A6D157',
      secundaryColor: '#F0F8E2'
    },
    {
      name: 'DevOps',
      primaryColor: '#E06B69',
      secundaryColor: '#FDE7E8'
    },
    {
      name: 'UX e Design',
      primaryColor: '#DB6EBF',
      secundaryColor: '#FAE9F5'
    },
    {
      name: 'Mobile',
      primaryColor: '#FFBA05',
      secundaryColor: '#FFF5D9'
    },
    {
      name: 'Inovação e Gestão',
      primaryColor: '#FF8A29',
      secundaryColor: '#FFEEDF'
    },
  ]

  const [collaborators, setCollaborators] = useState([])

  return (
    <div className="App">
      <Header />
      <Form onCollaboratorRegistered={(collaborator) => setCollaborators([...collaborators, collaborator])} teams={times.map((team) => team.name)} />
      {times.map((time) => {
        return (
          <Team key={time.name}
            name={time.name}
            primaryColor={time.primaryColor}
            secundaryColor={time.secundaryColor}
            collaborators={collaborators.filter((collaborator) => collaborator.time === time.name)} />
        )
      })}
    </div>
  );
}

export default App;
