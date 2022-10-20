import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

function Modal({ children, close }) {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <div className="modal">{children}</div>,
                document.getElementById("modal-root")
            )}
            {ReactDOM.createPortal(
                <div onClick={close} className="backdrop"></div>,
                document.getElementById("backdrop-root")
            )}
        </React.Fragment>
    );
}

export default Modal;
