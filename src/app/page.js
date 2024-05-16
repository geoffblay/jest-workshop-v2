"use client";

import Title from "./components/Title";
import CountButton from "./components/CountButton";
import Todo from "./components/Todos";

export default function Home() {
  return (
    <>
      <Title name="world" />
      <CountButton />
      <Todo userId={1} />
    </>
  );
}


