import { useState } from 'react';

function Contagem() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <>
      <p>Contagem: {count}</p>
      <button onClick={incrementCount}>Incrementar</button>
    </>
  );
}

function App() {
  return <Contagem />;
}

export default App;