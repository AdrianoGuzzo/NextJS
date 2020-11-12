import React, { useState } from "react";

function Home() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Site teste</h1>
      <p>Contador {count}</p>
      <button
        onClick={() => {
          setCount((count) => (count += 1));
        }}
      >
        Click Aqui
      </button>
    </>
  );
}
export default Home;
