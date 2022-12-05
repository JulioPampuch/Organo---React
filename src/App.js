import { useState } from 'react';
import Form from './components/Form';
import Header from './components/Header';
import Team from './components/Team';

function App() {

  const [collaborators, setCollaborators] = useState([])

  const onNewCollaborator = (newCollaborator) => {
    console.log(newCollaborator)
    setCollaborators([...collaborators, newCollaborator])
  }

  return (
    <div className="App">
      <Header />
      <Form onCollaboratorRegistered={collaborator => onNewCollaborator(collaborator)} />
      <Team name="Programação" />
      <Team name="Front-end" />
      <Team name="Data Science" />
    </div>
  );
}

export default App;
