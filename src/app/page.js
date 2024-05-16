"use client";

import CountButton from "./components/CountButton";
import Todo from "./components/Todos";

export default function Home() {
  return (
    <>
      <h1>Demo</h1>
      <CountButton />
      <Todo userId={1} />
    </>
  );
}


