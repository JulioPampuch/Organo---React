import { useState } from 'react';
import Form from './components/Form';
import Header from './components/Header';

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
    </div>
  );
}

export default App;
