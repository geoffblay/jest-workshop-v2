"use client";

import { createGlobalStyle, styled } from "styled-components";
import Title from "./components/Title";
import CountButton from "./components/CountButton";
import OpenModalButton from "./components/OpenModalButton";
import Modal from "./components/Modal";
import Todo from "./components/Todos";


export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <GlobalStyle />
      <HomeContainer>
        <Title name="world" />
        <CountButton />
        <Todo userId={1} />
      </HomeContainer>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #113065;
  }
`

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`


