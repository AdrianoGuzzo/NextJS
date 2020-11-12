import React, { useState } from "react";
import Head from "next/head";

function Home() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
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
