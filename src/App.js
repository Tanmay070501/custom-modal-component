import { useState } from "react";
import Card from "./card/Card";
import Modal from "./modal/Modal";

function App() {
    const buttonStyle = {
        backgroundColor: "rgba(137, 43, 226, 0.192)",
        outline: "none",
        border: "none",
        cursor: "pointer",
        padding: "8px",
        color: "blueviolet",
        fontWeight: "bold",
        fontSize: "16px",
        letterSpacing: "1px",
    };
    const [showModal, setShowModal] = useState(false);
    function openModal() {
        setShowModal(true);
    }
    function closeModal() {
        setShowModal(false);
    }
    return (
        <div className="App">
            <button onClick={openModal} style={buttonStyle}>
                OPEN MODEL
            </button>
            {showModal && (
                <Modal open={openModal} close={closeModal}>
                    <Card>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Odio architecto, dolorum omnis ex odit, nam ad
                        autem saepe fuga ullam nesciunt, animi quia minus iure
                        quisquam corrupti dolore harum recusandae!
                    </Card>
                </Modal>
            )}
        </div>
    );
}

export default App;
