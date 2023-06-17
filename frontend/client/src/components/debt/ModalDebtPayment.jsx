import React from "react";
import "../../styles/Modal.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MakeDebtPayment from "./MakeDebtPayment";

function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn font-quicksand">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <FontAwesomeIcon icon="sack-dollar" className="modalDollarIcon" />
          <h1 className="font-quicksand">Add a debt payment:</h1>
        </div>
        <div className="body">
          <MakeDebtPayment setOpenModal={setOpenModal}/>
        </div>
      </div>
    </div>
  );
}

export default Modal;