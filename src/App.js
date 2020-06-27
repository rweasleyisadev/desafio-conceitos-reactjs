import React, { useState } from "react";
import "./styles.css";

function App() {
  const [data, setData] = useState(["Desafio ReactJS"]);

  function handleAddRepository() {
    setData([...data, `NodeJS`]);
  }

  function handleRemoveRepository(id) {
    let index = data.indexOf(id);
    setData(data.filter((_, i) => i !== index));
  }

  return (
    <div>
      <ul data-testid="repository-list">
        {data.map((x, i) => (
          <li key={i}>
            {x}
            <button onClick={() => handleRemoveRepository(x)}>Remover</button>
          </li>
        ))}
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
