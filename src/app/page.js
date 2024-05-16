"use client";

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
      <Title name="world" />
      <CountButton />
      <Todo userId={1} />
      <div>
        <h1>React Modal Example</h1>
        <OpenModalButton onClick={openModal} />
        <Modal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </>
  );
}
