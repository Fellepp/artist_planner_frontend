import FullCalendar from "./components/FullCalendar/FullCalendar";
import styles from "./App.module.css";
import "./index.css";
import Modal from "./components/Modal/Modal"
import { useState } from "react";
import { BiMenu } from 'react-icons/bi'

const cityEndpoint = "/city";
const city = "Oslo";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleScroll = () => {
    isOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset'
    return(
      <></>
    )
  }

  return (
    <div className="App">
      <div>
        <BiMenu className={styles.primaryBtn} onClick={() => setIsOpen(true)}>
        </BiMenu>
        {toggleScroll()}
        {isOpen && <Modal setIsOpen={setIsOpen}/>}
        <FullCalendar />
      </div>
    </div>
  );
}

export default App;
